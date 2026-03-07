import { Gender } from "@/models/Enums/appEnums";
import z from "zod";

export const AddTeacherSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .max(50, "First name is too long"),

    lastName: z
        .string()
        .min(1, "Last name is required")
        .max(50, "Last name is too long"),

    gender: z.nativeEnum(Gender),

    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100),


    employeeCode: z
        .string()
        .min(5, "Employee code must be at least 5 characters")
        .max(20, "Employee code must be at most 20 characters"),

    dateOfJoining: z.date()
})