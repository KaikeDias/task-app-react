import React, { useContext, useState } from 'react';
import Task from '../../../../core/interfaces/task';
import { TasksDispatchContext } from '../../context/taskContext';
import { ActionType } from '../../reducers/taskReducer';

interface TaskItemProps {
    task: Task;
}

function TaskItem({ task}: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange= {(e) => {
                        dispatch!({
                            type: ActionType.CHANGED,
                            payload: {
                                ...task,
                                text: e.target.value
                            }
                        })
                    }}  />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
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
            onChange={e => {
              dispatch!({
                type: ActionType.CHANGED,
                payload: {
                  ...task,
                  isDone: e.target.checked
                }
              });
            }}
          />
          {taskContent}
          <button onClick={() => {
            dispatch!({
              type: ActionType.DELETED,
              payload: {
                id: task.id
              }
            });
          }}>
            Delete
          </button>
        </label>
      );
}

export default TaskItem;
