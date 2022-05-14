import React from "react";
import { Link, Typography } from "@mui/material";
import { InfoCardMessage } from "../../text-content";
import CardText from "./CardText";

import ImageCard from "./ImageCard";

type LinkInfoCardProps = {
    header: string;
    message: InfoCardMessage;
    onClick?: () => void;
    imageUrl: string;
    links: LinkProps[];
};

type LinkProps = {
    href: string;
    displayText: string;
};

const LinkInfoCard = (props: LinkInfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl} onClick={props.onClick}>
        <CardText header={props.header} message={props.message} />
        {props.links.map((link, idx) => (
            <Typography key={`card-link-${idx}`} variant="body1" sx={{ mt: 2 }}>
                <Link sx={{ color: "primary.dark" }} href={link.href}>
                    {link.displayText}
                </Link>
            </Typography>
        ))}
    </ImageCard>
);

export default LinkInfoCard;
