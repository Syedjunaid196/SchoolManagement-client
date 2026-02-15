import z, { email } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email is Required"),
    password: z.string().min(1, "Password is Required")
});