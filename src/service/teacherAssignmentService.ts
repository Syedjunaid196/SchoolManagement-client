import { api } from "@/lib/axios";
import { TeacherAssignmentListResponse } from "@/models/teacherAssignment/teacherAssignmentListResponse";
import { TeacherAssignmentRequest } from "@/models/teacherAssignment/teacherAssignmentRequest";
import { TeacherAssignmentResponse } from "@/models/teacherAssignment/teacherAssignmentResponse";
import { Result } from "@/utils/Result";

export const AssignTeacherSubject = async (model: TeacherAssignmentRequest): Promise<Result<TeacherAssignmentResponse>> => {
    const response = await api.post("teacher-subject-assignments", model);
    return response.data;
}

export const GetTeacherAssignments = async (): Promise<Result<TeacherAssignmentListResponse[]>> => {
    const response = await api.get("teacher-subject-assignments");
    return response.data;
}