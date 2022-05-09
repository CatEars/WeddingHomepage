import _ from "lodash";

export type HeroTextContent = {
    date: string;
    time: string;
    place: string;
    buttonText: string;
};

export type InformationCardContent = {
    header: string;
    message: string | string[];
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
    subtext: string;
    coordinates: string;
    link: string;
};

export type ContactCard = {
    name: string;
    contact: string;
};

export type ContactsContent = {
    header: string;
    message: string[];
    mail: string;
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
    numberOfPeople: string;
    sendRsvp: string;
};

export type CtaHeader = {
    main: string;
    subtexts: string[];
    link: string;
};

export type CtaContent = {
    header: CtaHeader;
    attend: AttendanceContent;
    thankYou: string;
    person: CtaPersonContent;
    form: CtaFormContent;
};

export type FooterContact = {
    name: string;
    phone: string;
};

export type FooterContent = {
    heading: string;
    mail: string;
    contact1: FooterContact;
    contact2: FooterContact;
};

export type TextContent = {
    hero: HeroTextContent;
    info: InformationCardsContent;
    contacts: ContactsContent;
    cta: CtaContent;
    map: MapContent;
    footer: FooterContent;
    title?: string;
};

const defaultText: TextContent = {
    hero: {
        date: "1st Jan 1970",
        time: "4 o'clock in the afternoon",
        place: "backyard",
        buttonText: "OSA",
    },
    contacts: {
        header: "Toastmasters",
        message: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula id lorem vitae consectetur. Etiam a lacus enim.",
        ],
        mail: "mail.example.com",
        contact1: {
            name: "John Doe",
            contact: "012 - 34 56 789",
        },
        contact2: {
            name: "Jane Doe",
            contact: "987 - 65 43 210",
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
        header: {
            main: "OSA",
            subtexts: [
                "Let us know if join party",
                "please email within X hours of getting message at:",
            ],
            link: "mail.example.com",
        },
        attend: {
            willAttend: "Kommer ni?",
            yesAnswer: "Jajamensan, självklart",
            noAnswer: "Nej, tyvärr",
        },
        thankYou: "Tack så mycket!",
        person: {
            person: (index: number) => `Gäst ${index}`,
            diet: "Diet",
            allEater: "Äter allt",
            allergies: "Allergier",
            name: "Namn",
            vegan: "Vegan",
            vegetarian: "Vegetarian",
        },
        form: {
            numberOfPeople: "Ditt antal personer",
            sendRsvp: "Skicka in",
        },
    },
    map: {
        header: "Detta är ett karta",
        subtext: "Placey placey",
        coordinates: "51.0 N, -2 E",
        link: "Klicka här",
    },
    footer: {
        heading: "Kom i kontakt med oss",
        mail: "mail.example.com",
        contact1: {
            name: "Girl",
            phone: "098 - 76 54 321",
        },
        contact2: {
            name: "Guy",
            phone: "123 - 45 67 890",
        },
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
