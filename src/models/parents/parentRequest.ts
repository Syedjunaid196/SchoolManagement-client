import { Gender } from "../Enums/appEnums";

export interface ParentRequest{
 firstName: string;
 lastName: string;
 email: string;
 password: string;
 gender: Gender;
 occupation: string;
 address: string;
}