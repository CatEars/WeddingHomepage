import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import serveStatic from 'serve-static'
import * as uuid from 'uuid'
import * as fs from 'fs'
import * as path from 'path'
import * as logging from './logging'

const development = true || process.env['ENVIRONMENT'] === 'dev'
const port = parseInt(process.env['PORT'] || '3000')
const storageArea = process.env['STORAGE_AREA'] || './'
const secret = process.env['SECRET'] || 'HelloWorld'
const userToken = process.env['USER_TOKEN'] || '1cde9145-377a-46cb-90be-3e3d765f3409'

const loginRoot = './login-build'
const contentRoot = './content-build'
const serveLogin = serveStatic(loginRoot)
const serveContent = serveStatic(contentRoot)

const httpLogger = logging.getLogger(development)
const app = express()

const authenticate = (password: string): boolean => development || password === secret
const hasUserTokenSet = (req: express.Request) => {
    return req.cookies && req.cookies.secret_token && req.cookies.secret_token === userToken
}

app.use(httpLogger)
app.use(cookieParser())
app.use(bodyParser.json())

app.get('/*', (req, res, next) => {
    if (hasUserTokenSet(req)) {
        serveContent(req, res, next)
    } else {
        serveLogin(req, res, next)
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
        const id = uuid.v4()
        const fileName = `${id}.json`
        const filePath = path.join(storageArea, fileName);
        fs.writeFileSync(filePath, fileContent, { encoding: 'utf-8' })
        req.log.info(`New OSA registered with id=${id}`)
    }
    res.json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


