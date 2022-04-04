import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Typography,
    TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "./FormContext";
import text from "../../text-content";
import RadioControl from "./RadioControl";

type PersonProps = {
    index: number;
    name: string;
    allergies?: string;
};

const Person = (props: PersonProps) => {
    const { index } = props;
    const { state, setAllergies, setFood, setName } = useForm();
    const t = text.cta.person;

    return (
        <Box>
            <Divider sx={{ mt: 3, mb: 3 }} textAlign="left">
                <Typography variant="h2">{t.person(index + 1)}</Typography>
            </Divider>

            <TextField
                onChange={(evt) => {
                    setName(index, evt.target.value || "");
                }}
                label={t.name}
                variant="outlined"
                fullWidth
                color="info"
                sx={{
                    mt: 3,
                    mb: 2,
                }}
                value={props.name}
            />
            <FormControl>
                <FormLabel
                    color="info"
                    sx={{ textAlign: "left", mt: 3, mb: 3 }}
                >
                    {t.diet}
                </FormLabel>
                <RadioGroup defaultValue="all">
                    <FormControlLabel
                        onClick={() => setFood(index, "all")}
                        value="all"
                        control={<RadioControl />}
                        label={t.allEater}
                    />
                    <FormControlLabel
                        onClick={() => setFood(index, "vegetarian")}
                        value="vegetarian"
                        control={<RadioControl />}
                        label={t.vegetarian}
                    />
                    <FormControlLabel
                        onClick={() => setFood(index, "vegan")}
                        value="vegan"
                        control={<RadioControl />}
                        label={t.vegan}
                    />
                </RadioGroup>
            </FormControl>
            <TextField
                onChange={(evt) => setAllergies(index, evt.target.value || "")}
                label={t.allergies}
                fullWidth
                variant="outlined"
                color="info"
                sx={{ mt: 2 }}
                value={state.people[index].allergies}
            />
        </Box>
    );
};
export default Person;
