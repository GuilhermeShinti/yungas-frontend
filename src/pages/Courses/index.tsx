import { Container } from "./styles";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import editIcon from "../../assets/icon-edit.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import { Input } from "../../components/Form/Input";
import { TextArea } from "../../components/Form/Textarea";

export function Courses() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <Modal title="Novo Treinamento" showModal={showModal} setShowModal={setShowModal} >
                <Input type="text" id="course-name" label="Nome"></Input>
                <TextArea id="course-duration" label="Descrição"></TextArea>
                <Input type="number" id="course-duration" label="Carga horária"></Input>
                <Input type="time" id="course-activation" label="Ativação do curso"></Input>
                <Input type="time" id="course-deactivation" label="Desativação do curso"></Input>
            </Modal>
            <Container>
                <header>
                    <h2>SEUS TREINAMENTOS</h2>
                    <button onClick={() => setShowModal(true)}>NOVO TREINAMENTO</button>
                </header>
                <ul>
                    <li className="course">
                        <img src={course1} alt="course" />
                        <div className="course-info">
                            <div className="course-description">
                                <strong className="course-name">Curso de Svelte</strong>
                                <p>Um curso para introdução ao Svelte com...</p>
                            </div>
                            <div className="course-status">
                                <span className="status enabled">HABILITADO</span>
                                <div className="action">
                                    <button><img src={editIcon} alt="edit course" /></button>
                                    <button><img src={deleteIcon} alt="delete course" /></button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="course">
                        <img src={course2} alt="course" />
                        <div className="course-info">
                            <div className="course-description">
                                <strong className="course-name">Curso de React</strong>
                                <p>Como criar aplicativos usando React...</p>
                            </div>
                            <div className="course-status">
                                <span className="status disabled">HABILITADO</span>
                                <div className="action">
                                    <button><img src={editIcon} alt="edit course" /></button>
                                    <button><img src={deleteIcon} alt="delete course" /></button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </>
    )
}