import React, {
    createContext,
    ReactElement,
    RefObject,
    useContext,
} from "react";

export type ScrollableElements = {
    map: RefObject<ReactElement>;
    cta: RefObject<ReactElement>;
    contact: RefObject<ReactElement>;
    info: RefObject<ReactElement>;
    scrollToRef: (ref?: RefObject<ReactElement>) => void;
};

const scrollToRef = (ref?: RefObject<ReactElement>) => {
    if (ref && ref.current) {
        const theRef: any = ref.current;
        if (theRef.scrollIntoView) {
            theRef.scrollIntoView();
        }
    }
};

const defaultValue: ScrollableElements = {
    map: React.createRef(),
    cta: React.createRef(),
    contact: React.createRef(),
    info: React.createRef(),
    scrollToRef,
};

const ScrollToContext = createContext<ScrollableElements>(defaultValue);

type ScrollContextProps = {
    children: React.ReactNode;
};

export const ScrollToContextProvider = (props: ScrollContextProps) => {
    return (
        <ScrollToContext.Provider value={defaultValue}>
            {props.children}
        </ScrollToContext.Provider>
    );
};

export const useScroll = () => {
    const scroll = useContext(ScrollToContext);
    if (scroll === undefined) {
        throw new Error(`Tried to use scroll without any scroll context`);
    }
    return scroll;
};
