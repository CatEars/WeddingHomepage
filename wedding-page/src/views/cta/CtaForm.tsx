import { Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Snackbar from "../../components/Snackbar";
import TextField from "../../components/TextField";
import { useForm } from './FormContext'
import Person from "./Person";
import ThankYouDialog from "./ThankYouDialog";
import WillAttendControl from "./WillAttendControl";



const CtaForm = () => {
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
    const setAllergies = (index: number, allergies: string) => {
        dispatch({
            type: 'setAllergies',
            index,
            allergies
        })
    }
    const setFood = (index: number, food: string) => {
        dispatch({
            type: 'setFood',
            index,
            food
        })
    }
    const submit = () => {
        dispatch({
            type: 'setHasSent'
        })
        console.log('submitting!', state)
    }
    return (
        <Box
            component="form"
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                submit();
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
                    key={`person-${idx}`}
                    name={person.name}
                    onNameSet={newName => setName(idx, newName)}
                    onAllergiesSet={allergies => setAllergies(idx, allergies)}
                    onDietChoice={diet => setFood(idx, diet)}
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
