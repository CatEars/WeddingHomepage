import _ from 'lodash'

export type MapMedia = {
    position: [number, number]
    link: string
}

export type ContactCardMedia = {
    imageUrl: string
}

export type ContactMedia = {
    contact1: ContactCardMedia,
    contact2: ContactCardMedia
}

export type MediaContent = {
    map: MapMedia,
    contact: ContactMedia
}

const defaultMedia: MediaContent = {
    map: {
        position: [51.0, -2],
        link: 'https://helloworld.com'
    },
    contact: {
        contact1: {
            imageUrl: 'info/terra.jpg',
        },
        contact2: {
            imageUrl: 'info/terra.jpg'
        }
    }
}

export const initializeMedia = async (): Promise<void> => {
    try {
        const pluginName = 'media-override'
        const textModule = await import(`./content/${pluginName}`);
        if (textModule.default) {
            const override: MediaContent = (textModule.default as any)
            _.merge(defaultMedia, override)
            console.log('Updated text to', defaultMedia)
        }
    } catch (error) { /* Use default text if no override was found */ }
}

export default defaultMedia;