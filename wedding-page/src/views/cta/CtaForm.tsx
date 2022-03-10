import { Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "../../components/TextField";
import { useForm } from './FormContext'
import Person from "./Person";
import ThankYouDialog from "./ThankYouDialog";
import WillAttendControl from "./WillAttendControl";

const CtaForm = () => {
    const { 
        state, 
        setNumPeople,
        setHasSent
    } = useForm();
    const onNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const num = Number.parseInt(event.target.value)
        if (num) {
            setNumPeople(num)    
        }
    }
    return (
        <Box
            component="form"
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                setHasSent();
            }}
            sx={{
                width: '80%'
            }}
        >
            <Typography variant="h2" gutterBottom>
                R.S.V.P
            </Typography>
            <Box sx={{ mt: 3, mb: 2 }}>
                <WillAttendControl />
            </Box>
            <Typography variant="h5">
                Antal personer
            </Typography>
            <TextField
                type="number"
                onChange={onNumPeopleChange}
                placeholder="Ditt antal personer"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
            />
            {state.people.map((person, idx) => (
                <Person
                    key={`person-${idx}`}
                    name={person.name}
                    index={idx}
                 />    
            ))}

            <Divider sx={{ mt: 3, mb: 3 }} />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
                disabled={!!state.hasSent}
            >
                Skicka Meddelande!
            </Button>
            <ThankYouDialog />
        </Box>
    );
};

export default CtaForm;
