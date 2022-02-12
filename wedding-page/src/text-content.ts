import _ from 'lodash'

export type HeroTextContent = {
    landingMessage: string;
    landingSubMessage: string;
}

export type InformationCardContent = {
    header: string;
    message: string;
}

export type InformationCardsContent = {
    card1: InformationCardContent
    card2: InformationCardContent
    card3: InformationCardContent
}

export type TextContent = {
    hero: HeroTextContent
    info: InformationCardsContent
}

const defaultText: TextContent = {
    hero: {
        landingMessage: 'Att gifta sig är skojsigt',
        landingSubMessage: 'Väldigt kul, faktiskt'
    },
    info: {
        card1: {
            header: 'Ta dig hit med',
            message: 'Bilen'
        },
        card2: {
            header: 'Ta dig hit med',
            message: 'Bussen'
        },
        card3: {
            header: 'Ta dig hit med',
            message: 'Flyget'
        }
    }
}

export const initializeText = async (): Promise<void> => {
    try {
        const importPath: string = './content/text-override.ts'
        const textModule = await import(importPath);
        if (textModule.default) {
            const override: TextContent = (textModule.default as any)
            _.assign(defaultText, override)
        }
    } catch (error) {
        console.error(error)
        /* Use default text if no override was found */
    }
}

export default defaultText
