import _ from "lodash";

export type HeroTextContent = {
    landingMessage: string;
    landingSubMessage: string;
};

export type InformationCardContent = {
    header: string;
    message: string;
};

export type LinkInformation = {
    href: string;
    displayText: string;
};

export type TextCardContent = InformationCardContent & {
    type: "text";
};

export type LinkInformationCardContent = InformationCardContent & {
    type: "link";
    links: LinkInformation[];
};

export type ButtonInformationCardContent = InformationCardContent & {
    type: "button";
    buttonText: string;
};

export type InfoCard =
    | TextCardContent
    | LinkInformationCardContent
    | ButtonInformationCardContent;

export type InformationCardsContent = {
    cards: InfoCard[];
};

export type MapContent = {
    header: string;
    link: string;
};

export type ContactCard = {
    name: string;
    contact: string;
    description: string;
};

export type ContactsContent = {
    contact1: ContactCard;
    contact2: ContactCard;
};

export type AttendanceContent = {
    willAttend: string;
    yesAnswer: string;
    noAnswer: string;
};

export type CtaPersonContent = {
    person: (index: number) => string;
    name: string;
    allEater: string;
    vegetarian: string;
    vegan: string;
    allergies: string;
    diet: string;
};

export type CtaFormContent = {
    rsvp: string;
    numberOfPeople: string;
    sendRsvp: string;
};

export type CtaContent = {
    attend: AttendanceContent;
    thankYou: string;
    person: CtaPersonContent;
    form: CtaFormContent;
};

export type TextContent = {
    hero: HeroTextContent;
    info: InformationCardsContent;
    contacts: ContactsContent;
    cta: CtaContent;
    map: MapContent;
    title?: string;
};

const defaultText: TextContent = {
    hero: {
        landingMessage: "Att gifta sig är skojsigt",
        landingSubMessage: "Väldigt kul, faktiskt",
    },
    contacts: {
        contact1: {
            name: "John Doe",
            contact: "0123456789",
            description: "Toast master #1",
        },
        contact2: {
            name: "Jane Doe",
            contact: "9876543210",
            description: "Alpha toast master",
        },
    },
    info: {
        cards: [
            {
                type: "text",
                header: "Ta dig hit med",
                message: "Bilen",
            },
            {
                type: "text",
                header: "Toastmasters",
                message: "Oj vad snygga dem ska vara då",
            },
            {
                type: "text",
                header: "Svara nu",
                message: '"Självklart, kommer jag/vi/oss"',
            },
            {
                type: "link",
                header: "Ge bort",
                message: "Ge bort grejer, hit istället",
                links: [
                    {
                        href: "https://www.wateraid.org",
                        displayText: "www.wateraid.org",
                    },
                    {
                        href: "https://www.redcross.org",
                        displayText: "www.redcross.org",
                    },
                ],
            },
            {
                type: "button",
                header: "Skriv i nu!",
                message: "Just do it!",
                buttonText: "OSA",
            },
            {
                type: "text",
                header: "Do you even kid?",
                message: "no",
            },
        ],
    },
    cta: {
        attend: {
            willAttend: "Kommer ni?",
            yesAnswer: "Jajamensan, självklart",
            noAnswer: "Nej, tyvärr",
        },
        thankYou: "Tack så mycket!",
        person: {
            person: (index: number) => `Person ${index}`,
            diet: "diet",
            allEater: "Äter allt",
            allergies: "Allergier",
            name: "Namn",
            vegan: "Vegan",
            vegetarian: "Vegetarian",
        },
        form: {
            numberOfPeople: "Ditt antal personer",
            rsvp: "R.S.V.P",
            sendRsvp: "Skicka meddelande",
        },
    },
    map: {
        header: "Detta är ett karta",
        link: "Hitta hit",
    },
    title: "Gifta sig - Woop Woop!",
};

export const initializeText = async (): Promise<void> => {
    try {
        const pluginName = "text-override";
        const textModule = await import(`./content/${pluginName}`);
        if (textModule.default) {
            const override: TextContent = textModule.default as any;
            _.merge(defaultText, override);
            console.log("Updated text to", defaultText);
        }
    } catch (error) {
        /* Use default text if no override was found */
    }
};

export default defaultText;
