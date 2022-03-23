import { Box, Container, Grid } from "@mui/material";
import { RefObject } from "react";
import InfoCard from "./InfoCard";
import text from "../../text-content";
import media from "../../media-content";
import LinkInfoCard from "./LinkInfoCard";

type InfocardPageProps = {
    mapRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
    ctaRef: RefObject<HTMLElement>;
};

const InfocardPage = (props: InfocardPageProps) => (
    <Box
        sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
        component="section"
    >
        <Container
            sx={{ display: "flex", position: "relative", mt: 30, mb: 30 }}
        >
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <InfoCard
                        header={text.info.card1.header}
                        message={text.info.card1.message}
                        imageUrl={media.info.card1.url}
                        onClick={() => {
                            if (props.mapRef.current) {
                                props.mapRef.current.scrollIntoView();
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoCard
                        header={text.info.card2.header}
                        message={text.info.card2.message}
                        imageUrl={media.info.card2.url}
                        onClick={() => {
                            if (props.contactRef.current) {
                                props.contactRef.current.scrollIntoView();
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoCard
                        header={text.info.card3.header}
                        message={text.info.card3.message}
                        imageUrl={media.info.card3.url}
                        onClick={() => {
                            if (props.ctaRef.current) {
                                props.ctaRef.current.scrollIntoView();
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LinkInfoCard
                        header="Ge bort"
                        message="Ge bort grejer hit istället"
                        imageUrl={media.info.card2.url}
                        links={["https://www.wateraid.org"]}
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default InfocardPage;
