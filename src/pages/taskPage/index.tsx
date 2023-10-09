import { useReducer } from "react";
import { ActionType, TaskState, tasksReducer } from "./reducers/taskReducer";
import Task from "../../core/interfaces/task";
import AddTask from "./components/addTask";
import TaskList from "./components/taskList";

const initialTasks: Task[] = [
    { id: 1, text: 'Tarefa 1', isDone: false },
    { id: 2, text: 'Tarefa 2', isDone: false },
    { id: 3, text: 'Tarefa 3', isDone: false }
  ];
  
const initialTasksState: TaskState = {tasks: initialTasks};
  
let nextId = 3;

export default function TaskPage() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasksState);

    const handleAddTask = (text: string) => {
        dispatch({
            type: ActionType.ADDED,
            payload: {
                id: nextId++,
                text: text,
                isDone: false
            }
        })
    }

    const handleChangeTask = (task: Task) => {
        dispatch({
            type: ActionType.CHANGED,
            payload: task
        })
    }

    const handleDeleteTask = (taskId: number) => {
        dispatch({
            type: ActionType.DELETED,
            payload: {id: taskId}
        })
    }

    return (
        <>
            <h1>Day off in Kyoto</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks.tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
    )
}

