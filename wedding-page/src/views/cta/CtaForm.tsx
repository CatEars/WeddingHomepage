import { Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "../../components/TextField";
import { useForm } from "./FormContext";
import Person from "./Person";
import ThankYouDialog from "./ThankYouDialog";
import WillAttendControl from "./WillAttendControl";
import Button from "../../components/Button";
import text from "../../text-content";
import FakeSubmitter from "./submit/FakeSubmitter";
import { getFromLocalStorage } from "./local-storage";
import FormSubmitter from "./submit/FormSubmitter";

const CtaForm = () => {
    const { state, setNumPeople, setIsSending } = useForm();
    const onNumPeopleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const num = Number.parseInt(event.target.value);
        if (num) {
            setNumPeople(num);
        }
    };
    const useFakeSubmitter = getFromLocalStorage("WEDDING_FAKE_SUBMIT", "no");
    const t = text.cta.form;
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
            <Typography variant="h2" gutterBottom>
                {t.rsvp}
            </Typography>
            <Box sx={{ mt: 3, mb: 2 }}>
                <WillAttendControl />
            </Box>
            <Typography variant="h5">{t.numberOfPeople}</Typography>
            <TextField
                type="number"
                onChange={onNumPeopleChange}
                value={state.numberOfAttendingPeople}
                placeholder={t.numberOfPeople}
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
            />
            {state.people.map((person, idx) => (
                <Person key={`person-${idx}`} name={person.name} index={idx} />
            ))}

            <Box
                sx={{
                    mt: 10,
                    display: "flex",
                    flexDirection: "row-reverse",
                }}
            >
                <Button
                    disabled={state.status !== "input"}
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
