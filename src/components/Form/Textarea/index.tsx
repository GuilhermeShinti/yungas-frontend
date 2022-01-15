import { Container } from "./styles";

interface TextAreaProps {
    id: string,
    label: string,
}

export function TextArea({ id, label }: TextAreaProps) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <textarea id={id}></textarea>
        </Container>
    )
}