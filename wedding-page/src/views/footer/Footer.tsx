import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import text from "../../text-content";

type ContactProps = {
    name: string;
    phone: string;
};

const Contact = (props: ContactProps) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Typography variant="h2" sx={{ color: "primary.main" }}>
                {props.name}
            </Typography>
            <Typography variant="body1">{props.phone}</Typography>
        </Box>
    );
};

const Footer = () => {
    const theme = useTheme();
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
                    {text.footer.heading}
                </Typography>
                <Typography variant="body1">{text.footer.mail}</Typography>
                <Grid container spacing={5} sx={{ mt: 5 }}>
                    <Grid
                        item
                        sx={{
                            [theme.breakpoints.down("sm")]: {
                                display: "none",
                            },
                        }}
                        xs={12}
                        md={3}
                    />
                    <Grid item xs={6} md={3}>
                        <Contact
                            name={text.footer.contact1.name}
                            phone={text.footer.contact1.phone}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Contact
                            name={text.footer.contact2.name}
                            phone={text.footer.contact2.phone}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
