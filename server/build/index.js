"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const serve_static_1 = __importDefault(require("serve-static"));
const uuid = __importStar(require("uuid"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const logging = __importStar(require("./logging"));
const development = process.env['ENVIRONMENT'] === 'dev';
const port = parseInt(process.env['PORT'] || '3000');
const storageArea = process.env['STORAGE_AREA'] || './';
const secret = process.env['SECRET'] || 'HelloWorld';
const userToken = process.env['USER_TOKEN'] || '1cde9145-377a-46cb-90be-3e3d765f3409';
const loginRoot = process.env['LOGIN_ROOT'] || './login-build';
const contentRoot = process.env['CONTENT_ROOT'] || './content-build';
const serveLogin = (0, serve_static_1.default)(loginRoot);
const serveContent = (0, serve_static_1.default)(contentRoot);
const httpLogger = logging.getLogger(development);
const app = (0, express_1.default)();
const authenticate = (password) => development || password === secret;
const hasUserTokenSet = (req) => {
    return req.cookies && req.cookies.secret_token && req.cookies.secret_token === userToken;
};
const setUserIdCookie = (req, res, next) => {
    if (req.cookies && !req.cookies.user_id) {
        const id = uuid.v4();
        req.cookies.user_id = id;
        res.cookie('user_id', id, {
            expires: new Date('2024-01-01T01:01:01')
        });
    }
    next();
};
app.use(httpLogger);
app.use((0, cookie_parser_1.default)());
app.use(setUserIdCookie);
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    if (hasUserTokenSet(req)) {
        res.redirect('/info/');
    }
    else {
        res.redirect('/login/');
    }
});
app.get('/login*', serveLogin);
app.get('/info*', (req, res, next) => {
    if (hasUserTokenSet(req)) {
        serveContent(req, res, next);
    }
    else {
        res.sendStatus(401);
    }
});
app.post('/login', (req, res) => {
    const password = req.body && req.body.password || '';
    if (authenticate(password)) {
        res.json({
            success: true,
            token: userToken
        });
    }
    else {
        res.json({
            success: false
        });
    }
});
app.post('/osa', (req, res) => {
    if (hasUserTokenSet(req)) {
        const content = req.body.content || { fail: true };
        const fileContent = JSON.stringify(content);
        const now = new Date(Date.now());
        const id = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-` +
            `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
        const userId = (req.cookies && req.cookies.user_id) ? req.cookies.user_id : uuid.v4();
        const fileName = `${userId}_${id}.json`;
        const filePath = path.join(storageArea, fileName);
        fs.writeFileSync(filePath, fileContent, { encoding: 'utf-8' });
        req.log.info(`New OSA registered with id=${id}`);
    }
    res.json({
        success: true
    });
});
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    process.on('SIGINT', () => {
        server.close();
    });
});
