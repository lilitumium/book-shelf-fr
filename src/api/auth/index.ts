const { VITE_USER_ID_KEY } = import.meta.env;

import { LoginValues, RegisterValues } from "@models";
import { request } from "../api-client";

const authPath = "/auth";

/**
 * Auth API
 */
const login = async (loginValues: LoginValues) => {
  const response = await request({
    url: `${authPath}/login`,
    method: "post",
    data: loginValues,
  });

  const userId = response.data.id;

  if (userId) {
    // If the user is logged in, save the token to local storage
    localStorage.setItem(VITE_USER_ID_KEY, userId);
  }

  return response.data;
};

const register = async (registerValues: RegisterValues) => {
  const response = await request({
    url: `${authPath}/signup`,
    method: "post",
    data: registerValues,
  });

  return response.data;
};

const logout = async () => {
  localStorage.removeItem(VITE_USER_ID_KEY);

  const response = request({
    url: `${authPath}/logout`,
    method: "post",
  });
};

export { login, register, logout };
