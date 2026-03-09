import { Gender } from "../Enums/appEnums";

export interface TeacherListResponse{
    id: string;
    firstName: string;
    lastName: string;
    Gender: Gender;
    email: string;
    employeeCode: string;
    joiningDate: string;
}