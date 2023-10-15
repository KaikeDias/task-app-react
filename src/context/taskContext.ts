import { createContext } from 'react';
import Task from '../core/interfaces/task';
import { Action } from '../pages/taskPage/reducers/taskReducer';

export const TasksContext = createContext<Task[]|null>(null);
export const TasksDispatchContext = createContext<React.Dispatch<Action>|null>(null);
