import { Gender } from "../Enums/appEnums";

export interface StudentListResponse{
    id: string;
    firstName:string;
    lastName: string;
    gender: Gender;
    email: string;
    rollNumber: string;
    dateOfBirth: Date;
    parentName: string;
}