import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IAuthStore } from "../types/auth";
import { setCookie, getCookie, removeCookie } from "@/utils/cookies";

const auth = {
    user: {
        id: "",
        name: "",
        email: "",
        role: "",
    },
    accessToken: "",
    refreshToken: "",
    isAuthenticated: false,
}

const initializeAuth = () => {
    try {
        const accessToken = getCookie('accessToken') || "";
        const refreshToken = getCookie('refreshToken') || "";

        const storedAuth = localStorage.getItem('auth');
        const parsedAuth = storedAuth ? JSON.parse(storedAuth) : auth;

        return {
            ...parsedAuth,
            accessToken,
            refreshToken,
            isAuthenticated: !!(accessToken && parsedAuth.user.id)
        };
    } catch (error) {
        console.error('Error initializing auth:', error);
        return auth;
    }
};

export const useAuthStore = create<IAuthStore>()(
    persist(
        (set, get) => ({
            auth: initializeAuth(),
            authLogin: (authData) => {
                try {
                    setCookie('accessToken', authData.accessToken, 7);
                    setCookie('refreshToken', authData.refreshToken, 30);

                    set({ auth: authData });
                } catch (error) {
                    console.error('Error during login:', error);
                }
            },
            logout: () => {
                try {
                    removeCookie('accessToken');
                    removeCookie('refreshToken');

                    set({ auth });
                } catch (error) {
                    console.error('Error during logout:', error);
                }
            },
            setIsAuthenticated: (isAuthenticated) => {
                const currentAuth = get().auth;
                set({ auth: { ...currentAuth, isAuthenticated } });
            },
            setToken: (token) => {
                try {
                    setCookie('accessToken', token, 7);

                    const currentAuth = get().auth;
                    set({ auth: { ...currentAuth, accessToken: token } });
                } catch (error) {
                    console.error('Error setting token:', error);
                }
            },
            setRefreshToken: (token) => {
                try {
                    setCookie('refreshToken', token, 30);

                    const currentAuth = get().auth;
                    set({ auth: { ...currentAuth, refreshToken: token } });
                } catch (error) {
                    console.error('Error setting refresh token:', error);
                }
            },
        }),
        {
            name: "auth",
            partialize: (state) => ({
                auth: {
                    user: state.auth.user,
                    isAuthenticated: state.auth.isAuthenticated,
                }
            }),
        }
    )
);