import { ActionTypes } from "../constants/actionType";

const intialState = {
  products: [],
};

export const taskReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASK:
      return { ...state, products: payload };
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
