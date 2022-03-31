import React, { useEffect } from "react";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
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
import Footer from "./views/footer/Footer";

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
                <Footer />
            </ScrollToContextProvider>
        </ThemeProvider>
    );
};

export default App;
