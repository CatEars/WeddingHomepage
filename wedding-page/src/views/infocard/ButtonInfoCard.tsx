import React from "react";
import { Typography } from "@mui/material";
import ImageCard from "./ImageCard";
import Button from "../../components/Button";

type ButtonInfoCardProps = {
    header: string;
    message: string;
    imageUrl: string;
    buttonText: string;
    onClick?: () => void;
};

const ButtonInfoCard = (props: ButtonInfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl}>
        <Typography variant="h2" sx={{ my: 3 }}>
            {props.header}
        </Typography>
        <Typography sx={{ mt: 0, mb: 3 }} variant="body1" textAlign="left">
            {props.message}
        </Typography>
        <Button text={props.buttonText} onClick={props.onClick} />
    </ImageCard>
);

export default ButtonInfoCard;
