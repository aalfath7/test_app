// src/api.js
import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const login = async (identifier, password) => {
  const res = await axios.post(`${API_URL}/auth/local`, {
    identifier,
    password,
  });
  return res.data;
};
