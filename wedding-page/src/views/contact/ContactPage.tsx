import { Box, Container, Grid, Link, Typography } from "@mui/material";
import text from "../../text-content";
import media from "../../media-content";
import ToastMaster from "./ToastMaster";
import { useScroll } from "../scroll";
import { useTheme } from "@mui/material";

const ContactPage = () => {
    const { contact } = useScroll();
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "secondary.main",
            }}
            component="section"
            ref={contact}
        >
            <Container
                sx={{
                    textAlign: "center",
                    mt: 10,
                }}
            >
                <Typography variant="h2">{text.contacts.header}</Typography>
                {text.contacts.message.map((text, idx) => (
                    <Typography key={`typography-${idx}`} sx={{ mt: 2 }} variant="body1">
                        {text}
                    </Typography>
                ))}
                <Typography sx={{ mt: 2 }} variant="body1">
                    <Link sx={{ color: "primary.dark" }} href={`mailto:${text.contacts.mail}`}>{text.contacts.mail}</Link>
                </Typography>
            </Container>
            <Container sx={{ 
                display: "flex", 
                mt: 3,
                mb: 5,
                [theme.breakpoints.up('md')]: {
                    mt: 20, 
                    mb: 20,
                }
                }}>
                <Grid container spacing={5}>
                    <Grid item xs={0} md={2} />
                    <Grid item xs={12} md={4}>
                        <ToastMaster
                            name={text.contacts.contact1.name}
                            contactDetails={text.contacts.contact1.contact}
                            imageUrl={media.contact.contact1.imageUrl}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ToastMaster
                            name={text.contacts.contact2.name}
                            contactDetails={text.contacts.contact2.contact}
                            imageUrl={media.contact.contact2.imageUrl}
                        />
                    </Grid>
                    <Grid item xs={0} md={2} />
                </Grid>
            </Container>
        </Box>
    );
};
export default ContactPage;
