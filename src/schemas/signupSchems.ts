import z, { email } from "zod";
import { Gender, UserRole } from "../models/Enums/appEnums";

export const signupSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required"),

    lastName: z
        .string()
        .min(1, "Last name is required"),

    email: z
        .string()
        .min(1, "Email is required"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),

    gender: z.nativeEnum(Gender),
    role: z.nativeEnum(UserRole),

})
