export interface ChildrenProps {
    children: React.ReactNode;
}

export interface BaseResponse {
    success: boolean;
    message?: string;
    data?: any;
} 