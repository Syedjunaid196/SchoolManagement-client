import { Gender } from "../Enums/appEnums";

export interface TeacherRequest {
 firstName: string;
 lastName: string;
 gender: Gender;
 email: string;
 password: string;
 employeeCode: string;
 dateOfJoining: Date;
}