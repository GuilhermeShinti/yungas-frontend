import { Outlet, Link } from "react-router-dom";
import { Container } from "./styles";

export function Course() {
    return (
        <>
            <Container>
                <header>
                    <Link to="modulos"><div className="active">Módulos</div></Link>
                    <Link to="aulas"><div>Aulas</div></Link>
                </header>
            </Container>
            <Outlet />
        </>
    )
}