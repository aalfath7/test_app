import { defineStore } from "pinia";
import { login as loginAPI } from "../api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(identifier, password) {
      const data = await loginAPI(identifier, password);
      this.token = data.jwt;
      localStorage.setItem("token", data.jwt);
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
