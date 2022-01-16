import { Navigate, Route, Routes } from 'react-router-dom';
import { Modules } from '../pages/Modules';
import { Courses } from '../pages/Courses';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/treinamentos" />}></Route>
            <Route path="/treinamentos" element={<Courses />}></Route>
            <Route path="/modules" element={<Modules />}></Route>
            <Route path="*" element={<>{"404"}</>} />
        </Routes>
    )
}