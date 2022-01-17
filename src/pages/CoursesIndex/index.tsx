
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";

import { useCourseIndexController } from "./CourseIndexController";

export function CoursesIndex() {
    const courseIndexController = useCourseIndexController();
    const course = courseIndexController.course;
    const courses = courseIndexController.courses;
    const isEdit = courseIndexController.isEdit;

    return(
        <>
            <Modal 
                title={`${isEdit ? "Editar" : "Novo"} Treinamento`} 
                showModal={courseIndexController.showModal} 
                setShowModal={courseIndexController.setShowModal} 
                buttons={
                    isEdit ? [
                        <button className="btn button-green" onClick={() => courseIndexController.handleSaveCourse(course)}>Salvar</button>,
                        <button className={`btn ${course.enabled ? "button-red" : "button-green"}`} onClick={() => courseIndexController.handleDisableCourse(course)}>{course.enabled ? "Desabilitar" : "Habilitar"}</button>,
                    ] : [
                        <button className="btn button-green" onClick={() => courseIndexController.handleNewCourse(course)}>Criar</button>
                    ]

                }
            >
                <Input type="text" id="course-id" label="Id" hidden={true} value={course.id} onChange={(e) => courseIndexController.setCourse({...course, id: e.target.valueAsNumber})}></Input>
                <Input type="text" id="course-name" label="Nome" value={course.name} onChange={(e) => courseIndexController.setCourse({...course, name: e.target.value})}></Input>
                <TextArea id="course-duration" label="Descrição" value={course.description}  onChange={(e) => courseIndexController.setCourse({...course, description: e.target.value})}></TextArea>
                <Input type="number" id="course-duration" label="Carga horária" value={course.duration} onChange={(e) => courseIndexController.setCourse({...course, duration: e.target.valueAsNumber})}></Input>
                <Input type="date" id="course-activation" label="Ativação do curso" value={course.startDate} onChange={({target}) => courseIndexController.setCourse({...course, startDate: (target.valueAsDate ?? new Date()).toISOString().substring(0, 10)})}></Input>
                <Input type="date" id="course-deactivation" label="Desativação do curso" value={course.endDate} onChange={({target}) => courseIndexController.setCourse({...course, endDate: (target.valueAsDate ?? new Date()).toISOString().substring(0, 10)})}></Input>
            </Modal>
            <Container>
                <header>
                    <h2>SEUS TREINAMENTOS</h2>
                    <button className="btn button-blue" onClick={() => courseIndexController.setShowModal(true)}>NOVO TREINAMENTO</button>
                </header>
                <ul>
                    {
                        courses?.map(course => (
                            <li key={course.id} className="course">
                                <img src={`${course.image}`} alt="course" />
                                <div className="course-info">
                                    <div className="course-description">
                                        <Link className="link-reset" to={`${course.id}`}><strong className="course-name">{course.name}</strong></Link>
                                        <p>{course.description}</p>
                                    </div>
                                    <div className="course-status">
                                        <span className={`status ${course.enabled ? "enabled": "disabled"}`}></span>
                                        <div className="action">
                                            <button className="btn btn-icon" onClick={() => courseIndexController.handleOpenModalToEdit(course)}><span className="icon-edit"></span></button>
                                            <button className="btn btn-icon" onClick={() => courseIndexController.handleDelete(course)}><span className="icon-delete"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            )
                        )
                    }
                </ul>
            </Container>
        </>
    )
}