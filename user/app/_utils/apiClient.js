import axios from 'axios';
import {getFromStorage, removeFromStorage} from "@/app/_utils/storage";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getFromStorage('userToken', true);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response.status === 401) {
      removeFromStorage('userToken', true);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
