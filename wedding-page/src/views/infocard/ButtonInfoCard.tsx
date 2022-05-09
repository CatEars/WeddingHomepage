import React from "react";
import { Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import Button from "../../components/Button";
import CardText from "./CardText";
import { InfoCardMessage } from "../../text-content";

type ButtonInfoCardProps = {
    header: string;
    message: InfoCardMessage;
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
