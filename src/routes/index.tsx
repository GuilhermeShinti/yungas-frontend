import { Navigate, Route, Routes } from 'react-router-dom';
import { Course } from '../pages/Course';
import { Courses } from '../pages/Courses';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/treinamentos" />}></Route>
            <Route path="/treinamentos" element={<Courses />}></Route>
            <Route path="/treinamentos/:id" element={<Course />}></Route>
            <Route path="*" element={<>{"404"}</>} />
        </Routes>
    )
}