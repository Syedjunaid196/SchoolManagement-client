import { Gender, UserRole } from "../Enums/appEnums";

export interface UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    role: UserRole
    password: string
}