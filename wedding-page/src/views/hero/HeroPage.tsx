import * as React from "react";
import { Typography } from "@mui/material";
import ProductHeroLayout from "./HeroLayout";
import text from "../../text-content";
import media from "../../media-content";

export default function ProductHero() {
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
            <Typography color="inherit" align="center" variant="h2">
                {text.hero.landingMessage}
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                {text.hero.landingSubMessage}
            </Typography>
        </ProductHeroLayout>
    );
}
