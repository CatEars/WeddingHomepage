import * as React from "react";
import { Typography, Box } from "@mui/material";
import ProductHeroLayout from "./HeroLayout";
import text from "../../text-content";
import media from "../../media-content";
import { useScroll } from "../scroll";
import Button from "../../components/Button";

export default function ProductHero() {
    const { cta, scrollToRef } = useScroll();
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${media.hero.backgroundUrl})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "center",
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
            <Typography variant="body2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.date}
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.time}
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 1 }}>
                {text.hero.place}
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Button text="OSA" onClick={() => scrollToRef(cta)} />
            </Box>
        </ProductHeroLayout>
    );
}
