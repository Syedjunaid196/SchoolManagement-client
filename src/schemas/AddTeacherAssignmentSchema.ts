import z, { string } from "zod";

export const AddTeacherAssignmentSchema = z.object({
    teacherId:
        z.string()
            .min(1, "Teacher  is required"),
    sectionId:
        z.string()
            .min(1, "Section is required"),
    subjectId:
        z.string()
            .min(1, "Subject is required")

})