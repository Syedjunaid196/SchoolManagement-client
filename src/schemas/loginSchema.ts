import z, { email } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1,"Email is Required").email("Invalid email"),
    password: z.string().min(1, "Password is Required")
});