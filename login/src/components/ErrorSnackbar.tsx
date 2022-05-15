import React from "react";
import { Snackbar, Alert, Typography } from "@mui/material";

type ErrorSnackbarProps = {
    text: string;
    open?: boolean;
    onClose?: () => void;
};

const ErrorSnackbar = (props: ErrorSnackbarProps) => {
    const { open, onClose, text } = props;
    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => (onClose ? onClose() : 0)}
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
                <Typography variant="body1">{text}</Typography>
            </Alert>
        </Snackbar>
    );
};

export default ErrorSnackbar;
