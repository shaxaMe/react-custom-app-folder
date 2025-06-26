import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/store/auth";
import { getCookie } from "@/utils/cookies";

export const useAuthPersistence = () => {
    const { auth, setIsAuthenticated } = useAuthStore();

    useEffect(() => {
        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');

        if (accessToken && refreshToken && auth.user.id) {
            setIsAuthenticated(true);
        } else if (!accessToken || !refreshToken) {
            setIsAuthenticated(false);
        }
    }, []); 

    return null;
}; 