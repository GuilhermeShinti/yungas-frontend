import { ChangeEventHandler } from "react";
import { Container } from "./styles";

interface TextAreaProps {
    id: string,
    label: string,
    value: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export function TextArea({ id, label, value, onChange }: TextAreaProps) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} onChange={onChange}></textarea>
        </Container>
    )
}