import apiClient from "../utils/apiClient";
import {hasInStorage, saveToStorage, removeFromStorage} from "../utils/storage";

const registerUser = async ({request}) => {
  const requestData = {
    first_name: request.first_name,
    last_name: request.last_name ?? "",
    email: request.email,
    password: request.password,
  };

  try {
    const response = await apiClient.post("auth/register", requestData);

    if (response.data.access_token) {
      saveToStorage('userToken', response.data.access_token, true);
    }

    return response
  } catch (error) {
    console.error("Error:", error);
  }
};

const login = async ({request}) => {

  const requestData = {
    email: request.email,
    password: request.password,
  };

  try {
    const response = await apiClient.post("auth/login",requestData);

    if (response.data.access_token) {
      saveToStorage('userToken', response.data.access_token, true);
    }

    return response
  } catch (error) {
    console.error("login failed", error)
    throw error
  }
}

const logout = async () => {
  try {
    const response = await apiClient.delete("auth/logout");

    if(response) {
      removeFromStorage('userToken', true);
    }
  } catch(error) {
    console.log(error);
    throw error;
  }
}

const checkLoginStatus = () => {
  return hasInStorage('userToken', true);
}



export default { registerUser, login, checkLoginStatus, logout }