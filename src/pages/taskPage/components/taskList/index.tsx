import Task from "../../../../core/interfaces/task";
import TaskItem from "../taskItem";

interface TaskListProps {
    tasks: Task[];
    onChangeTask: (task: Task) => void;
    onDeleteTask: (id: number) => void;
  }
  
  function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <TaskItem
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;