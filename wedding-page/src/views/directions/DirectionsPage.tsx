import { Box, Container, Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

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
                            You can get here with
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            A car
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
                            You can get here with
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            A bus
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
                            You can get here with
                        </Typography>
                        <Typography variant="h5" textAlign="center">
                            A plane
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default DirectionsPage;
