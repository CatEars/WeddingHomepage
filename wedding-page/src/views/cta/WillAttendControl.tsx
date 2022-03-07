import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import React from 'react'
import { useForm } from './FormContext'

const WillAttendControl = () => {
    const { state, dispatch } = useForm()
    const setAttend = (willAttend: boolean) => {
        dispatch({
            type: 'setAttending',
            willAttend
        })
    }

    return (
        <FormControl>
            <FormLabel>Will Attend</FormLabel>
            <RadioGroup defaultValue="yes">
                <FormControlLabel 
                    onClick={() => setAttend(true)} 
                    value="yes" 
                    control={<Radio />} 
                    label="Yes, we will attend" />
                <FormControlLabel 
                    onClick={() => setAttend(false)} 
                    value="no" 
                    control={<Radio />} 
                    label="No, we will not attend" />
            </RadioGroup>
        </FormControl>
    )

}

export default WillAttendControl