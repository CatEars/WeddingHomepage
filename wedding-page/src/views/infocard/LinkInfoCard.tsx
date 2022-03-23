import { Link, Typography } from "@mui/material";
import React from "react";

import ImageCard from "./ImageCard";

type LinkInfoCardProps = {
    header: string;
    message: string;
    onClick?: () => void;
    imageUrl: string;
    links: string[];
};

const LinkInfoCard = (props: LinkInfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl} onClick={props.onClick}>
        <Typography variant="h6" sx={{ my: 3 }} textAlign="center">
            {props.header}
        </Typography>
        <Typography sx={{ mt: 0, mb: 3 }} variant="h5" textAlign="center">
            {props.message}
        </Typography>
        {props.links.map((link) => (
            <Typography variant="h5">
                <Link href={link}>{link}</Link>
            </Typography>
        ))}
    </ImageCard>
);

export default LinkInfoCard;
