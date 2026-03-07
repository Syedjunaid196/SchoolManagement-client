import { UserRole, UserStatus } from "../Enums/appEnums";

export interface LoginResponse{
    id: string;
    token: string;
    role: UserRole
}