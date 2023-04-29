import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }){

    const {deleteTask} = useContext(TaskContext)

    return( 
        <div className="bg-[#1d4ed8] text-white p-4 rounded-md"> 
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.descripcion}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>
    )
}

/*
import TaskContext from "../context/TaskContext"

function TaskCard({task, deleteTask}){
    return( // componente {props.children}
            <TaskContext>  ---Componente padre 
            <div> -----Componente hijo 
            <h1>{task.title}</h1>
            <p>{task.descripcion}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
            </div>
        </TaskContext>
    )
}
*/

export default TaskCard