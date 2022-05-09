import React from "react";
import { Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import Button from "../../components/Button";
import CardText from "./CardText";

type ButtonInfoCardProps = {
    header: string;
    message: string | string[];
    imageUrl: string;
    buttonText: string;
    onClick?: () => void;
};

const ButtonInfoCard = (props: ButtonInfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl}>
        <CardText header={props.header} message={props.message} />
        <Button sx={{ mt: 3 }} text={props.buttonText} onClick={props.onClick} />
    </ImageCard>
);

export default ButtonInfoCard;
