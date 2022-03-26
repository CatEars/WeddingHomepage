import React from "react";
import { Button as MuiButton } from "@mui/material";

type BigButtonProps = {
    text: string;
    onClick?: () => void;
};

const BigButton = (props: BigButtonProps) => (
    <MuiButton
        sx={{
            width: "180px",
            height: "68px",
            color: "#F3EFE8",
            border: "3px solid #F3EFE8",
            borderRadius: "34px",
            fontSize: "28px",
            fontWeight: "600",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            letterSpacing: "0.05em",
        }}
        onClick={props.onClick}
    >
        {props.text}
    </MuiButton>
);

export default BigButton;
