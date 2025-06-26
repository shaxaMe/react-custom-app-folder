import axios from "axios";
import { getCookie, removeCookie } from "./cookies";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    timeout: 10000,
});

// Request interceptor to add auth token from cookies
api.interceptors.request.use(
    (config) => {
        const token = getCookie("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = getCookie("refreshToken");

            if (refreshToken) {
                try {
                    // Attempt to refresh the token
                    const response = await axios.post("/auth/refresh", {
                        refreshToken,
                    });

                    const { accessToken, refreshToken: newRefreshToken } = response.data;

                    // Update tokens in cookies
                    const { setCookie } = await import("./cookies");
                    setCookie("accessToken", accessToken, 7);
                    setCookie("refreshToken", newRefreshToken, 30);

                    // Retry the original request
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return api(originalRequest);
                } catch (refreshError) {
                    // Refresh failed, clear tokens and redirect to login
                    removeCookie("accessToken");
                    removeCookie("refreshToken");
                    window.location.href = "/login";
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default api;
