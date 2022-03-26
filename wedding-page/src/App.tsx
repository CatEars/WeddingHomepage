import React, { useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HeroPage from "./views/hero/HeroPage";
import InfoCards from "./views/infocard/InfoCardPage";
import CtaPage from "./views/cta/CtaPage";
import ContactPage from "./views/contact/ContactPage";
import MapPage from "./views/map/MapPage";
import { ScrollToContextProvider } from "./views/scroll";
import "./base.css";
import text from "./text-content";

const useCustomWebsiteTitle = () => {
    useEffect(() => {
        document.title = text.title ?? "-";
    }, []);
};

const App = () => {
    useCustomWebsiteTitle();
    return (
        <ThemeProvider theme={theme}>
            <ScrollToContextProvider>
                <HeroPage />
                <InfoCards />
                <ContactPage />
                <MapPage />
                <CtaPage />
            </ScrollToContextProvider>
        </ThemeProvider>
    );
};

export default App;
