import React from 'react'
import { useForm } from './FormContext';


const DebugFormDisplay = () => {
    const { state } = useForm()
    const stringified = JSON.stringify(state)
    return (<p>{stringified}</p>);
}

export default DebugFormDisplay