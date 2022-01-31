import { postRequest } from "./http-helper";
import {
  SIGNUP_URL,
  LOGIN_URL,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from "./url-helper";

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
export const forgetpassword = async (data) => {
  return await postRequest({
    url: FORGET_PASSWORD,
    data,
  });
};
export const resetpassword = async (data) => {
  return await postRequest({
    url: RESET_PASSWORD,
    noAuth: true,
    data,
  });
};
