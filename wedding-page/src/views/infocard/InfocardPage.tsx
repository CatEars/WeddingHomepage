import { Box, Container, Grid } from "@mui/material";
import { RefObject } from "react";
import InfoCard from "./InfoCard";
import text from "../../text-content";
import media from "../../media-content";
import LinkInfoCard from "./LinkInfoCard";
import ButtonInfoCard from "./ButtonInfoCard";
import { useScroll } from "../scroll";

const InfocardPage = () => {
    const { map, contact, cta } = useScroll();
    const initialInfoCards = [
        {
            text: text.info.card1,
            media: media.info.card1,
            ref: map,
        },
        {
            text: text.info.card2,
            media: media.info.card2,
            ref: contact,
        },
        {
            text: text.info.card3,
            media: media.info.card3,
            ref: cta,
        },
    ];
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
                    {initialInfoCards.map((card) => (
                        <Grid item xs={12} md={4}>
                            <InfoCard
                                header={card.text.header}
                                message={card.text.message}
                                imageUrl={card.media.url}
                                onClick={() => {
                                    if (card.ref.current) {
                                        const theRef: any = card.ref.current;
                                        if (theRef.scrollIntoView) {
                                            theRef.scrollIntoView();
                                        }
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={4}>
                        <LinkInfoCard
                            header={text.info.card4.header}
                            message={text.info.card4.message}
                            imageUrl={media.info.card4.url}
                            links={text.info.card4.links}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ButtonInfoCard
                            header={text.info.card5.header}
                            message={text.info.card5.message}
                            imageUrl={media.info.card5.url}
                            buttonText={text.info.card5.buttonText}
                            onClick={() => {
                                console.log("Clickety click on da button");
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InfocardPage;
