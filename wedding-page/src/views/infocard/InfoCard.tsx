import { Box, Typography } from "@mui/material";
import React from "react";

import ImageCard from "./ImageCard";

type InfoCardProps = {
    header: string;
    message: string | string[];
    onClick?: () => void;
    imageUrl: string;
};

const InfoCard = (props: InfoCardProps) => (
    <ImageCard imageUrl={props.imageUrl} onClick={props.onClick}>
        <Box>
            <Typography variant="h2" sx={{ my: 3 }}>
                {props.header}
            </Typography>
            {Array.isArray(props.message) ? (
                props.message.map((msg, idx) => (<Typography sx={{ my: idx === 0 ? 0 : 2 }} variant="body1" textAlign="left">
                    {msg}
                </Typography>))
            ) : (
                <Typography sx={{ my: 0 }} variant="body1" textAlign="left">
                    {props.message}
                </Typography>
            )}
        </Box>    
    </ImageCard>
);

export default InfoCard;
