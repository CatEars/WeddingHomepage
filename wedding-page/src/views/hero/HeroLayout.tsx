import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import MoreInfoButton from "./MoreInfoButton";
import BackgroundBlackTint from "./BackgroundBlackTint";
import BackgroundImage from "./BackgroundImage";

interface HeroLayoutProps {
    sxBackground: SxProps;
}

export default function HeroLayout(
    props: React.HTMLAttributes<HTMLDivElement> & HeroLayoutProps
) {
    const { sxBackground, children } = props;
    const theme = useTheme();
    return (
        <Box
            sx={{
                color: theme.palette.common.white,
                height: "100vh",
                minHeight: "650px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            component="section"
        >
            <BackgroundImage sxBackground={sxBackground} zIndex={-2} />
            <BackgroundBlackTint zIndex={-1} />
            <Box
                sx={{
                    zIndex: 0,
                    height: "70vh",
                    [theme.breakpoints.down("sm")]: {
                        height: "10vh",
                    },
                }}
            />
            <Box>
                <Container
                    sx={{
                        zIndex: 1,
                        mt: 3,
                        mb: 14,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {children}
                </Container>
            </Box>
            <Box
                sx={{
                    zIndex: 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}
            >
                <MoreInfoButton />
            </Box>
        </Box>
    );
}
