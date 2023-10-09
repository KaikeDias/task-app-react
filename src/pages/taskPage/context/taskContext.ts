import { createContext } from 'react';
import Task from '../../../core/interfaces/task';
import { Action } from '../reducers/taskReducer';

export const TasksContext = createContext<Task[]|null>(null);
export const TasksDispatchContext = createContext<React.Dispatch<Action>|null>(null);
