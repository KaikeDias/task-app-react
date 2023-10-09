import { useReducer } from "react";
import { TaskState, tasksReducer } from "./reducers/taskReducer";
import Task from "../../core/interfaces/task";
import TaskList from "./components/taskList";
import { TasksContext, TasksDispatchContext } from "./context/taskContext";
import AddTask from "./components/addTask";

const initialTasks: Task[] = [
  { id: 1, text: "Tarefa 1", isDone: false },
  { id: 2, text: "Tarefa 2", isDone: false },
  { id: 3, text: "Tarefa 3", isDone: false },
];

const initialTasksState: TaskState = { tasks: initialTasks };


export default function TaskPage() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasksState);

  return (
    <TasksContext.Provider value={tasks.tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
