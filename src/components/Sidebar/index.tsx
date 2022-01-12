import { Container } from "./styles";
import courses from '../../assets/courses.svg';
import menu from '../../assets/menu.svg';


export function Sidebar() {
    return (
        <Container>
            <ul>
                <li><img src={menu} alt="menu" /></li>
                <li><img src={menu} alt="home" /></li>
                <li><img src={courses} alt="courses" /></li>
            </ul>
        </Container>
    )
}