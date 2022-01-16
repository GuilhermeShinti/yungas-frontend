import { useRef } from "react"
import { Overlay, Container, Header, Content, Footer } from "./styles"

interface ModalProps {
    title: string;
    children: JSX.Element|JSX.Element[];
    showModal: boolean;
    setShowModal: Function;
    buttons?: JSX.Element|JSX.Element[];
  }

export function Modal ({ title, children, showModal, setShowModal, buttons }: ModalProps) {
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
                            <button className="btn btn-icon" onClick={() => setShowModal(false)}><span className="icon-close"></span></button>
                            <div className="title">{title}</div>
                            <button className="btn btn-icon"><span className="icon-help"></span></button>
                        </Header>
                        <Content>
                            { children }
                        </Content>
                        <Footer>
                            { buttons }
                        </Footer>
                    </Container>
                </Overlay>
            ) : null
        }
    </>

    )
}