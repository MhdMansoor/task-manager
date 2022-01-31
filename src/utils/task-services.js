import {
  getRequest,
  deleteRequest,
  postRequest,
  patchRequest,
} from "./http-helper";
import { GET_TASK, DELETE_TASK, CREATE_TASK, UPDATE_TASK } from "./url-helper";

export const gettask = async () => {
  return await getRequest({
    url: GET_TASK,
    noAuth: true,
  });
};

export const deletetask = async (id) => {
  return await deleteRequest({
    url: `${DELETE_TASK}/${id}`,
    noAuth: true,
  });
};

export const createtask = async (data) => {
  return await postRequest({
    url: CREATE_TASK,
    noAuth: true,
    data,
  });
};

export const edittask = async (data, id) => {
  return await patchRequest({
    url: `${UPDATE_TASK}/${id}`,
    noAuth: true,
    data,
  });
};
