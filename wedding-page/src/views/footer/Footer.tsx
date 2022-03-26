import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

type ContactProps = {
    name: string;
    phone: string;
};

const Contact = (props: ContactProps) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Typography variant="h4" sx={{ color: "primary.main" }}>
                {props.name}
            </Typography>
            <Typography variant="body1">{props.phone}</Typography>
        </Box>
    );
};

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: "secondary.dark",
                textAlign: "center",
                color: "primary.main",
            }}
            component="section"
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 20,
                    mb: 20,
                }}
            >
                <Typography variant="h2" sx={{ color: "primary.main" }}>
                    Kom i kontakt med oss
                </Typography>
                <Typography variant="subtitle1">mail.example.com</Typography>
                <Grid container spacing={5} sx={{ mt: 5 }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={3}>
                        <Contact name="Girl" phone="098 - 76 54 321" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Contact name="Guy" phone="123 - 45 67 890" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
