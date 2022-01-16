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
    startDate: string;
    endDate: string;
    status: string;
}

export function CoursesIndex() {
    const [showModal, setShowModal] = useState(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [isEdit, setEdit] = useState<boolean>(false);
    
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<number>();
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    useEffect(() => {
        const coursesData: Course[] = [
            {
                id: 1,
                name: "Curso de Svelte",
                description: "Um curso para introdução ao Svelte com...",
                duration: 10,
                image: "images/course1.png",
                startDate: '2022-01-19T02:24:11.657Z',
                endDate: '2022-01-19T02:24:11.657Z',
                status: "HABILITADO"
            },
            {
                id: 2,
                name: "Curso de React",
                description: "Como criar aplicativos usando React...",
                duration: 20,
                image: "images/course2.png",
                startDate: '2022-01-19T02:24:11.657Z',
                endDate: '2022-01-19T02:24:11.657Z',
                status: "DESABILITADO"
            },
            {
                id: 3,
                name: "Curso de React",
                description: "Como criar aplicativos usando React...",
                duration: 30,
                image: "images/course2.png",
                startDate: '2022-01-19T02:24:11.657Z',
                endDate: '2022-01-19T02:24:11.657Z',
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
            setStartDate("");
            setEndDate("");
            setDuration(0);
        }
    }, [showModal])

    const handleEdit = (course: Course) => {
        setEdit(true);
        setShowModal(true);
        setId(course.id);
        setName(course.name);
        setDescription(course.description);
        setStartDate(course.startDate.substring(0,10));
        setEndDate(course.endDate.substring(0,10));
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
                <Input type="date" id="course-activation" label="Ativação do curso" value={startDate} onChange={({target}) => setStartDate((target.valueAsDate ?? new Date()).toISOString().substring(0, 10))}></Input>
                <Input type="date" id="course-deactivation" label="Desativação do curso" value={endDate} onChange={({target}) => setEndDate((target.valueAsDate ?? new Date()).toISOString().substring(0, 10))}></Input>
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