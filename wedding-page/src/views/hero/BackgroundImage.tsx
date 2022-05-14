import React from "react";
import { Box, SxProps } from "@mui/material";

type BackgroundImageProps = {
    sxBackground: SxProps;
    zIndex: number;
};

const BackgroundImage = (props: BackgroundImageProps) => {
    const { zIndex, sxBackground } = props;
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex,
                ...sxBackground,
            }}
        />
    );
};
export default BackgroundImage;
