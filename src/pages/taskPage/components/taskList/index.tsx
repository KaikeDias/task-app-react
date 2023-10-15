import { useContext } from "react";
import TaskItem from "../taskItem";
import { TasksContext } from "../../../../context/taskContext";

function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks!.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
