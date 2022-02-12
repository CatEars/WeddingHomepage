import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeroPage from "./views/hero/HeroPage";
import Directions from "./views/directions/DirectionsPage";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HeroPage />
            <Directions />
        </ThemeProvider>
    );
}

export default App;
