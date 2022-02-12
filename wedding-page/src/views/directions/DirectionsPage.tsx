import { Box, Container, Grid, Typography } from "@mui/material";
import { Theme } from '@mui/material/styles';
import { styled } from "@mui/styles";
import { SxProps } from '@mui/system';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5
}

export default () => (
    <Box
        sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
        component="section">
        <Container sx={{ display: 'flex', position: 'relative', mt: 15, mb: 30 }}>
            <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
                    <Box sx={item}>
                        <Box
                            component="img"
                            src="info/terra.jpg"
                            alt="suitcase"
                            sx={{ height: 55 }}
                            />
                        <Typography variant="h6" sx={{ my: 5 }}>
                            Find the stuff, by going there
                        </Typography>
                        <Typography variant="h5">
                            Get there with a car, or with a bus, and train, and airplane.
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
                        <Typography variant="h6" sx={{ my: 5 }}>
                            Find the stuff, by going there
                        </Typography>
                        <Typography variant="h5">
                            Get there with a car, or with a bus, and train, and airplane.
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
                        <Typography variant="h6" sx={{ my: 5 }}>
                            Find the stuff, by going there
                        </Typography>
                        <Typography variant="h5">
                            Get there with a car, or with a bus, and train, and airplane.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
)