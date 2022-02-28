
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

export type MapContent = {
    header: string,
    link: string
}

export type ContactCard = {
    name: string,
    contact: string,
    description: string
}

export type ContactsContent = {
    contact1: ContactCard,
    contact2: ContactCard
}

export type TextContent = {
    hero: HeroTextContent
    info: InformationCardsContent,
    contacts: ContactsContent,
    map: MapContent
}



const defaultText: TextContent = {
    hero: {
        landingMessage: 'Att gifta sig är skojsigt',
        landingSubMessage: 'Väldigt kul, faktiskt'
    },
    contacts: {
        contact1: {
            name: 'John Doe',
            contact: '0123456789',
            description: 'Toast master #1'
        },
        contact2: {
            name: 'Jane Doe',
            contact: '9876543210',
            description: 'Alpha toast master'
        }
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
    },
    map: {
        header: 'Detta är ett karta',
        link: 'Hitta hit'
    }
}

export const initializeText = async (): Promise<void> => {
    try {
        const pluginName = 'text-override'
        const textModule = await import(`./content/${pluginName}`);
        if (textModule.default) {
            const override: TextContent = (textModule.default as any)
            _.merge(defaultText, override)
            console.log('Updated text to', defaultText)
        }
    } catch (error) { /* Use default text if no override was found */ }
}

export default defaultText
