import { Container, Typography, Box } from "@mui/material";
import { RefObject } from "react";
import text from "../../text-content";
import "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import media from "../../media-content";

type MapPageProps = {
    refProp: RefObject<HTMLElement>;
};

const Map = () => (
    <MapContainer center={media.map.position} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={media.map.position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable
            </Popup>
        </Marker>
    </MapContainer>
);

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
            <Box
                sx={{
                    mt: 5,
                }}
            >
                <Map />
            </Box>
        </Container>
    </Box>
);

export default MapPage;
