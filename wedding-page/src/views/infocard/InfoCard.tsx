import { Box, Typography } from "@mui/material";
import React from "react";
import CardText from "./CardText";

import ImageCard from "./ImageCard";

type InfoCardProps = {
    header: string;
    message: string | string[];
    onClick?: () => void;
    imageUrl: string;
};

const InfoCard = (props: InfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl} onClick={props.onClick}>
        <CardText header={props.header} message={props.message} />
    </ImageCard>
);

export default InfoCard;
