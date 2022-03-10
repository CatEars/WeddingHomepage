import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import serveStatic from 'serve-static'
import * as uuid from 'uuid'
import * as fs from 'fs'
import * as path from 'path'
import * as logging from './logging'

const development = process.env['ENVIRONMENT'] === 'dev'
const port = parseInt(process.env['PORT'] || '3000')
const storageArea = process.env['STORAGE_AREA'] || './'
const secret = process.env['SECRET'] || 'HelloWorld'
const userToken = process.env['USER_TOKEN'] || '1cde9145-377a-46cb-90be-3e3d765f3409'

const loginRoot = process.env['LOGIN_ROOT'] || './login-build'
const contentRoot = process.env['CONTENT_ROOT'] || './content-build'
const serveLogin = serveStatic(loginRoot)
const serveContent = serveStatic(contentRoot)

const httpLogger = logging.getLogger(development)
const app = express()

const authenticate = (password: string): boolean => development || password === secret
const hasUserTokenSet = (req: express.Request) => {
    return req.cookies && req.cookies.secret_token && req.cookies.secret_token === userToken
}
const setUserIdCookie = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.cookies && !req.cookies.user_id) {
        const id = uuid.v4()
        req.cookies.user_id = id
        res.cookie('user_id', id, {
            expires: new Date('2024-01-01T01:01:01')
        })
    }
    next()
}

app.use(httpLogger)
app.use(cookieParser())
app.use(setUserIdCookie)
app.use(bodyParser.json())

app.get('/', (req, res) => {
    if (hasUserTokenSet(req)) {
        res.redirect('/info/')
    } else {
        res.redirect('/login/')
    }
})

app.get('/login*', serveLogin)

app.get('/info*', (req, res, next) => {
    if (hasUserTokenSet(req)) {
        serveContent(req, res, next)
    } else {
        res.sendStatus(401)
    }
})

app.post('/login', (req, res) => {
    const password: string = req.body && req.body.password || ''
    if (authenticate(password)) {
        res.json({
            success: true,
            token: userToken
        })
    } else {
        res.json({
            success: false
        })
    }
})

app.post('/osa', (req, res) => {
    if (hasUserTokenSet(req)) {
        const content = req.body.content || {fail: true}
        const fileContent = JSON.stringify(content)
        const now = new Date(Date.now())
        const id = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-` +
            `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`
        const userId = (req.cookies && req.cookies.user_id) ? req.cookies.user_id : uuid.v4()
        const fileName = `${userId}_${id}.json`
        const filePath = path.join(storageArea, fileName);
        fs.writeFileSync(filePath, fileContent, { encoding: 'utf-8' })
        req.log.info(`New OSA registered with id=${id}`)
    }
    res.json({
        success: true
    })
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    process.on('SIGINT', () => {
        server.close()
    })
})

