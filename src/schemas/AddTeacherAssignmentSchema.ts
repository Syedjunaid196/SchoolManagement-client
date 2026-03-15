import z, { string } from "zod";

export const AddTeacherAssignmentSchema = z.object({
    teacherId:
        z.string()
            .min(1, "Teacher id is required"),
    sectionId:
        z.string()
            .min(1, "Teacher id is required"),
    subjectId:
        z.string()
            .min(1, "Teacher id is required")

})