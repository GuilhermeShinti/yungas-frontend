import { Outlet, Link, useLocation } from "react-router-dom";
import { Container } from "./styles";

export function Course() {
    const location = useLocation();
    const currentPage = location.pathname.split('/').reverse()[0];
    
    return (
        <>
            <Container>
                <header>
                    <Link to="modulos"><div className={`${currentPage === "modulos" ? "active" : ""}`}>Módulos</div></Link>
                    <Link to="aulas"><div className={`${currentPage === "aulas" ? "active" : ""}`}>Aulas</div></Link>
                </header>
            </Container>
            <Outlet />
        </>
    )
}