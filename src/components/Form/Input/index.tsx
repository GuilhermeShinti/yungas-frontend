import { Container } from "./styles";

interface InputProps {
    id: string,
    type: string,
    label: string,
}

export function Input({ id, type, label }: InputProps) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id}></input>
        </Container>
    )
}