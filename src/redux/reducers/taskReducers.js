import { ActionTypes } from "../constants/actionType";

const intialState = {
  tasks: [],
};

export const taskReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASK:
      return { ...state, tasks: payload };
    case ActionTypes.FETCH_TASKS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
};

export const selectedTaskReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_TASK:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_TASK:
      return {};
    default:
      return state;
  }
};
