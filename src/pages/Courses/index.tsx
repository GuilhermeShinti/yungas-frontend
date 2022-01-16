import { Container } from "./styles";
import { Modal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";

interface Course {
    id: number;
    name: string;
    description: string;
    duration: number;
    image: string;
    start: string;
    end: string;
    status: string;
}

export function Courses() {
    const [showModal, setShowModal] = useState(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [isEdit, setEdit] = useState<boolean>(false);
    
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<number>();
    const [startCourse, setStartCorse] = useState<string>("");
    const [endCourse, setEndCourse] = useState<string>("");

    useEffect(() => {
        const coursesData: Course[] = [
            {
                id: 1,
                name: "Curso de Svelte",
                description: "Um curso para introdução ao Svelte com...",
                duration: 10,
                image: "images/course1.png",
                start: "22:10",
                end: "22:10",
                status: "HABILITADO"
            },
            {
                id: 2,
                name: "Curso de React",
                description: "Como criar aplicativos usando React...",
                duration: 20,
                image: "images/course2.png",
                start: "22:10",
                end: "22:10",
                status: "DESABILITADO"
            },
            {
                id: 3,
                name: "Curso de React",
                description: "Como criar aplicativos usando React...",
                duration: 30,
                image: "images/course2.png",
                start: "22:10",
                end: "22:10",
                status: "HABILITADO"
            }
        ];

        setCourses(coursesData);
    }, []);

    useEffect(() => {
        if (!showModal) {
            setId(0);
            setName("");
            setDescription("");
            setStartCorse("");
            setEndCourse("");
            setDuration(0);
        }
    }, [showModal])

    const handleEdit = (course: Course) => {
        setEdit(true);
        setShowModal(true);
        setId(course.id);
        setName(course.name);
        setDescription(course.description);
        setStartCorse(course.start);
        setEndCourse(course.end);
        setDuration(course.duration);
    }

    const handleDelete = (course: Course) => {

    }

    const modalButtons = [
        // <button className="btn button-red">CriarA</button>,
        // <button className="btn button-green">Criar</button>
    ]

    return(
        <>
            <Modal title={`${isEdit ? "Editar" : "Novo"} Treinamento`} showModal={showModal} setShowModal={setShowModal} >
                <Input type="text" id="course-id" label="Id" hidden={true} value={id} onChange={(e) => setId(e.target.valueAsNumber)}></Input>
                <Input type="text" id="course-name" label="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                <TextArea id="course-duration" label="Descrição" value={description}  onChange={(e) => setDescription(e.target.value)}></TextArea>
                <Input type="number" id="course-duration" label="Carga horária" value={duration} onChange={(e) => setDuration(e.target.valueAsNumber)}></Input>
                <Input type="time" id="course-activation" label="Ativação do curso" value={startCourse} onChange={(e) => setStartCorse(e.target.value)}></Input>
                <Input type="time" id="course-deactivation" label="Desativação do curso" value={endCourse} onChange={(e) => setEndCourse(e.target.value)}></Input>
            </Modal>
            <Container>
                <header>
                    <h2>SEUS TREINAMENTOS</h2>
                    <button className="btn button-blue" onClick={() => setShowModal(true)}>NOVO TREINAMENTO</button>
                </header>
                <ul>
                    {
                        courses.map(course => (
                            <li key={course.id} className="course">
                                <img src={`${course.image}`} alt="course" />
                                <div className="course-info">
                                    <div className="course-description">
                                        <strong className="course-name">{course.name}</strong>
                                        <p>{course.description}</p>
                                    </div>
                                    <div className="course-status">
                                        <span className={`status ${course.status === "HABILITADO" ? "enabled": "disabled"}`}>{course.status}</span>
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