import * as React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import HeroLayout from "./HeroLayout";
import text from "../../text-content";
import media from "../../media-content";
import { useScroll } from "../scroll";
import BigButton from "../../components/BigButton";

export default function ProductHero() {
    const { cta, scrollToRef } = useScroll();
    const theme = useTheme();
    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${media.hero.backgroundUrl})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: -2,
                [theme.breakpoints.down("sm")]: {
                    backgroundImage: `url(${
                        media.hero.portraitBackgroundUrl ??
                        media.hero.backgroundUrl
                    })`,
                },
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={media.hero.backgroundUrl}
                alt="increase priority"
            />
            {media.hero.heroIconUrl ? (
                <Box component="img" src={media.hero.heroIconUrl} />
            ) : (
                <Typography variant="h2" color="inherit" sx={{ mt: 2 }}>
                    Placeholder
                </Typography>
            )}
            <Typography variant="h2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.date}
            </Typography>
            <Typography variant="h2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.time}
            </Typography>
            <Typography variant="h2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.place}
            </Typography>
            <Box sx={{ mt: 4 }}>
                <BigButton
                    text={text.hero.buttonText}
                    onClick={() => scrollToRef(cta)}
                />
            </Box>
        </HeroLayout>
    );
}
