import React, { useState } from 'react';
import Task from '../../../../core/interfaces/task';

interface TaskItemProps {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onChange, onDelete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...task,
      text: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...task,
      isDone: e.target.checked
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={handleTextChange} />
        <button onClick={handleSaveClick}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={handleEditClick}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
      {taskContent}
      <button onClick={handleDeleteClick}>
        Delete
      </button>
    </label>
  );
}

export default TaskItem;
