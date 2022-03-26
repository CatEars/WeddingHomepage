import _ from "lodash";

export type MapMedia = {
    position: [number, number];
    link: string;
};

export type ContactCardMedia = {
    imageUrl: string;
};

export type ContactMedia = {
    contact1: ContactCardMedia;
    contact2: ContactCardMedia;
};

export type InfoCardMedia = {
    url: string;
};

export type InfoMedia = {
    cards: InfoCardMedia[];
};

export type HeroContent = {
    backgroundUrl: string;
    heroIconUrl?: string;
};

export type MediaContent = {
    hero: HeroContent;
    map: MapMedia;
    contact: ContactMedia;
    info: InfoMedia;
};

const defaultMedia: MediaContent = {
    hero: {
        backgroundUrl:
            "https://images.unsplash.com/photo-1550005809-91ad75fb315f",
    },
    map: {
        position: [51.0, -2],
        link: "https://helloworld.com",
    },
    contact: {
        contact1: {
            imageUrl: "/info/terra.jpg",
        },
        contact2: {
            imageUrl: "/info/terra.jpg",
        },
    },
    info: {
        cards: [
            {
                url: "/info/terra.jpg",
            },
            {
                url: "/info/terra.jpg",
            },
            {
                url: "/info/terra.jpg",
            },
            {
                url: "/info/terra.jpg",
            },
            {
                url: "/info/terra.jpg",
            },
            {
                url: "/info/terra.jpg",
            },
        ],
    },
};

export const initializeMedia = async (): Promise<void> => {
    try {
        const pluginName = "media-override";
        const textModule = await import(`./content/${pluginName}`);
        if (textModule.default) {
            const override: MediaContent = textModule.default as any;
            _.merge(defaultMedia, override);
            console.log("Updated media to", defaultMedia);
        }
    } catch (error) {
        /* Use default text if no override was found */
    }
};

export default defaultMedia;
