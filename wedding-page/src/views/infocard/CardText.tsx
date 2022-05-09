import { Box, Typography } from "@mui/material";
import React from 'react'
import { InfoCardMessage, ComplexMessage } from "../../text-content";

type ComplexTextTypographyProps = {
    message: ComplexMessage[][]
}

const ComplexTextTypography = (props: ComplexTextTypographyProps) => {
    return (
        <>{props.message}</>    
    )    
}

type CardTextProps = {
    header: string;
    message: InfoCardMessage;
}

const CardText = (props: CardTextProps) => (
    <Box>
        <Typography variant="h2" sx={{ my: 3 }}>
            {props.header}
        </Typography>
        {Array.isArray(props.message) ? (
            props.message.map((msg, idx) => (<Typography sx={{ my: idx === 0 ? 0 : 2 }} variant="body1" textAlign="center">
                {msg}
            </Typography>))
        ) : (typeof props.message === 'string') ? (
            <Typography sx={{ my: 0 }} variant="body1" textAlign="center">
                {props.message}
            </Typography>
        ) : (
            <ComplexTextTypography message={props.message} />
        )}
    </Box>    
)

export default CardText;