import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react'
import TextField from "../../components/TextField";
import { useForm } from './FormContext';

type PersonProps = {
    index: number,
    name: string,
    allergies?: string,
}

const Person = (props: PersonProps) => {
    const { index } = props
    const {
        state,    
        setAllergies,
        setFood,
        setName
    } = useForm()
    
    return (
        <Box>
            <Divider sx={{ mt: 3, mb: 3 }} />
            <Typography variant="h5">{`Person ${props.index + 1}`}</Typography>
            <TextField
                onChange={(evt) => {
                    setName(index, evt.target.value || '')
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
                        onClick={() => setFood(index, 'all')} 
                        value="all" 
                        control={<Radio />} 
                        label="Eat everything" />
                    <FormControlLabel 
                        onClick={() => setFood(index, 'vegetarian')} 
                        value="vegetarian" 
                        control={<Radio />} 
                        label="Vegetarian" />
                    <FormControlLabel 
                        onClick={() => setFood(index, 'vegan')} 
                        value="vegan" 
                        control={<Radio />} 
                        label="Vegan" />
                </RadioGroup>
            </FormControl>
            <TextField
                onChange={evt => setAllergies(index, evt.target.value || '')}
                label="Allergies"
                placeholder="Allergies"
                variant="standard"
                sx={{ width: "100%", mt: 2 }}
                value={state.people[index].allergies}
            />
        </Box>
    )
}
export default Person