import { AuthProvider } from "react-admin";
import apiClient from "./api-client";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await apiClient.post("/auth/sign-in", {
        email: username,
        password,
      });

      if (response.status !== 200) {
        return Promise.reject("Login failed");
      }

      const { user, accessToken } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject("Login failed");
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("accessToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve({
      id: "",
      fullName: user.name,
      avatar: user.avatar,
    });
  },
};

export default authProvider;
