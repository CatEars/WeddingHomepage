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
        <Typography variant="h6" sx={{ mt: 5 }} textAlign="center">
            {props.name}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
            {props.contactDetails}
        </Typography>
    </Box>
);

export default ToastMaster;
