import React from "react";
import { TextField } from "@mui/material";
import text from "../../text-content";

type NumPeopleControlProps = {
    setNumPeople: (numberOfPeople: number) => void;
    numPeople: number;
};

const NumPeopleControl = React.memo((props: NumPeopleControlProps) => {
    const { numPeople, setNumPeople } = props;
    const onNumPeopleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const num = Number.parseInt(event.target.value);
        if (num) {
            setNumPeople(num);
        }
    };

    return (
        <TextField
            fullWidth
            color="info"
            label={text.cta.form.numberOfPeople}
            onChange={onNumPeopleChange}
            type="number"
            value={numPeople}
        />
    );
});

export default NumPeopleControl;
