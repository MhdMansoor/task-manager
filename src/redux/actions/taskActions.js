import { gettask } from "../../utils/task-services";
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

export const featchTask = () => {
  return async (dispatch) => {
    const { data, status, error } = await gettask();
    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      // setTaskData(data.data);
      dispatch({ type: ActionTypes.FETCH_TASKS, payload: data.data });
    }
  };
};
