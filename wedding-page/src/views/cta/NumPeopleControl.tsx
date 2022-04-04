import React from "react";
import { TextField } from "@mui/material";
import { useForm } from "./FormContext";
import text from "../../text-content";

const NumPeopleControl = () => {
    const { state, setNumPeople } = useForm();
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
            label={text.cta.form.numberOfPeople}
            onChange={onNumPeopleChange}
            type="number"
            value={state.numberOfAttendingPeople}
        />
    );
};

export default NumPeopleControl;
