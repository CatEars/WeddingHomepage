import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { ComplexMessage } from "../text-content";

type ComplexTextTypographyProps = {
    message: ComplexMessage[][];
};

const renderElement = (element: ComplexMessage, idx: number) => {
    if (element.type === "text") {
        return <span key={`complex-text-span-${idx}`}>{element.text}</span>;
    } else if (element.type === "bold") {
        return (
            <Box component="span" sx={{ fontWeight: 800 }}>
                {element.text}
            </Box>
        );
    } else {
        return (
            <Link
                target="_blank"
                key={`complex-link-span-${idx}`}
                sx={{ color: "primary.dark" }}
                href={element.link}
            >
                {element.displayText}
            </Link>
        );
    }
};

const renderSection = (section: ComplexMessage[]) => {
    return <>{section.map(renderElement)}</>;
};

const ComplexTextTypography = (props: ComplexTextTypographyProps) => {
    const components = props.message.map((section, idx) => (
        <Typography
            key={`complex-section-${idx}`}
            sx={{ my: idx === 0 ? 0 : 2 }}
            variant="body1"
            textAlign="center"
        >
            {renderSection(section)}
        </Typography>
    ));
    return <>{components}</>;
};

export default ComplexTextTypography;
