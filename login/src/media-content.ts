import _ from "lodash";

export type MediaContent = {
    iconUrl: string;
};

const defaultMedia: MediaContent = {
    iconUrl: "",
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
