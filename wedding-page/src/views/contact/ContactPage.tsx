import { Box, Container, Grid, Typography } from "@mui/material";
import text from "../../text-content";
import media from "../../media-content";
import ToastMaster from "./ToastMaster";
import { useScroll } from "../scroll";

const ContactPage = () => {
    const { contact } = useScroll();
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
                {text.contacts.message.map((text) => (
                    <Typography sx={{ mt: 2 }} variant="body1">
                        {text}
                    </Typography>
                ))}
                <Typography sx={{ mt: 2 }} variant="body1">
                    {text.contacts.mail}
                </Typography>
            </Container>
            <Container sx={{ display: "flex", mt: 20, mb: 20 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <ToastMaster
                            name={text.contacts.contact1.name}
                            contactDetails={text.contacts.contact1.contact}
                            imageUrl={media.contact.contact1.imageUrl}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ToastMaster
                            name={text.contacts.contact2.name}
                            contactDetails={text.contacts.contact2.contact}
                            imageUrl={media.contact.contact2.imageUrl}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default ContactPage;
