import React from "react";
import { FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import text from "../../text-content";
import RadioControl from "./RadioControl";

type WillAttendControlProps = {
    setAttend: (attending: boolean) => void;
};

const WillAttendControl = React.memo((props: WillAttendControlProps) => {
    const { setAttend } = props;
    return (
        <FormControl>
            <RadioGroup defaultValue="yes">
                <FormControlLabel
                    onClick={() => setAttend(true)}
                    value="yes"
                    control={<RadioControl />}
                    label={text.cta.attend.yesAnswer}
                />
                <FormControlLabel
                    onClick={() => setAttend(false)}
                    value="no"
                    control={<RadioControl />}
                    label={text.cta.attend.noAnswer}
                />
            </RadioGroup>
        </FormControl>
    );
});

export default WillAttendControl;
