interface IAuth {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
    accessToken: string;
    refreshToken: string;
    isAuthenticated: boolean;
}

interface IAuthStore {
    auth: IAuth;
    authLogin: (auth: IAuth) => void;
    logout: () => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setToken: (token: string) => void;
    setRefreshToken: (token: string) => void;
}

export type { IAuth, IAuthStore };