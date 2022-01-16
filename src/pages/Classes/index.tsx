import { useEffect, useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { Container } from "./styles"

interface Modules {
    id: number;
    name: string;
    description: string;
    status: boolean;
    classes: Classes[]
}

interface Classes {
    id: number;
    name: string;
    description: string;
}



export function Classes() {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [modules, setModules] = useState<Modules[]>([]);

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        const modulesData : Modules[] = [
            {
                id: 1,
                name: "1. Introdução",
                description: "Curso de Svelte",
                status: true,
                classes: [
                    {
                        id: 1,
                        name: "1. Primeira aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 2,
                        name: "2. Segunda aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 3,
                        name: "3. Terceira aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 4,
                        name: "4. Quarta aula",
                        description: "Curso de Svelte"
                    }
                ]
            },
            {
                id: 2,
                name: "1. Programação Funcional",
                description: "Curso de Svelte",
                status: false,
                classes: [
                    {
                        id: 1,
                        name: "1. Primeira aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 2,
                        name: "2. Segunda aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 3,
                        name: "3. Terceira aula",
                        description: "Curso de Svelte"
                    },
                    {
                        id: 4,
                        name: "4. Quarta aula",
                        description: "Curso de Svelte"
                    }
                ]
            }
        ]

        setModules(modulesData);
    }, [])
    
    return (
        <>
            <Modal title={`${isEdit ? "Editar" : "Novo"} Aula`} showModal={showModal} setShowModal={setShowModal} >
                <Input type="text" id="course-id" label="Id" hidden={true} value={id} onChange={(e) => setId(e.target.valueAsNumber)}></Input>
                <Input type="text" id="course-name" label="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <TextArea id="course-description" label="Conteúdo" value={description}  onChange={(e) => setDescription(e.target.value)}></TextArea>
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
                                                        <button className="btn btn-icon"><span className="icon-edit"></span></button>
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