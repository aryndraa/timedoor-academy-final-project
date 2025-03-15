import axios from "axios";
import {getFromStorage, removeFromStorage} from "./storage.js";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },

})

apiClient.interceptors.request.use(
  (config) => {
    const token = getFromStorage('userToken', true);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {

    if(error.response.status === 401) {
      removeFromStorage('userToken', true);
    }

    return Promise.reject(error);
  }
);

export default apiClient;