import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { Container } from "./styles"

import { useModuleController } from "./ModuleController";

export function Modules() {
    const moduleController = useModuleController();
    const isEdit = moduleController.isEdit;
    const modules = moduleController.modules;
    const module = moduleController.module;

    return (
        <>
            <Modal 
                title={`${isEdit ? "Editar" : "Novo"} Módulo`} 
                showModal={moduleController.showModal} 
                setShowModal={moduleController.setShowModal}
                buttons={
                    isEdit ? [
                        <button className="btn button-green" onClick={() => moduleController.handleSaveModule(module)}>Salvar</button>,
                        <button className="btn button-red" onClick={() => moduleController.handleDisableModule(module)}>Desabilitar</button>,
                    ] : [
                        <button className="btn button-green" onClick={() => moduleController.handleNewCourse(module)}>Criar</button>
                    ]
                }
            >
                <Input type="text" id="course-id" label="Id" hidden={true} value={module.id} onChange={(e) => moduleController.setModule({...module, id: e.target.valueAsNumber})}></Input>
                <Input type="text" id="course-name" label="Nome" value={module.name} onChange={(e) => moduleController.setModule({...module, name: e.target.value})}></Input>
                <TextArea id="course-description" label="Descrição" value={module.description}  onChange={(e) => moduleController.setModule({...module, description: e.target.value})}></TextArea>
            </Modal>   
            <Container>
                <header>
                    <button className="btn button-blue" onClick={() => moduleController.setShowModal(true)}>NOVO MÓDULO</button>
                </header>
                <ul className="modules-list">
                    {
                        modules?.map(module => (
                            <li key={module.id} className="card">
                                <img src={`${module.image}`} alt={`${module.name}`} />
                                <div className="card-content">
                                    <div className="card-header">
                                        
                                        <strong>{module.name}</strong>
                                        <button className="btn btn-icon" onClick={() => moduleController.handleOpenModalToEdit(module)}><span className="icon-edit"></span></button>
                                    </div>
                                    <div className="card-body">
                                        <p>{module.description}</p>
                                        <br />
                                        <p>Aulas: {module.classes?.length ?? 0}</p>
                                    </div>
                                    <div className="card-footer">
                                        <span className={`${module.status ? "button-green enabled" : "button-red disabled"}`}></span>
                                        <button className="btn btn-icon" onClick={() => moduleController.handleDelete(module)}><span className="icon-delete"></span></button>
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