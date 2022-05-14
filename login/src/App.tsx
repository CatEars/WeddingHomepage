import React, { useEffect } from "react";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { login } from "./api";
import { serialize } from "cookie";
import theme from "./theme";
import BackgroundColor from "./BackgroundColor";
import media from "./media-content";
import Button from "./Button";

const useCustomWebsiteTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, []);
};

const generateCookie = (token: string): string => {
    const currentDate = new Date();
    const fiveDaysAhead = currentDate.getDate() + 5;
    const targetDate = new Date();
    targetDate.setDate(fiveDaysAhead);
    return serialize("secret_token", token, {
        expires: targetDate,
        path: "/",
        sameSite: true,
        secure: true,
    });
};

function App() {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const secret = (data.get("password") || "") as string;
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
                });
        }
    };

    useCustomWebsiteTitle(media.websiteName);

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="section"
                sx={{
                    mt: 10,
                    mb: 20,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CssBaseline />
                <BackgroundColor />
                <Box>
                    <Box
                        component="img"
                        src={media.iconUrl}
                        sx={{
                            width: "80%",
                            [theme.breakpoints.up("sm")]: {
                                width: "50vh",
                            },
                        }}
                    />
                </Box>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                py: 8,
                            }}
                        >
                            <Box
                                component="form"
                                onSubmit={onSubmit}
                                sx={{
                                    width: "80%",
                                }}
                            >
                                <Box>
                                    <TextField
                                        label="Lösenord"
                                        variant="outlined"
                                        fullWidth
                                        color="info"
                                        sx={{
                                            mt: 3,
                                            width: "80%",
                                            [theme.breakpoints.up("sm")]: {
                                                width: "50vh",
                                            },
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        mt: 3,
                                    }}
                                >
                                    <Button submit text="Logga In" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
