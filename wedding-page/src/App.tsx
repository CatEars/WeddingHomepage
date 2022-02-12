import React, { useRef } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import HeroPage from "./views/hero/HeroPage";
import InfoCards from "./views/infocard/InfocardPage";
import CtaPage from "./views/cta/CtaPage";
import theme from "./theme";
import MapPage from "./views/map/MapPage";
import "./base.css";

const App = () => {
    const mapRef = useRef(null);
    return (
        <ThemeProvider theme={theme}>
            <HeroPage />
            <InfoCards mapRef={mapRef} />
            <MapPage refProp={mapRef} />
            <CtaPage />
        </ThemeProvider>
    );
};

export default App;
