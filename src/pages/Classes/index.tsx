import { useEffect, useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { Container } from "./styles"

import { Module } from "../../interfaces/Modules";
import { Class } from "../../interfaces/Class";

import { api } from "../../services/api";

export function Classes() {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [modules, setModules] = useState<Module[]>([]);

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        loadClasses();
    }, [])

    useEffect(() => {
        if (!showModal) {
            setEdit(false);
            setId(0);
            setName("");
            setDescription("");
        }
    }, [showModal])

    async function loadClasses() {
        await api.get("/modules").then(response => {
            setModules(response.data);
        });
    }

    const handleEdit = (classe: Class) => {
        setEdit(true);
        setShowModal(true);
        setId(classe.id);
        setName(classe.name);
        setDescription(classe.description);
    }
    
    return (
        <>
            <Modal title={`${isEdit ? "Editar" : "Novo"} Aula`} showModal={showModal} setShowModal={setShowModal} >
                <Input type="text" id="course-id" label="Id" hidden={true} value={id} onChange={(e) => setId(e.target.valueAsNumber)}></Input>
                <Input type="text" id="course-name" label="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <TextArea id="course-description" label="Conteúdo" value={description} onChange={(e) => setDescription(e.target.value)}></TextArea>
            </Modal>   
            <Container>
                <header>
                    <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVA AULA</button>
                </header>
                <ul className="module-list">
                    {
                        modules.map(module => (
                            <li key={module.id} className="module-item">
                                <details>
                                    <summary><div>{module.name}{module.status ? "" : <span className="button-red disabled"></span>}</div></summary>
                                    <ul className="classes-list">
                                        {
                                            module.classes.map(cls => (
                                                <li key={cls.id} className="class-item"> 
                                                    
                                                    <span>{cls.name}</span>
                                                    <div className="action">
                                                        <button className="btn btn-icon" onClick={() => handleEdit(cls)}><span className="icon-edit"></span></button>
                                                        <button className="btn btn-icon"><span className="icon-delete"></span></button>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </details>
                            </li>  
                        ))
                    }
                </ul>                
            </Container>     
        </>

    )
}