import { useContext, useState } from "react";
import { TasksDispatchContext } from "../../context/taskContext";
import { ActionType } from "../../reducers/taskReducer";
import { getNextId} from "../../utils/nextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext)

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          const newTask = {
            id: getNextId(),
            text: text,
            isDone: false,
          };

          dispatch!({
            type: ActionType.ADDED,
            payload: newTask,
          });

          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
