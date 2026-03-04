import { Gender } from "../Enums/appEnums";

export interface StudentRequest {
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    password: string;
    dateOfBirth: Date;
    rollNumber: string;
}