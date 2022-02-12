import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/styles";
import React, { ReactElement, RefObject } from "react";
import text from "../../text-content";

type MapPageProps = {
    refProp: RefObject<HTMLElement>;
};

const ItsAMap = styled(Box)({
    backgroundColor: "whitesmoke",
});

const MapPage = (props: MapPageProps) => (
    <Box
        component="section"
        sx={{
            bgcolor: "secondary.main",
            display: "flex",
            overflow: "hidden",
        }}
        ref={props.refProp}
    >
        <Container
            sx={{
                mt: 10,
                mb: 10,
                textAlign: "center",
                bgcolor: "secondary.main",
            }}
        >
            <Typography variant="h2">{text.map.header}</Typography>
            <ItsAMap
                sx={{
                    mt: 5,
                    pt: 40,
                    pb: 40,
                }}
            >
                "Karta"
            </ItsAMap>
        </Container>
    </Box>
);

export default MapPage;
