import React from 'react'
import TextField from "../../components/TextField";

type PersonProps = {
    index: number,
    name: string,
    onNameSet: (newName: string) => void
}

const Person = (props: PersonProps) => (
    <TextField
        onChange={(evt) => {
            props.onNameSet(evt.target.value);
        }}
        placeholder={`Name for person #${props.index + 1}`}
        variant="standard"
        sx={{ width: "100%", mt: 3, mb: 2 }}
    />
)

export default Person