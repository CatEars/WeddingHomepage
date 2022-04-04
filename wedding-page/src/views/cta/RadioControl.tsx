import React from "react";
import { Radio } from "@mui/material";
import { styled } from "@mui/styles";

const RadioControl = styled(Radio)({
    color: "rgba(0, 0, 0, 0.6)",
    "&.Mui-checked": {
        color: "#76887C",
    },
});

export default RadioControl;
