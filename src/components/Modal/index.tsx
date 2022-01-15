import { useState, ReactChild, ReactChildren, useRef } from "react"
import { Overlay, Container, Header, Content } from "./styles"

interface ModalProps {
    title: string;
    children: JSX.Element|JSX.Element[];
    showModal: boolean;
    setShowModal: Function;
  }

export function Modal ({ title, children, showModal, setShowModal }: ModalProps) {
    const modalRef = useRef<any>();

    const closeModal = (e: React.MouseEvent) => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
    };

    return (
    <>
        {
            showModal ? (
                <Overlay onClick={e => closeModal(e)} ref={modalRef}>
                    <Container>
                        <Header>
                            <button className="btn" onClick={() => setShowModal(false)}><span className="icon close-icon"></span></button>
                            <div className="title">{title}</div>
                            <button className="btn"><span className="icon help-icon"></span></button>
                        </Header>
                        <Content>
                            { children }
                        </Content>
                    </Container>
                </Overlay>
            ) : null
        }
    </>

    )
}