import * as http from 'http'

const url = 'http://localhost:3000/';

(async () => {
    const content = JSON.stringify({
        content: {
            who: 'Me',
            a: 'b',
            message: 'Hello, World!'
        }
    })

    return await new Promise(resolve => {
        const req = http.request(url + 'osa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(content),
                'Cookie': 'secret_token=1cde9145-377a-46cb-90be-3e3d765f3409'
            },
        }, res => {
            res.setEncoding('utf-8')
            res.on('end', resolve)
        })
        req.write(content)
        req.end()
    })
})()
    .then(console.log)
    .catch(console.warn)