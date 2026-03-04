import { Gender } from "../Enums/appEnums";

export interface StudentListResponse{
    id: string;
    firstName:string;
    lastName: string;
    Gender: Gender;
    email: string;
    rollNumber: string;
    dateOfBirth: Date;
    ParentName: string;
}