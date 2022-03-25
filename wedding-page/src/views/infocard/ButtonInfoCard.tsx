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
        <Typography variant="h6" sx={{ my: 3 }} textAlign="center">
            {props.header}
        </Typography>
        <Typography
            sx={{ mt: 0, mb: 3, textAlign: "left" }}
            variant="h5"
            textAlign="center"
        >
            {props.message}
        </Typography>
        <Button text={props.buttonText} onClick={props.onClick} />
    </ImageCard>
);

export default ButtonInfoCard;
