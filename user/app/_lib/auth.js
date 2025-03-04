import apiClient from "@/app/_utils/apiClient";
import {hasInStorage, removeFromStorage, saveToStorage} from "@/app/_utils/storage";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email: email,
      password: password,
    });

    if (response.data.access_token) {
      saveToStorage('adminToken', response.data.access_token, true);
    }

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const register = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email: email,
      password: password,
    });

    if (response.data.access_token) {
      saveToStorage('adminToken', response.data.access_token, true);
    }

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const logout = async (token) => {
  try{
    const response = await apiClient.delete("/auth/logout")
    if(response) {
      removeFromStorage('userToken');
    }

  } catch (err) {
    console.error(err);

    throw err;
  }
}

export const checkLoginStatus = () => {
  return hasInStorage('adminToken', true);
}