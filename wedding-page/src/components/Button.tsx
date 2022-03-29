import React from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";

/**
 * Enabled = #76887C
 * Hovered = #4D5A4F
 * Disabled = #000000 12%
 *
 * ColoredText = #FFFFFF
 * DisabledText = #000000 20%
 */

type ButtonProps = {
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = (props: ButtonProps) => {
    const background = props.disabled ? "rgba(0, 0, 0, 0.12)" : "#76887C";

    return (
        <MuiButton
            sx={{
                borderRadius: "18px",
                color: "#FFF",
                margin: "8px 0px",
                padding: "8px 20px",
                height: "40px",
                width: "130px",
                background,
                "&:hover": {
                    background: "#4D5A4F",
                },
                minWidth: "100px",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                letterSpacing: "0.1em",
                boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
            }}
            disabled={props.disabled}
            onClick={() => {
                if (!props.disabled && props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.loading ? (
                <CircularProgress size={24} color="inherit" />
            ) : (
                props.text
            )}
        </MuiButton>
    );
};

export default Button;
