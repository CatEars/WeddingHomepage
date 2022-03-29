import React, { useEffect } from "react";
import { useForm } from "../FormContext";

const doPostState = (state: any) => {
    return Promise.resolve();
};

const FormSubmitter = () => {
    const { state, setHasSent } = useForm();

    useEffect(() => {
        console.log("Submit for form", state);
        doPostState(state).then(() => {
            setHasSent();
        });
    }, []);

    return <></>;
};

export default FormSubmitter;
