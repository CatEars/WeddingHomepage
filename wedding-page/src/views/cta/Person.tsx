import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react'
import TextField from "../../components/TextField";
import { useForm } from './FormContext';
import text from '../../text-content'

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
    const t = text.cta.person
    
    return (
        <Box>
            <Divider sx={{ mt: 3, mb: 3 }} />
            <Typography variant="h5">{t.person(index + 1)}</Typography>
            <TextField
                onChange={(evt) => {
                    setName(index, evt.target.value || '')
                }}
                label={t.name}
                placeholder={t.name}
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
                value={props.name}
            />
            <FormControl>
                <FormLabel>{t.diet}</FormLabel>
                <RadioGroup defaultValue="all">
                    <FormControlLabel 
                        onClick={() => setFood(index, 'all')} 
                        value="all" 
                        control={<Radio />} 
                        label={t.name} />
                    <FormControlLabel 
                        onClick={() => setFood(index, 'vegetarian')} 
                        value="vegetarian" 
                        control={<Radio />} 
                        label={t.vegetarian} />
                    <FormControlLabel 
                        onClick={() => setFood(index, 'vegan')} 
                        value="vegan" 
                        control={<Radio />} 
                        label={t.vegan} />
                </RadioGroup>
            </FormControl>
            <TextField
                onChange={evt => setAllergies(index, evt.target.value || '')}
                label={t.allergies}
                placeholder={t.allergies}
                variant="standard"
                sx={{ width: "100%", mt: 2 }}
                value={state.people[index].allergies}
            />
        </Box>
    )
}
export default Person