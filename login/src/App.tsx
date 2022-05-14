import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { login } from "./api";
import { serialize } from "cookie";
import theme from "./theme";
import BackgroundColor from "./BackgroundColor";
import media from "./media-content";
import Button from "./Button";

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

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <BackgroundColor />
                <Box
                    sx={{
                        mt: 10,
                    }}
                >
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
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    noValidate
                    sx={{
                        mt: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            color="info"
                            margin="normal"
                            required
                            name="password"
                            label="Lösenord"
                            id="current-password"
                            autoComplete="current-password"
                            sx={{
                                background: "white",
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
            </Container>
        </ThemeProvider>
    );
}

export default App;
