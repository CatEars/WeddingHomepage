import React from "react";
import { Button as MuiButton } from "@mui/material";

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
                background,
                "&:hover": {
                    background: "#4D5A4F",
                },
                minWidth: "100px",
            }}
            disabled={props.disabled}
            onClick={() => {
                if (!props.disabled && props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.text}
        </MuiButton>
    );
};

export default Button;
