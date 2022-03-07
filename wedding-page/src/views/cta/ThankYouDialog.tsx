import React, { useState } from 'react'
import Snackbar from '../../components/Snackbar'
import { useForm } from './FormContext'


const ThankYouDialog = () => {
    const [hasBeenClosed, setClosed] = useState(false)
    const { state } = useForm()
    return (
        <Snackbar
            open={state.hasSent && !hasBeenClosed}
            closeFunc={() => setClosed(true)}
            message="Tack så mycket!"
            />
    )
}

export default ThankYouDialog