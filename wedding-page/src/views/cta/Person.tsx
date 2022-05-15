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
import text from "../../text-content";
import RadioControl from "./RadioControl";

type PersonProps = {
    willAttend: boolean;
    index: number;
    name: string;
    allergies?: string;
    setName: (index: number, name: string) => void;
    setAllergies: (index: number, allergies: string) => void;
    setFood: (index: number, food: string) => void;
};

const FoodRadios = React.memo(
    (props: {
        index: number;
        setFood: (index: number, food: string) => void;
    }) => {
        const { index, setFood } = props;
        const t = text.cta.person;
        return (
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
        );
    }
);

const FoodChoices = React.memo((props: PersonProps) => {
    const { index, allergies, setAllergies } = props;
    const t = text.cta.person;

    return (
        <>
            <FormControl>
                <FormLabel
                    color="info"
                    sx={{ textAlign: "left", mt: 3, mb: 3 }}
                >
                    {t.diet}
                </FormLabel>
                <FoodRadios index={props.index} setFood={props.setFood} />
            </FormControl>
            <TextField
                onChange={(evt) => setAllergies(index, evt.target.value || "")}
                label={t.allergies}
                fullWidth
                variant="outlined"
                color="info"
                sx={{ mt: 2 }}
                value={allergies || ""}
            />
        </>
    );
});

const Person = React.memo((props: PersonProps) => {
    const { index, name, willAttend, setName } = props;
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
                value={name}
            />
            {willAttend && (
                <FoodChoices
                    willAttend={willAttend}
                    index={props.index}
                    name={props.name}
                    allergies={props.allergies}
                    setAllergies={props.setAllergies}
                    setFood={props.setFood}
                    setName={props.setName}
                />
            )}
        </Box>
    );
});

export default Person;
