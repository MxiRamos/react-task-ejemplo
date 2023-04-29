import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm(){

    const [title, setTitle] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const { createTask } = useContext(TaskContext) // de TaskContext quiero la funcion createTask

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            descripcion
        }) // le doy el valor de newTask a la funcion createTask de app.jsx 
        setTitle('')
        setDescripcion('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} // se limpia el input
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder="Escribe la descripcion de la tarea"
                        onChange={(e) => setDescripcion(e.target.value)}
                        value={descripcion} // se limpia el input
                        className="bg-slate-300 p-3 w-full mb-2"
                        ></textarea>
                <button 
                    className="bg-indigo-500 px-3 py-1 rounded-md"
                >Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm