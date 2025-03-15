import apiClient from "../utils/apiClient.js";

const allMovie = async () => {
  try {
    const response = await apiClient.get('movies/')

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
}

const upcomingMovie = async () => {
  try {
    const response = await apiClient.get('movies/upcoming')

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
}

export default {allMovie, upcomingMovie}