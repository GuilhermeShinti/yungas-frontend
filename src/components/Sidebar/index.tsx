import { Container } from "./styles";
import courses from '../../assets/courses.svg';
import menu from '../../assets/menu.svg';
import home from '../../assets/home.svg';


export function Sidebar() {
    return (
        <Container>
            <ul>
                <li><img src={menu} alt="menu" /></li>
                <li><img src={home} alt="home" /></li>
                <li><img src={courses} alt="courses" /></li>
            </ul>
        </Container>
    )
}