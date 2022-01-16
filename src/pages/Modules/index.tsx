import { useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { Container } from "./styles"


export function Modules() {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    
    return (
        <>
            <Modal title={`${isEdit ? "Editar" : "Novo"} Módulo`} showModal={showModal} setShowModal={setShowModal} >
                <Input type="text" id="course-id" label="Id" hidden={true} value={id} onChange={(e) => setId(e.target.valueAsNumber)}></Input>
                <Input type="text" id="course-name" label="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <TextArea id="course-duration" label="Descrição" value={description}  onChange={(e) => setDescription(e.target.value)}></TextArea>
            </Modal>   
            <Container>
                <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVO MÓDULO</button>
            </Container>     
        </>

    )
}