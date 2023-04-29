import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../Task"

export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [tasks, setTasks] = useState([])

    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length , // asigna el numero de la longitud del array para que de esta manera no se repita el id
          descripcion: task.descripcion
        }]) // ... copia todos los elementos del array task
      }

    function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId)) // va iterando en el array y si es igual al id que busca lo elimina
    }

    useEffect(() => {//asigna los datos de tasks de Task.js al tasks de aca 
        setTasks(data)
    }, [])

    return (// props.children elemento hijo
        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
