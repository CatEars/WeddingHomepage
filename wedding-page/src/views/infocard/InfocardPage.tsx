import { Box, Container, Grid } from "@mui/material";
import _ from "lodash";
import { ReactElement, RefObject } from "react";
import text from "../../text-content";
import media from "../../media-content";
import { useScroll } from "../scroll";
import CardSelector from "./CardSelector";

const InfocardPage = () => {
    const { map, contact, cta, scrollToRef } = useScroll();
    const makeRefClicker = (ref: RefObject<ReactElement>) => () =>
        scrollToRef(ref);

    const onClicks = [
        makeRefClicker(map),
        makeRefClicker(contact),
        makeRefClicker(cta),
        undefined,
        makeRefClicker(cta),
        undefined,
    ];

    const cards = _.zip(text.info.cards, media.info.cards, onClicks).map(
        ([text, media, onClick]) => ({ text, media, onClick })
    );

    return (
        <Box
            sx={{
                display: "flex",
                overflow: "hidden",
                bgcolor: "secondary.light",
            }}
            component="section"
        >
            <Container
                sx={{ display: "flex", position: "relative", mt: 30, mb: 30 }}
            >
                <Grid container spacing={5}>
                    {cards.map((card, idx) => (
                        <Grid key={`grid-card-${idx}`} item xs={12} md={4}>
                            <CardSelector
                                text={card.text!}
                                media={card.media!}
                                onClick={card.onClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default InfocardPage;
