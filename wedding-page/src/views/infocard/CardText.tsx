import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoCardMessage } from "../../text-content";
import ComplexTextTypography from "./ComplexTextTypography";

type CardTextProps = {
    header: string;
    message: InfoCardMessage;
};

const InnerText = (props: { message: InfoCardMessage }) => {
    if (typeof props.message === "string") {
        return (
            <Typography sx={{ my: 0 }} variant="body1" textAlign="center">
                {props.message}
            </Typography>
        );
    }

    if (typeof props.message[0] === "string") {
        return (
            <>
                {props.message.map((msg, idx) => (
                    <Typography
                        key={`info-card-message-${idx}`}
                        sx={{ my: idx === 0 ? 0 : 2 }}
                        variant="body1"
                        textAlign="center"
                    >
                        {msg}
                    </Typography>
                ))}
            </>
        );
    }

    const msg: any = props.message;
    return <ComplexTextTypography message={msg} />;
};

const CardText = (props: CardTextProps) => {
    return (
        <Box>
            <Typography variant="h2" sx={{ my: 3 }}>
                {props.header}
            </Typography>
            <InnerText message={props.message} />
        </Box>
    );
};

export default CardText;
