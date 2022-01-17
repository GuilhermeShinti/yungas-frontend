import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";
import { Modal } from "../../components/Modal";
import { useCourseController } from "./CourseController";
import { Container } from "./styles"


export function Classes() {
    const courseController = useCourseController();
    const isEdit = courseController.isEdit;
    const modules = courseController.modules;
    const classe = courseController.classe;
    const setShowModal = courseController.setShowModal;
    
    return (
        <>
            <Modal 
                title={`${isEdit ? "Editar" : "Novo"} Aula`} 
                showModal={courseController.showModal} 
                setShowModal={setShowModal} 
                buttons={
                    isEdit ? [
                        <button className="btn button-green" onClick={() => courseController.handleSaveCourse(classe)}>Salvar</button>,
                        <button className={`btn button-red`} onClick={() => {setShowModal(false)}}>Cancelar</button>,
                    ] : [
                        <button className="btn button-green" onClick={() => courseController.handleNewCourse(classe)}>Criar</button>
                    ]
                }
            >
                <Input type="text" id="class-id" label="Id" hidden={true} value={classe.id} onChange={(e) => courseController.setClasse({...classe, id: e.target.valueAsNumber})}></Input>
                <Input type="text" id="class-name" label="Nome" value={classe.name} onChange={(e) => courseController.setClasse({...classe, name: e.target.value})}></Input>
                <TextArea id="class-description" label="Conteúdo" value={classe.description} onChange={(e) => courseController.setClasse({...classe, description: e.target.value})}></TextArea>
            </Modal>   
            <Container>
                <header>
                    <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVA AULA</button>
                </header>
                <ul className="module-list">
                    {
                        modules?.map(module => (
                            <li key={module.id} className="module-item">
                                <details>
                                    <summary><div>{module.name}{module.status ? "" : <span className="button-red disabled"></span>}</div></summary>
                                    <ul className="classes-list">
                                        {
                                            module.classes?.map(cls => (
                                                <li key={cls.id} className="class-item"> 
                                                    
                                                    <span>{cls.name}</span>
                                                    <div className="action">
                                                        <button className="btn btn-icon" onClick={() => courseController.handleEdit(cls)}><span className="icon-edit"></span></button>
                                                        <button className="btn btn-icon" onClick={() => courseController.handleDelete(cls)}><span className="icon-delete"></span></button>
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