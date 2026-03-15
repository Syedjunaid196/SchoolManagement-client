import { api } from "@/lib/axios";
import { TeacherAssignmentRequest } from "@/models/teacherAssignment/teacherAssignmentRequest";
import { TeacherAssignmentResponse } from "@/models/teacherAssignment/teacherAssignmentResponse";
import { Result } from "@/utils/Result";

export const AssignTeacherService = async(model: TeacherAssignmentRequest): Promise<Result<TeacherAssignmentResponse>> =>{
    const response = await api.post("teacher-subject-assignments", model);
    return response.data;
}