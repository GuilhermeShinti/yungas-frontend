import { Navigate, Route, Routes } from 'react-router-dom';
import { Modules } from '../pages/Modules';
import { Courses } from '../pages/Courses';
import { Course } from '../pages/Course';
import { CoursesIndex } from '../pages/CoursesIndex';
import { Classes } from '../pages/Classes';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="treinamentos" />} />
            <Route path="treinamentos" element={<Courses />}>
                <Route index element={<CoursesIndex />} />
                <Route path=":courseId" element={<Course />} >
                    <Route index element={<Modules />} />
                    <Route path="modulos" element={<Modules />} />
                    <Route path="aulas" element={<Classes />} />
                </Route>
            </Route>
            <Route path="*" element={<>{"404"}</>} />
        </Routes>
    )
}