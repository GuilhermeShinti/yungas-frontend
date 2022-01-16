import { ChangeEventHandler } from "react";
import { Container } from "./styles";

interface InputProps {
    id: string,
    type: string,
    label: string,
    value?: string | number,
    defaultValue?: string | number,
    hidden?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Input({ id, type, label, value, defaultValue, onChange, hidden = false }: InputProps) {
    return (
        <Container>
            { hidden ? null: <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} hidden={hidden} value={value} defaultValue={defaultValue} onChange={onChange}></input>
        </Container>
    )
}