import { useAuthStore } from "@/features/auth/store/auth";
import { getCookie } from "@/utils/cookies";


export const useAuth = () => {
    try {
        const { auth, logout } = useAuthStore();

        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');

        const isAuthenticated = auth.isAuthenticated && accessToken && auth.user.id;

        return {
            user: auth.user,
            isAuthenticated,
            accessToken,
            refreshToken,
            logout,
        };
    } catch (error) {
        return {
            user: { id: "", name: "", email: "", role: "" },
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
            logout: () => { },
        };
    }
}; 