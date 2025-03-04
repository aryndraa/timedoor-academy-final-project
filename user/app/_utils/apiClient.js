import axios from 'axios';
import {getFromStorage} from "@/app/_utils/storage";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getFromStorage('userToken');

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
      removeFromStorage('adminToken', true);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
