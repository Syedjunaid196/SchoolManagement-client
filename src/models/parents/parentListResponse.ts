import { Gender } from "../Enums/appEnums";

export interface ParentListResponse{
    id: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    occupation: string;
    address: string;
}