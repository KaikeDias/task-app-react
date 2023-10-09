import { useState } from "react";
import { TasksDispatchContext } from "../../context/taskContext";
import { AddTaskProps } from ".";

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

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
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
