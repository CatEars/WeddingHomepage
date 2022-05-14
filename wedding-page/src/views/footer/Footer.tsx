import React from "react";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";
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
                    mt: 10,
                    mb: 10,
                }}
            >
                <Typography variant="h2" sx={{ color: "primary.main" }}>
                    {text.footer.heading}
                </Typography>
                <Typography sx={{ mt: 2 }} variant="body1">
                    <Link href={`mailto:${text.footer.mail}`}>
                        {text.footer.mail}
                    </Link>
                </Typography>
                <Box
                    sx={{
                        mt: 6,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Contact
                        name={text.footer.contact1.name}
                        phone={text.footer.contact1.phone}
                    />
                    <Box sx={{ ml: 10 }} />
                    <Contact
                        name={text.footer.contact2.name}
                        phone={text.footer.contact2.phone}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
