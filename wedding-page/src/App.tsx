import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import HeroPage from "./views/hero/HeroPage";
import Directions from "./views/directions/DirectionsPage";
import CtaPage from "./views/cta/CtaPage";
import theme from "./theme";
import { initializeText } from "./text-content";

function App() {
    const [_, setTextLoaded] = useState(false);
    useEffect(() => {
        initializeText().then(() => {
            setTextLoaded(true);
        });
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <HeroPage />
            <Directions />
            <CtaPage />
        </ThemeProvider>
    );
}

export default App;
