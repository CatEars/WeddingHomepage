import React from "react";
import { Box, TextField, useTheme } from "@mui/material";
import Button from "./Button";
import media from "./media-content";

type LoginFormProps = {
    onSubmit: () => void;
    setPassword: (password: string) => void;
    password: string;
};

const LoginForm = (props: LoginFormProps) => {
    const theme = useTheme();
    return (
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
                    value={props.password}
                    onChange={(evt) => {
                        props.setPassword(evt.target.value);
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
                <Button onClick={() => props.onSubmit()} text="Logga In" />
            </Box>
        </Box>
    );
};

export default LoginForm;
