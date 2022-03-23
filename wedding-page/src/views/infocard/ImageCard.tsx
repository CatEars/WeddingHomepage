import { Box } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React from "react";

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

type ImageCardProps = {
    onClick?: () => void;
    imageUrl: string;
    children?: React.ReactNode;
};

const ImageCard = (props: ImageCardProps) => (
    <Box sx={item}>
        <Box
            component="img"
            src={props.imageUrl}
            sx={{
                height: 55,
                transition: "opacity 0.2s",
                "&:hover": {
                    opacity: 0.7,
                },
            }}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}
        />
        {props.children}
    </Box>
);

export default ImageCard;
