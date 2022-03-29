import React, { useEffect } from "react";
import { useForm } from "../FormContext";

const FakeSubmitter = () => {
    const { state, setHasSent } = useForm();

    useEffect(() => {
        console.log("Faking submit for form", state);
        setTimeout(() => {
            console.log("finished submitting for form");
            setHasSent();
        }, 1500);
    }, []);

    return <></>;
};

export default FakeSubmitter;
