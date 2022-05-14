import { Box } from "@mui/material";
import React from "react";

const BackgroundColor = () => (
    <Box
        sx={{
            zIndex: -10,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "primary.light",
        }}
    />
);

export default BackgroundColor;
