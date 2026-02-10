import { Gender, UserRole, UserStatus } from "../Enums/appEnums";

export interface UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    role: UserRole

}

export interface UserResponse extends UserRequest {
    id: string;
}