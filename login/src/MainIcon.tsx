import React from "react";
import { Box, useTheme } from "@mui/material";
import media from "./media-content";

const MainIcon = () => {
    const theme = useTheme();
    return (
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
    );
};

export default MainIcon;
