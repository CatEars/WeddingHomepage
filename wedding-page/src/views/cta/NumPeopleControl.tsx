import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import text from "../../text-content";

type NumPeopleControlProps = {
    setNumPeople: (numberOfPeople: number) => void;
    numPeople: number;
};

const NumPeopleControl = React.memo((props: NumPeopleControlProps) => {
    const { numPeople, setNumPeople } = props;
    const onNumPeopleChange = (event: SelectChangeEvent<number>) => {
        const num =
            typeof event.target.value === "string"
                ? Number.parseInt(event.target.value)
                : event.target.value;
        if (num) {
            setNumPeople(num);
        }
    };

    return (
        <FormControl color="info" fullWidth>
            <InputLabel id="num-people-label">
                {text.cta.form.numberOfPeople}
            </InputLabel>
            <Select
                labelId="num-people-label"
                value={numPeople}
                label={text.cta.form.numberOfPeople}
                onChange={onNumPeopleChange}
                sx={{ textAlign: "left" }}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
            </Select>
        </FormControl>
    );
});

export default NumPeopleControl;
