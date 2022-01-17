import { useEffect, useState } from "react";
import { Course } from "../../interfaces/Course";

import { api } from "../../services/api";

export const useCourseIndexController = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [courses, setCourses] = useState<Course[]>([]);
    const [course, setCourse] = useState<Course>(Object.assign({
        id: 0,
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        duration: 0
    }));


    useEffect(() => {
        loadCourses();
    }, []);

    useEffect(() => {
        if (!showModal) {
            resetCourse();
        }
    }, [showModal])

    async function loadCourses() {
        await api.get("/treinamentos").then(response => {
            setCourses(response.data.courses);
        });
    }

    function resetCourse() {
        setEdit(false);
        setCourse(Object.assign({
            id: 0,
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            duration: 0
        }));
    }

    const handleOpenModalToEdit = (course: Course) => {
        setEdit(true);
        setShowModal(true);
        setCourse(
            Object.assign({
                id: course.id,
                name: course.name,
                description: course.description,
                startDate: course.startDate.substring(0,10),
                endDate: course.endDate.substring(0,10),
                duration: course.duration,
                enabled: course.enabled
            })
        )
    }

    const handleDelete = async (course: Course) => {
        await api.delete(`/treinamentos/${course.id}`).then(response => {
            setCourses(response.data.courses);
        });
    }

    const handleNewCourse = async (course: Course) => {
        await api.post(`/treinamentos`, course).then(response => {
            setCourses(response.data.courses);
            setShowModal(false);
        });
    }

    const handleSaveCourse = async (course: Course) => {
        await api.put(`/treinamentos/${course.id}`, course).then(response => {
            const converted = response.data.courses.map((c :Course) => {
                return Object.assign({...c, id: +c.id})
            })
            setCourses(converted);
            setShowModal(false);
        });
    }

    const handleDisableCourse = async (course: Course) => {
        course.enabled = !course.enabled;
        setCourse({...course, enabled: !course.enabled})
        await api.put(`/treinamentos/${course.id}`, course).then(response => {
            const converted = response.data.courses.map((c :Course) => {
                return Object.assign({...c, id: +c.id})
            })
            setCourses(converted);
            setShowModal(false);
        });
    }

    return {
        handleNewCourse,
        handleSaveCourse,
        handleDisableCourse,
        handleDelete,
        course,
        courses,
        isEdit,
        setShowModal,
        showModal,
        handleOpenModalToEdit,
        setCourse,
        setCourses
    }
}