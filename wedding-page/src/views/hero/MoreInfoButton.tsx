import React from "react";
import Button from "../../components/Button";
import { useScroll } from "../scroll";

const MoreInfoButton = () => {
    const { info, scrollToRef } = useScroll();
    return (
        <Button
            sx={{
                color: "#F3EFE8",
                width: "150px",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                letterSpacing: "0.05em",
                mr: "2em",
                mb: "2em",
                backgroundColor: "rgba(0,0,0,0)",
                ":hover": {
                    backgroundColor: "rgba(0,0,0,0)",
                },
                boxShadow: 0,
            }}
            onClick={() => {
                scrollToRef(info);
            }}
            text={"Mer Info"}
        />
    );
};

export default MoreInfoButton;
