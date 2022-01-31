import { getRequest, postRequest } from "./http-helper";
import { GET_USER, CREATE_PROJECT, GET_PROJECT } from "./url-helper";

export const getuser = async () => {
  return await getRequest({
    url: GET_USER,
    noAuth: true,
  });
};
export const createproject = async (data) => {
  return await postRequest({
    url: CREATE_PROJECT,
    noAuth: true,
    data,
  });
};
export const getproject = async () => {
  return await getRequest({
    url: `${GET_PROJECT}/?pageNumber=1&pageSize=10`,
    noAuth: true,
  });
};
