import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config variables.js";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Include credentials with requests
});

export const loginUser = async (formdata) => {
  try {
    console.log("Sending request to:", `${BASE_URL}/users/login`);
    console.log("Request payload:", formdata);

    const response = await api.post("/users/login", formdata);
    toast.success(response.data?.message || "Logged in successfully");
    return response.data?.user;
  } catch (error) {
    console.error("Error:", error);
    toast.error(error?.response?.data?.error || "Invalid Credentials");
    throw error;
  }
};

export const registerUser = async (formdata) => {
  try {
    const response = await api.post("/users/register", formdata);
    toast.success(formdata?.message);
    return response.data; // Assuming response contains the registered user data
  } catch (error) {
    toast.error(error?.response?.data?.error || "Registration failed");
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.get("/users/logout");
    toast.success(response?.message);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error;
  }
};

export const changePassword = async (password, oldpassword) => {
  try {
    const response = await api.post(
      "/users/change-password",
      password,
      oldpassword
    );
    toast.success(response.data?.message || "Password changed successfully");

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || "Failed to change password");

    throw error;
  }
};

// users/refresh-access-token
export const refreshAccessToken = async () => {
  try {
    const response = await api.get("/users/refresh-access-token");
    toast.success(response.data?.message || "Token refreshed successfully");

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || "Failed to refresh token");
    throw error;
  }
};
