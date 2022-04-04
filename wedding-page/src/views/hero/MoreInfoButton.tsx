import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useScroll } from "../scroll";

const MoreInfoButton = () => {
    const { info, scrollToRef } = useScroll();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                color: "#F3EFE8",
                width: "100%",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                letterSpacing: "0.05em",
                mr: "2em",
                mb: "2em",
                backgroundColor: "rgba(0,0,0,0)",
                ":hover": {
                    backgroundColor: "rgba(0,0,0,0)",
                },
                boxShadow: 0,
                cursor: "pointer",
            }}
            onClick={() => {
                scrollToRef(info);
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontWeight: "600",
                    fontStyle: "Semi Bold",
                }}
            >
                Mer Info
            </Typography>
            <KeyboardArrowDownIcon />
        </Box>
    );
};

export default MoreInfoButton;
