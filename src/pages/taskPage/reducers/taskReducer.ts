import Task from "../../../core/interfaces/task";

export interface TaskState {
  tasks: Task[];
}

export enum ActionType {
  ADDED,
  CHANGED,
  DELETED,
}

type ActionAdded = { type: ActionType.ADDED; payload: Task };
type ActionChanged = { type: ActionType.CHANGED; payload: Task };
type ActionDeleted = { type: ActionType.DELETED; payload: { id: number } };

type Action = ActionAdded | ActionChanged | ActionDeleted;

export function tasksReducer(state: TaskState, action: Action): TaskState {
  switch (action.type) {
    case ActionType.ADDED: {
      return { tasks: [...state.tasks, action.payload] };
    }
    case ActionType.CHANGED: {
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    }
    case ActionType.DELETED: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
}
