import { Container } from "./styles";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import editIcon from "../../assets/icon-edit.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export function Courses() {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <Modal title="Novo Treinamento" showModal={showModal} setShowModal={setShowModal} >
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