import React, { useEffect, useState } from "react";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/400.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import { ThemeProvider } from "@mui/material/styles";
import {
    Container,
    CssBaseline,
    Grid,
    Snackbar,
    TextField,
    Alert,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { login } from "./api";
import theme from "./theme";
import media from "./media-content";
import Button from "./Button";
import { generateCookie } from "./cookies";

const useCustomWebsiteTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, []);
};

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
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={5000}
                        onClose={() => showSnackbar(false)}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <Alert
                            sx={{
                                backgroundColor: "primary.dark",
                                color: "primary.light",
                            }}
                            severity="warning"
                        >
                            <Typography variant="body1">
                                {media.loginError}
                            </Typography>
                        </Alert>
                    </Snackbar>
                    <Box>
                        <Box
                            component="img"
                            src={media.iconUrl}
                            sx={{
                                width: "80%",
                                [theme.breakpoints.up("sm")]: {
                                    width: "50%",
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
                                    sx={{
                                        width: "80%",
                                    }}
                                >
                                    <Box>
                                        <TextField
                                            label={media.passwordLabel}
                                            variant="outlined"
                                            fullWidth
                                            color="info"
                                            sx={{
                                                mt: 3,
                                                width: "100%",
                                                [theme.breakpoints.up("sm")]: {
                                                    width: "80%",
                                                },
                                            }}
                                            value={password}
                                            onChange={(evt) => {
                                                setPassword(evt.target.value);
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
                                        <Button
                                            onClick={() => onSubmit()}
                                            text="Logga In"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
