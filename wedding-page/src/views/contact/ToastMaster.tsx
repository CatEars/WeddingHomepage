import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

type ToastMasterProps = {
    name: string;
    contactDetails: string;
    imageUrl: string;
};

const ToastMaster = (props: ToastMasterProps) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 5,
        }}
    >
        <Avatar
            alt={props.name}
            src={props.imageUrl}
            sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h2" sx={{ mt: 3 }}>
            {props.name}
        </Typography>
        <Typography variant="body1">{props.contactDetails}</Typography>
    </Box>
);

export default ToastMaster;
