import { useEffect, useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { Container } from "./styles"

import { Module } from "../../interfaces/Modules";
import { Class } from "../../interfaces/Class";

import { api } from "../../services/api";

export function Modules() {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [modules, setModules] = useState<Module[]>([]);

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        loadModules();
    }, []);

    useEffect(() => {
        if (!showModal) {
            setEdit(false);
            setId(0);
            setName("");
            setDescription("");
        }
    }, [showModal]);

    async function loadModules() {
        await api.get("/modulos").then(response => {
            setModules(response.data.modules);
        });
    }

    const handleEdit = (classe: Class) => {
        setEdit(true);
        setShowModal(true);
        setId(classe.id);
        setName(classe.name);
        setDescription(classe.description);
    }

    const handleDelete = async (module: Module) => {
        await api.delete(`/modulos/${module.id}`).then(response => {
            setModules(response.data.modules);
        });
    }
    
    return (
        <>
            <Modal 
                title={`${isEdit ? "Editar" : "Novo"} Módulo`} 
                showModal={showModal} 
                setShowModal={setShowModal}
                buttons={
                    isEdit ? [
                        // <button className="btn button-green" onClick={() => handleSaveCourse(course)}>Salvar</button>,
                        // <button className="btn button-red" onClick={() => handleDisableCourse(course)}>Desabilitar</button>,
                    ] : [
                        // <button className="btn button-green" onClick={() => handleNewCourse(course)}>Criar</button>
                    ]
                }
            >
                <Input type="text" id="course-id" label="Id" hidden={true} value={id} onChange={(e) => setId(e.target.valueAsNumber)}></Input>
                <Input type="text" id="course-name" label="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <TextArea id="course-description" label="Descrição" value={description}  onChange={(e) => setDescription(e.target.value)}></TextArea>
            </Modal>   
            <Container>
                <header>
                    <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVO MÓDULO</button>
                </header>
                <ul className="modules-list">
                    {
                        modules.map(module => (
                            <li key={module.id} className="card">
                                <img src={`${module.image}`} alt="course" />
                                <div className="card-content">
                                    <div className="card-header">
                                        
                                        <strong>{module.name}</strong>
                                        <button className="btn btn-icon" onClick={() => handleEdit(module)}><span className="icon-edit"></span></button>
                                    </div>
                                    <div className="card-body">
                                        <p>{module.description}</p>
                                        <br />
                                        <p>Aulas: {module.classes?.length ?? 0}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className="button-green enabled"></span>
                                        <button className="btn btn-icon" onClick={() => handleDelete(module)}><span className="icon-delete"></span></button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </Container>     
        </>

    )
}