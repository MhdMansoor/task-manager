import { ActionTypes } from "../constants/actionType";

export const projectReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROJECT_LISTS:
      return { ...state, projectData: payload };

    default:
      return state;
  }
};
