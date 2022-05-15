import React from "react";
import { Typography, Link } from "@mui/material";
import text, { ComplexMessage } from "../../text-content";
import ComplexTextTypography from "../../components/ComplexTextTypography";

type SubTextSelectorProps = {
    subtexts: string[] | ComplexMessage[][];
};

const SubTextSelector = (props: SubTextSelectorProps) => {
    if (props.subtexts.length === 0) return <></>;
    else if (typeof props.subtexts[0] === "string") {
        return (
            <>
                {props.subtexts.map((text, idx) => (
                    <Typography
                        key={`subtext-${idx}`}
                        variant="body1"
                        sx={{ mt: 2 }}
                    >
                        {text}
                    </Typography>
                ))}
            </>
        );
    } else {
        const message: ComplexMessage[][] = props.subtexts as any;
        return <ComplexTextTypography message={message} />;
    }
};

const HeaderInfo = () => (
    <>
        <Typography variant="h1">{text.cta.header.main}</Typography>
        <SubTextSelector subtexts={text.cta.header.subtexts} />
        <Typography variant="body1">
            <Link
                href={`mailto:${text.cta.header.link}`}
                sx={{ color: "primary.dark" }}
            >
                {text.cta.header.link}
            </Link>
        </Typography>
    </>
);

export default HeaderInfo;
