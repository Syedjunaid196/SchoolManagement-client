import z from "zod";

export const StudentEnrollmentSchema = z.object({
    studentId:
    z.string()
    .min(1, "Student is required"),
    academicYearId:
    z.string()
    .min(1, "Academic year is required"),
    sectionId:
    z.string()
    .min(1, "Section is required")
})