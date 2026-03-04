import { UserRole, UserStatus } from "../Enums/appEnums";

export interface LoginResponse{
    id: string;
    email: string;
    token: string;
    status: UserStatus
    role: UserRole
}