import React, { useContext, useState } from "react";
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
            id: getNextId(), // Certifique-se de que nextId está definido e incrementado corretamente
            text: text,
            isDone: false,
          };

          dispatch!({
            type: ActionType.ADDED,
            payload: newTask,
          });

          setText(""); // Limpa o texto depois de adicionar a tarefa
        }}
      >
        Add
      </button>
    </>
  );
}
