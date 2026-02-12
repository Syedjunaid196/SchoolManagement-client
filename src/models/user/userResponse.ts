import { Gender, UserRole } from "../Enums/appEnums";

export interface UserResponse  {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    role: UserRole
    password: string
}