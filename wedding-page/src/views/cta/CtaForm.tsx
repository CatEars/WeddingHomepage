import { Box } from "@mui/system";
import React from "react";
import { useForm } from "./FormContext";
import Person from "./Person";
import ThankYouDialog from "./ThankYouDialog";
import WillAttendControl from "./WillAttendControl";
import Button from "../../components/Button";
import text from "../../text-content";
import FakeSubmitter from "./submit/FakeSubmitter";
import { getFromLocalStorage } from "./local-storage";
import FormSubmitter from "./submit/FormSubmitter";
import NumPeopleControl from "./NumPeopleControl";

const CtaForm = () => {
    const {
        state,
        setIsSending,
        setAttend,
        setNumPeople,
        setAllergies,
        setFood,
        setName,
    } = useForm();
    const useFakeSubmitter = getFromLocalStorage("WEDDING_FAKE_SUBMIT", "no");
    const t = text.cta.form;
    const anyoneUnnamed = state.people.some((person) => person.name === "");
    return (
        <Box
            component="form"
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
            }}
            sx={{
                width: "80%",
            }}
        >
            <NumPeopleControl
                numPeople={state.numberOfAttendingPeople}
                setNumPeople={setNumPeople}
            />
            <Box sx={{ mt: 3, mb: 2 }}>
                <WillAttendControl setAttend={setAttend} />
            </Box>
            {state.people.map((person, idx) => (
                <Person
                    key={`person-${idx}`}
                    setAllergies={setAllergies}
                    setFood={setFood}
                    setName={setName}
                    willAttend={state.willAttend}
                    allergies={person.allergies}
                    name={person.name}
                    index={idx}
                />
            ))}

            <Box
                sx={{
                    mt: 10,
                    display: "flex",
                    flexDirection: "row-reverse",
                }}
            >
                <Button
                    disabled={anyoneUnnamed || state.status !== "input"}
                    loading={state.status === "isSending"}
                    text={t.sendRsvp}
                    onClick={() => {
                        if (state.status === "input") {
                            setIsSending();
                        }
                    }}
                />
            </Box>
            {state.status === "isSending" &&
                (useFakeSubmitter === "yes" ? (
                    <FakeSubmitter />
                ) : (
                    <FormSubmitter />
                ))}
            <ThankYouDialog />
        </Box>
    );
};

export default CtaForm;
