import { Container, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { StringifyOptions } from "querystring";
import { useState } from "react";
import TextField from "../../components/TextField";

export type CtaFormValues = {
    name: string;
    numPeople: string;
    message: string;
};

type CtaFormProps = {
    onSubmit?: (values: CtaFormValues) => void;
    disabled?: boolean;
};

const CtaForm = (props: CtaFormProps) => {
    const [name, setName] = useState("");
    const [numPeople, setNumPeople] = useState("");
    const [message, setMessage] = useState("");
    return (
        <Box
            component="form"
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                props.onSubmit && props.onSubmit({ name, numPeople, message });
            }}
            sx={{ px: 3 }}
        >
            <Typography variant="h2" gutterBottom>
                Meddelande, plox
            </Typography>
            <Typography variant="h5">
                Skriv in namn + antal personer + hur roligt ni vill ha det
            </Typography>
            <TextField
                placeholder="Ditt namn"
                variant="standard"
                sx={{
                    width: "100%",
                    mt: 3,
                    mb: 2,
                }}
            />
            <TextField
                placeholder="Ditt antal personer"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
            />
            <TextField
                placeholder="Ditt meddelande"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
                disabled={!!props.disabled}
            >
                Skicka Meddelande!
            </Button>
        </Box>
    );
};

export default CtaForm;
