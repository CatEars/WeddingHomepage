import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import React from 'react'
import { useForm } from './FormContext'
import text from '../../text-content'

const WillAttendControl = () => {
    const { setAttend } = useForm()
    return (
        <FormControl>
            <FormLabel>{text.cta.attend.willAttend}</FormLabel>
            <RadioGroup defaultValue="yes">
                <FormControlLabel 
                    onClick={() => setAttend(true)} 
                    value="yes" 
                    control={<Radio />} 
                    label={text.cta.attend.yesAnswer} />
                <FormControlLabel 
                    onClick={() => setAttend(false)} 
                    value="no" 
                    control={<Radio />} 
                    label={text.cta.attend.noAnswer} />
            </RadioGroup>
        </FormControl>
    )

}

export default WillAttendControl