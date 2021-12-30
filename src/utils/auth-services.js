import { postRequest } from "./http-helper";
import { SIGNUP_URL, LOGIN_URL } from "./url-helper";

export const signup = async (data) => {
  return await postRequest({
    url: SIGNUP_URL,
    data,
  });
};
export const login = async (data) => {
  return await postRequest({
    url: LOGIN_URL,
    data,
  });
};
