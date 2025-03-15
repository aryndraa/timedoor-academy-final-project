import { getFromStorage } from "../utils/storage.js";
import apiClient from "../utils/apiClient.js";

const guestProfile = async () => {
  try {
    const token = getFromStorage("userToken", true);

    const response = await apiClient.get("profile/", {
      headers: {
        Authorization: `Bearer ${token}`, // Tambahkan token untuk autentikasi
      },
    });

    console.log("Profile Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export default { guestProfile };
