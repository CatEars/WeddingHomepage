import { Box, Container, Grid } from "@mui/material";
import text from "../../text-content";
import media from "../../media-content";
import ToastMaster from "./ToastMaster";
import { useScroll } from "../scroll";

const ContactPage = () => {
    const { contact } = useScroll();
    return (
        <Box
            sx={{ display: "flex", bgcolor: "secondary.main" }}
            component="section"
            ref={contact}
        >
            <Container sx={{ display: "flex", mt: 30, mb: 30 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <ToastMaster
                            name={text.contacts.contact1.name}
                            contactDetails={text.contacts.contact1.contact}
                            description={text.contacts.contact1.description}
                            imageUrl={media.contact.contact1.imageUrl}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ToastMaster
                            name={text.contacts.contact2.name}
                            contactDetails={text.contacts.contact2.contact}
                            description={text.contacts.contact2.description}
                            imageUrl={media.contact.contact2.imageUrl}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default ContactPage;
