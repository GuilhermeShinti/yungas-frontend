import { useEffect, useState } from "react";

import { Module } from "../../interfaces/Modules";
import { Class } from "../../interfaces/Class";

import { api } from "../../services/api";

export const useModuleController = () => {
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [modules, setModules] = useState<Module[]>([]);
    const [module, setModule] = useState<Module>(Object.assign({
        id: 0,
        name: "",
        description: "",
    }));

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        loadModules();
    }, []);

    useEffect(() => {
        if (!showModal) {
            setEdit(false);
            setId(0);
            setName("");
            setDescription("");
        }
    }, [showModal]);

    async function loadModules() {
        await api.get("/modulos").then(response => {
            setModules(response.data.modules);
        });
    }

    const handleOpenModalToEdit = (module: Module) => {
        setEdit(true);
        setShowModal(true);
        setModule(module);
    }

    const handleDelete = async (module: Module) => {
        await api.delete(`/modulos/${module.id}`).then(response => {
            setModules(response.data.modules);
        });
    }

    const handleNewCourse = async (module: Module) => {
        await api.post(`/modulos`, module).then(response => {
            setModules(response.data.modules);
            setShowModal(false);
        });
    }

    const handleSaveModule = async (module: Module) => {
        await api.put(`/modulos/${module.id}`, module).then(response => {
            const converted = response.data.modules.map((c :Module) => {
                return Object.assign({...c, id: +c.id})
            })
            setModules(converted);
            setShowModal(false);
        });
    }

    const handleDisableModule = async (module: Module) => {
        module.status = !module.status;
        setModule({...module, status: !module.status})
        await api.put(`/modulos/${module.id}`, module).then(response => {
            const converted = response.data.modules.map((m :Module) => {
                return Object.assign({...m, id: +m.id})
            })
            setModules(converted);
            setShowModal(false);
        });
    }

    return {
        handleDelete,
        handleOpenModalToEdit,
        showModal,
        setShowModal,
        isEdit,
        modules,
        module,
        setModule,
        handleNewCourse,
        handleSaveModule,
        handleDisableModule
    }
}