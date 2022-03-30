import { Typography } from "@mui/material";
import React from "react";

import ImageCard from "./ImageCard";

type InfoCardProps = {
    header: string;
    message: string;
    onClick?: () => void;
    imageUrl: string;
};

const InfoCard = (props: InfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl} onClick={props.onClick}>
        <Typography variant="h2" sx={{ my: 3 }}>
            {props.header}
        </Typography>
        <Typography sx={{ my: 0 }} variant="body1" textAlign="left">
            {props.message}
        </Typography>
    </ImageCard>
);

export default InfoCard;
