import { Gender } from "@/models/Enums/appEnums";
import z from "zod";

export const AddParentSchema= z.object({
    firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

    lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),

    email: z
    .string()
    .min(1, "Email is required")
    .email("invalid email format"),

    password: z
    .string()
    .min(6, "Password must be atleast 6 characters long"),

    gender: z
    .nativeEnum(Gender),

    occupation: z
    .string()
    .min(1, "Occupatin is required")
    .max(100, "Occupation too long"),

    address: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address is too long")
})