import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
    palette: {
        primary: {
            // beige
            main: "#F3EFE8",
            // rust
            dark: "#B56645",
        },
        secondary: {
            // light beige
            main: "#F9F7F4",
            // darker green
            dark: "#76887C",
        },
        info: {
            main: "rgba(0, 0, 0, 0.6)",
        },
        warning: {
            main: "#ffc071",
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "Playfair Display",
        fontWeightMedium: 400,
        h1: {
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "43px",
            fontSize: "32px",
        },
        h2: {
            textAlign: "center",
            lineHeight: "27px",
            fontSize: "20px",
            fontWeight: 400,
        },
        body1: {
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: "14px",
        },
        button: {
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            textTransform: "uppercase",
            fontStyle: "normal",
        },
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontFamily: "Playfair Display",
    textTransform: "uppercase",
};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            //...fontHeader,
        },
        h2: {
            ...rawTheme.typography.h2,
            //...fontHeader,
        },
        body1: {
            ...rawTheme.typography.body1,
        },
        body2: {
            ...rawTheme.typography.body2,
        },
    },
};

export default theme;
