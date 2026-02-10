import z, { email } from "zod";

export const signUPSchema = z.object({
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
        .min(6, "Password must be at least 6 characters")


})