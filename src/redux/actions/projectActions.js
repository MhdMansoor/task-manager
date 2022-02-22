import { getproject } from "../../utils/projecr-services";
import { ActionTypes } from "../constants/actionType";

export const fetchProjectLists = () => {
  return async (dispatch) => {
    const { data, status, error } = await getproject();
    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      dispatch({ type: ActionTypes.SET_PROJECT_LISTS, payload: data });
    }
  };
};
