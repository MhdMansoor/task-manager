import { ActionTypes } from "../constants/actionType";

export const setTask = (task) => {
  return {
    type: ActionTypes.SET_TASK,
    payload: task,
  };
};

export const selectedTask = (task) => {
  return {
    type: ActionTypes.SELECTED_TASK,
    payload: task,
  };
};

export const removeSelectedTask = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_TASK,
  };
};
