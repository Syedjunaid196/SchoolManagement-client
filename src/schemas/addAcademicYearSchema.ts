import z from "zod";

export const AddAcademicYearSchema = z.object({
    name: z
        .string()
        .min(3, "Academic year name must be atleast 3 characters")
        .max(50, "Academic year name cannot exceed 50 characters")
        .nonempty("Academic year name is required"),

    startDate: z
        .date(),

    endDate: z
        .date()        
})
    .refine((data) => new Date(data.endDate) > new Date(data.startDate), {
        message: "End date must be greater than start date.",
        path: ["endDate"],
    });