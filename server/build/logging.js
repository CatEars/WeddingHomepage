"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const pino_http_1 = __importDefault(require("pino-http"));
const developmentOptions = () => ({
    transport: {
        targets: [
            {
                target: 'pino/file',
                options: { destination: './app.log' },
                level: 'debug'
            },
            {
                target: 'pino-pretty',
                options: { destination: 1 },
                level: 'debug'
            }
        ]
    }
});
const productionOptions = () => ({
    transport: {
        targets: [
            {
                target: 'pino/file',
                options: { destination: './app.log' },
                level: 'info'
            }
        ]
    }
});
const getLogger = (development) => {
    if (development) {
        return (0, pino_http_1.default)(developmentOptions());
    }
    else {
        return (0, pino_http_1.default)(productionOptions());
    }
};
exports.getLogger = getLogger;
