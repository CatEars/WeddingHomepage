import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react'
import TextField from "../../components/TextField";

type PersonProps = {
    index: number,
    name: string,
    allergies?: string,
    onNameSet?: (newName: string) => void,
    onDietChoice?: (diet: string) => void,
    onAllergiesSet?: (allergies: string) => void
}

const selectDiet = (props: PersonProps, diet: string) => {
    if (props.onDietChoice) {
        props.onDietChoice(diet)
    }
}

const Person = (props: PersonProps) => (
    <Box>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Typography variant="h5">{`Person ${props.index + 1}`}</Typography>
        <TextField
            onChange={(evt) => {
                if (props.onNameSet)
                    props.onNameSet(evt.target.value)
            }}
            label="Name"
            placeholder="Name"
            variant="standard"
            sx={{ width: "100%", mt: 3, mb: 2 }}
            value={props.name}
        />
        <FormControl>
            <FormLabel>Diet</FormLabel>
            <RadioGroup defaultValue="all">
                <FormControlLabel 
                    onClick={() => selectDiet(props, 'all')} 
                    value="all" 
                    control={<Radio />} 
                    label="Eat everything" />
                <FormControlLabel 
                    onClick={() => selectDiet(props, 'vegetarian')} 
                    value="vegetarian" 
                    control={<Radio />} 
                    label="Vegetarian" />
                <FormControlLabel 
                    onClick={() => selectDiet(props, 'vegan')} 
                    value="vegan" 
                    control={<Radio />} 
                    label="Vegan" />
            </RadioGroup>
        </FormControl>
        <TextField
            onChange={(evt) => {
                if (props.onAllergiesSet)
                    props.onAllergiesSet(evt.target.value)
            }}
            label="Allergies"
            placeholder="Allergies"
            variant="standard"
            sx={{ width: "100%", mt: 2 }}
            value={props.allergies}
        />
    </Box>
)

export default Person