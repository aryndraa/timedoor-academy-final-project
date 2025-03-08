import apiClient from "@/app/_utils/apiClient";
import {hasInStorage, removeFromStorage, saveToStorage} from "@/app/_utils/storage";

export const login = async (data) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email: data.email,
      password: data.password,
    });

    if (response.data.data.access_token) {
      saveToStorage('userToken', response.data.data.access_token, true);
    }

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const registerUser = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", {
      email: data.email,
      password: data.password,
      name: data.name
    });

    if (response.data.data.access_token) {
      saveToStorage('userToken', response.data.data.access_token, true);
    }

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const logout = async () => {
  try{
    const response = await apiClient.delete("/auth/logout")

    if(response) {
      removeFromStorage('userToken', true);
    }

  } catch (err) {
    console.error(err);

    throw err;
  }
}

export const checkLoginStatus = () => {
  return hasInStorage('userToken', true);
}