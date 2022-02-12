import { Box, Container, Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import text from "../../text-content";

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

const DirectionsPage = () => (
    <Box
        sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
        component="section"
    >
        <Container
            sx={{ display: "flex", position: "relative", mt: 15, mb: 30 }}
        >
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="info/terra.jpg"
                            alt="suitcase"
                            sx={{ height: 55 }}
                        />
                        <Typography
                            variant="h6"
                            sx={{ my: 5 }}
                            textAlign="center"
                        >
                            {text.info.card1.header}
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            {text.info.card1.message}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="info/terra.jpg"
                            alt="suitcase"
                            sx={{ height: 55 }}
                        />
                        <Typography
                            variant="h6"
                            sx={{ my: 5 }}
                            textAlign="center"
                        >
                            {text.info.card2.header}
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            {text.info.card2.message}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="info/terra.jpg"
                            alt="suitcase"
                            sx={{ height: 55 }}
                        />
                        <Typography
                            variant="h6"
                            sx={{ my: 5 }}
                            textAlign="center"
                        >
                            {text.info.card3.header}
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            {text.info.card3.message}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default DirectionsPage;
