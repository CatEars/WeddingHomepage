import * as React from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CtaForm from "./CtaForm";
import { FormProvider } from "./FormContext";
//import DebugFormDisplay from "./DebugFormDisplay";
import HeaderInfo from "./HeaderInfo";
import { useScroll } from "../scroll";

const CtaPage = () => {
    const { cta } = useScroll();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "secondary.main",
            }}
            component="section"
            ref={cta}
        >
            <Box sx={{ mt: 10, ml: 3, mr: 3, textAlign: "center" }}>
                <HeaderInfo />
            </Box>
            <Container
                component="section"
                sx={{ mt: 10, mb: 20, display: "flex" }}
            >
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                bgcolor: "primary.main",
                                py: 8,
                            }}
                        >
                            <FormProvider>
                                <CtaForm />
                            </FormProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CtaPage;
