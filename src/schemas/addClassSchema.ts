import z from "zod";

export const ClassRequestSchema = z.object({
    name: z
    .string()
    .min(1, "Name must be at least 1 characters long.")
    .max(50, "Name cannot exceed 50 characters.")
})