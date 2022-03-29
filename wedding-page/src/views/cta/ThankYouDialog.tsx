import React, { useState } from "react";
import Snackbar from "../../components/Snackbar";
import { useForm } from "./FormContext";
import text from "../../text-content";

const ThankYouDialog = () => {
    const [hasBeenClosed, setClosed] = useState(false);
    const { state } = useForm();
    return (
        <Snackbar
            open={state.status === "hasSent" && !hasBeenClosed}
            closeFunc={() => setClosed(true)}
            message={text.cta.thankYou}
        />
    );
};

export default ThankYouDialog;
