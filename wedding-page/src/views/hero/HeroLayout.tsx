import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import MoreInfoButton from "./MoreInfoButton";

interface HeroLayoutProps {
    sxBackground: SxProps<Theme>;
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
                ...sxBackground,
            }}
            component="section"
        >
            <Box
                sx={{
                    height: "70vh",
                    [theme.breakpoints.down("sm")]: {
                        height: "10vh",
                    },
                }}
            />
            <Box>
                <Container
                    sx={{
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
