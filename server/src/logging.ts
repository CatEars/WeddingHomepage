import pino, { HttpLogger, Options } from 'pino-http'

const developmentOptions = (): Options => ({
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
})

const productionOptions = (): Options => ({
    transport: {
        targets: [
            {
                target: 'pino/file',
                options: { destination: './app.log' },
                level: 'info'
            }
        ]
    }
})

export const getLogger = (development: boolean): HttpLogger => {
    if (development) {
        return pino(developmentOptions())
    } else {
        return pino(productionOptions())
    }
}