import * as React from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CtaForm from "./CtaForm";
import { FormProvider } from "./FormContext";
import DebugFormDisplay from "./DebugFormDisplay";
import { useScroll } from "../scroll";

const CtaPage = () => {
    const { cta } = useScroll();
    return (
        <Box
            sx={{ display: "flex", bgcolor: "secondary.main" }}
            component="section"
            ref={cta}
        >
            <Container
                component="section"
                sx={{ mt: 10, mb: 20, display: "flex" }}
            >
                <FormProvider>
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
                                <CtaForm />
                            </Box>
                        </Grid>
                        {/*
                            <Grid item xs={12} md={8}>
                                <DebugFormDisplay />
                            </Grid>
                            */}
                    </Grid>
                </FormProvider>
            </Container>
        </Box>
    );
};

export default CtaPage;
