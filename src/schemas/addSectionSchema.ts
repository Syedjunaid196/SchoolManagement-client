import z from "zod";

export const AddSectionSchema = z.object({
    name: z
        .string()
        .min(1, "section name is required")
        .max(20, "section name is too long"),

    schoolClassId: z
        .string()
        .min(1, "class is required")
})