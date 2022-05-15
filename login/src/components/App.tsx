import React, { useState } from "react";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";
import { useCustomWebsiteTitle } from "@catears/react-bonus";
import { login } from "../api";
import theme from "../theme";
import media from "../media-content";
import { generateCookie } from "../cookies";
import ErrorSnackbar from "./ErrorSnackbar";
import MainIcon from "./MainIcon";
import LoginForm from "./LoginForm";

function App() {
    const [password, setPassword] = useState("");
    const [snackbarOpen, showSnackbar] = useState(false);

    const onSubmit = () => {
        const secret = (password || "") as string;
        if (secret.length > 0) {
            login(secret)
                .then((token) => {
                    console.log(
                        `Got token back: `,
                        token,
                        "reloading with cookie"
                    );
                    document.cookie = generateCookie(token);
                    window.location.replace("/info");
                })
                .catch((error) => {
                    console.warn("Error when logging in", error);
                    showSnackbar(true);
                });
        }
    };

    useCustomWebsiteTitle(media.websiteName);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    backgroundColor: "primary.light",
                }}
            >
                <Container
                    component="section"
                    sx={{
                        pt: 10,
                        pb: 20,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CssBaseline />
                    <ErrorSnackbar
                        text={media.loginError}
                        open={snackbarOpen}
                        onClose={() => showSnackbar(false)}
                    />
                    <Box>
                        <MainIcon />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            py: 8,
                        }}
                    >
                        <LoginForm
                            password={password}
                            setPassword={setPassword}
                            onSubmit={onSubmit}
                        />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
