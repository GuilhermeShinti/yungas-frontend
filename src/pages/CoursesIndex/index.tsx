import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";

import { Course } from "../../interfaces/Course";

import { api } from "../../services/api";


export function CoursesIndex() {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [course, setCourse] = useState<Course>(Object.assign({
        id: 0,
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        duration: 0
    }));


    useEffect(() => {
        loadCourses();
    }, []);

    useEffect(() => {
        if (!showModal) {
            resetCourse();
        }
    }, [showModal])

    async function loadCourses() {
        await api.get("/treinamentos").then(response => {
            setCourses(response.data.courses);
        });
    }

    function resetCourse() {
        setEdit(false);
        setCourse(Object.assign({
            id: 0,
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            duration: 0
        }));
    }

    const handleEdit = (course: Course) => {
        setEdit(true);
        setShowModal(true);
        setCourse(
            Object.assign({
                id: course.id,
                name: course.name,
                description: course.description,
                startDate: course.startDate.substring(0,10),
                endDate: course.endDate.substring(0,10),
                duration: course.duration,
                enabled: course.enabled
            })
        )
    }

    const handleDelete = async (course: Course) => {
        await api.delete(`/treinamentos/${course.id}`).then(response => {
            setCourses(response.data.courses);
        });
    }

    const handleNewCourse = async (course: Course) => {
        await api.post(`/treinamentos`, course).then(response => {
            setCourses(response.data.courses);
            setShowModal(false);
        });
    }

    const handleSaveCourse = async (course: Course) => {
        await api.put(`/treinamentos/${course.id}`, course).then(response => {
            const converted = response.data.courses.map((c :Course) => {
                return Object.assign({...c, id: +c.id})
            })
            setCourses(converted);
            setShowModal(false);
        });
    }

    const handleDisableCourse = async (course: Course) => {
        course.enabled = !course.enabled;
        setCourse({...course, enabled: !course.enabled})
        await api.put(`/treinamentos/${course.id}`, course).then(response => {
            const converted = response.data.courses.map((c :Course) => {
                return Object.assign({...c, id: +c.id})
            })
            setCourses(converted);
            setShowModal(false);
        });
    }




    return(
        <>
            <Modal 
                title={`${isEdit ? "Editar" : "Novo"} Treinamento`} 
                showModal={showModal} 
                setShowModal={setShowModal} 
                buttons={
                    isEdit ? [
                        <button className="btn button-green" onClick={() => handleSaveCourse(course)}>Salvar</button>,
                        <button className={`btn ${course.enabled ? "button-red" : "button-green"}`} onClick={() => handleDisableCourse(course)}>{course.enabled ? "Desabilitar" : "Habilitar"}</button>,
                    ] : [
                        <button className="btn button-green" onClick={() => handleNewCourse(course)}>Criar</button>
                    ]

                }
            >
                <Input type="text" id="course-id" label="Id" hidden={true} value={course.id} onChange={(e) => setCourse({...course, id: e.target.valueAsNumber})}></Input>
                <Input type="text" id="course-name" label="Nome" value={course.name} onChange={(e) => setCourse({...course, name: e.target.value})}></Input>
                <TextArea id="course-duration" label="Descrição" value={course.description}  onChange={(e) => setCourse({...course, description: e.target.value})}></TextArea>
                <Input type="number" id="course-duration" label="Carga horária" value={course.duration} onChange={(e) => setCourse({...course, duration: e.target.valueAsNumber})}></Input>
                <Input type="date" id="course-activation" label="Ativação do curso" value={course.startDate} onChange={({target}) => setCourse({...course, startDate: (target.valueAsDate ?? new Date()).toISOString().substring(0, 10)})}></Input>
                <Input type="date" id="course-deactivation" label="Desativação do curso" value={course.endDate} onChange={({target}) => setCourse({...course, endDate: (target.valueAsDate ?? new Date()).toISOString().substring(0, 10)})}></Input>
            </Modal>
            <Container>
                <header>
                    <h2>SEUS TREINAMENTOS</h2>
                    <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVO TREINAMENTO</button>
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
                                            <button className="btn btn-icon" onClick={() => handleEdit(course)}><span className="icon-edit"></span></button>
                                            <button className="btn btn-icon" onClick={() => handleDelete(course)}><span className="icon-delete"></span></button>
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