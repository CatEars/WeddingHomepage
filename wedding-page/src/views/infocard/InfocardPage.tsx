import { Box, Container, Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { RefObject } from "react";
import text from "../../text-content";
import media from "../../media-content"

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

type InfocardPageProps = {
    mapRef: RefObject<HTMLElement>;
};

type InfoCardProps = {
    header: string,
    message: string,
    onClick?: () => void,
    imageUrl: string
}

const InfoCard = (props: InfoCardProps) => (
    <Box sx={item}>
        <Box
            component="img"
            src={props.imageUrl}
            sx={{
                height: 55,
                transition: "opacity 0.2s",
                "&:hover": {
                    opacity: 0.7,
                },
            }}
            onClick={() => {
                if (props.onClick) {
                    props.onClick()
                }
            }}
        />
        <Typography
            variant="h6"
            sx={{ my: 5 }}
            textAlign="center"
        >
            {props.header}
        </Typography>
        <Typography variant="h5" textAlign="center">
            {props.message}
        </Typography>
    </Box>
)

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
                                props.mapRef.current.scrollIntoView()
                            }
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoCard
                        header={text.info.card2.header}
                        message={text.info.card2.message}
                        imageUrl={media.info.card2.url}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InfoCard
                        header={text.info.card3.header}
                        message={text.info.card3.message}
                        imageUrl={media.info.card3.url}
                        />
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default InfocardPage;
