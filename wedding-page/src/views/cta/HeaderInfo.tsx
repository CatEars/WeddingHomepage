import React from "react";
import { Typography, Link } from "@mui/material";
import text from "../../text-content";

const HeaderInfo = () => (
    <>
        <Typography variant="h1">{text.cta.header.main}</Typography>
        {text.cta.header.subtexts.map((text, idx) => (
            <Typography key={`subtext-${idx}`} variant="body1" sx={{ mt: 2 }}>
                {text}
            </Typography>
        ))}
        <Typography variant="body1">
            <Link href={`mailto:${text.cta.header.link}`} sx={{ color: "primary.dark" }}>{text.cta.header.link}</Link>
        </Typography>
    </>
);

export default HeaderInfo;
