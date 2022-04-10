import React, { useEffect } from "react";
import { useForm } from "../FormContext";

const doPostState = async (state: any) => {
    const result = await fetch("/osa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: state }),
    });

    return result.json();
};

const FormSubmitter = () => {
    const { state, setHasSent } = useForm();

    useEffect(() => {
        console.log("Submit for form", state);
        doPostState(state).then((response) => {
            console.log("Got response: ", response);
            setHasSent();
        });
    }, []);

    return <></>;
};

export default FormSubmitter;
