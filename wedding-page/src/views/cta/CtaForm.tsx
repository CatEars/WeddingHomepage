import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TextField from "../../components/TextField";
import { useForm } from './FormContext'
import Person from "./Person";


type CtaFormProps = {
    onSubmit?: () => void;
    disabled?: boolean;
};

const CtaForm = (props: CtaFormProps) => {
    const { state, dispatch } = useForm();
    const setNumPeople = (num: number) => {
        dispatch({
            type: 'setNum',
            numberOfAttendingPeople: num
        })
    }
    const setName = (index: number, name: string) => {
        dispatch({
            type: 'setName',
            index, 
            name
        })
    }
    return (
        <Box
            component="form"
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                props.onSubmit && props.onSubmit();
            }}
            sx={{
                width: '80%'
            }}
        >
            <Typography variant="h2" gutterBottom>
                R.S.V.P
            </Typography>
            <Typography variant="h5">
                Antal personer
            </Typography>
            <TextField
                type="number"
                onChange={(evt) => {
                    const num = Number.parseInt(evt.target.value)
                    if (num) {
                        setNumPeople(num);
                    }
                }}
                placeholder="Ditt antal personer"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
            />
            {state.people.map((person, idx) => (
                <Person
                    name={person.name}
                    onNameSet={(newName) => setName(idx, newName)}
                    index={idx}
                 />    
            ))}
            <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
                disabled={!!props.disabled}
            >
                Skicka Meddelande!
            </Button>
        </Box>
    );
};

export default CtaForm;
