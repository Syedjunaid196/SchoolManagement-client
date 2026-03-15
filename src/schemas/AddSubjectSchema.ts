import z from "zod";

export const AddSubjectSchema = z.object({
    name: z
        .string()
        .min(1, "Subject name is required")
        .max(100, "Subject name is too long"),

    code: z
        .string()
        .min(1, "Subject code is required")
        .max(20, "Subject code can't exceed 20 characters")
})