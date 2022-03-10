import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React from 'react'

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

type InfoCardProps = {
    header: string,
    message: string,
    onClick?: () => void,
    imageUrl: string
}

const InfoCard = (props: InfoCardProps) => (
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
                    props.onClick()
                }
            }}
        />
        <Typography
            variant="h6"
            sx={{ my: 5 }}
            textAlign="center"
        >
            {props.header}
        </Typography>
        <Typography variant="h5" textAlign="center">
            {props.message}
        </Typography>
    </Box>
)

export default InfoCard