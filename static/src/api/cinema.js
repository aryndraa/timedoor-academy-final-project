import apiClient from "../utils/apiClient.js";

const allCinemas  = async () => {
  try {
    const response = await apiClient.get('cinema/');

    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error fetching cinema:", error);
    return null;
  }
}

export default {allCinemas}