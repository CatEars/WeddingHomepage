import React from "react";
import { Box } from "@mui/system";
import { SxProps } from "@mui/material";

type BackgroundBlackTintProps = {
    zIndex: number;
};

const BackgroundBlackTint = (props: BackgroundBlackTintProps) => {
    const { zIndex } = props;
    const sx: SxProps = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.06)",
        zIndex,
    };
    return <Box sx={sx}></Box>;
};

export default BackgroundBlackTint;
