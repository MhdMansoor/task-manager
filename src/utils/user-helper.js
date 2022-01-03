import { getCookie, deleteCookie } from "./cookie-helper";
import { AUTH_KEY } from "./url-helper";
export const isAuthenticated = () => {
  const userToken = getUserToken();
  if (!Object.keys(userToken).length) {
    return false;
  }
  return true;
};

export const getUserToken = () => getCookie(AUTH_KEY);

export const signOut = () => {
  deleteCookie(AUTH_KEY);
  deleteCookie("data");
  window.location.replace("/");
};

export const forceLogout = () => {
  deleteCookie(AUTH_KEY);
  deleteCookie("data");
  window.location.replace("/");
};
