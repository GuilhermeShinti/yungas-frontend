import { Outlet } from "react-router-dom";
import { Container } from "./styles";

export function Course() {
    return (
        <>
            <Container>
                <header>
                    <div className="active">Módulos</div>
                    <div>Aulas</div>                    
                </header>
            </Container>
            <Outlet />
        </>
    )
}