import { useEffect, useState } from "react";

import { Module } from "../../interfaces/Modules";
import { Class } from "../../interfaces/Class";

import { api } from "../../services/api";
import { useParams } from "react-router-dom";


export const useCourseController = () => {
    let { courseId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [modules, setModules] = useState<Module[]>([]);
    const [classe, setClasse] = useState<Class>(Object.assign({
        id: 0,
        moduleId: 0,
        name: "",
        description: ""
    }));

    useEffect(() => {
        loadClasses();
    }, [])

    useEffect(() => {
        if (!showModal) {
            setEdit(false);
            setClasse(Object.assign({
                id: 0,
                moduleId: 0,
                name: "",
                description: ""
            }));
        }
    }, [showModal]);

    async function loadClasses() {
        await api.get(`/treinamentos/${courseId}`).then(response => {
            setModules(response.data.modules);
        });
    }

    const handleEdit = (classe: Class) => {
        setEdit(true);
        setShowModal(true);
        setClasse({
            id: classe.id,
            moduleId: classe.moduleId,
            name: classe.name,
            description: classe.description
        })
    }
    

    const handleDelete = async (classe: Class) => {
        await api.delete(`/aulas/${classe.id}`).then(async response => {
            await loadClasses();
        });
    }

    const handleNewCourse = async (classe: Class) => {
        await api.post(`/aulas`, classe).then(response => {
            setModules(response.data.modules);
            setShowModal(false);
        });
    }

    const handleSaveCourse = async (classe: Class) => {
        await api.put(`/aulas/${classe.id}`, classe).then(response => {
            const converted = response.data.modules.map((c :Class) => {
                return Object.assign({...c, id: +c.id})
            })
            setModules(converted);
            setShowModal(false);
        });
    }

    return {
        isEdit,
        showModal,
        setShowModal,
        setClasse,
        classe,
        modules,
        handleDelete,
        handleEdit,
        handleNewCourse,
        handleSaveCourse
    }
}