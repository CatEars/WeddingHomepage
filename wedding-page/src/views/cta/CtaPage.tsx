import * as React from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CtaForm, { CtaFormValues } from "./CtaForm";
import Snackbar from "../../components/Snackbar";

const CtaPage = () => {
    const [messageSent, setMessageSent] = React.useState(false);
    const handleClose = () => setMessageSent(false);
    const onSubmit = (values: CtaFormValues) => {
        console.log("submitting", values);
        setMessageSent(true);
    };
    return (
        <Container component="section" sx={{ mt: 10, mb: 20, display: "flex" }}>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            bgcolor: "warning.main",
                            py: 8,
                            px: 6,
                        }}
                    >
                        <CtaForm onSubmit={onSubmit} disabled={messageSent} />
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={messageSent}
                closeFunc={handleClose}
                message="Tack så mycket!"
            />
        </Container>
    );
};

export default CtaPage;
