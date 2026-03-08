import { api } from "@/lib/axios";
import { TeacherListResponse } from "@/models/teachers/teacherListResponse";
import { TeacherRequest } from "@/models/teachers/teacherRequest";
import { TeacherResponse } from "@/models/teachers/teacherResponse";
import { Result } from "@/utils/Result";

export const AddTeacherService = async (model: TeacherRequest): Promise<Result<TeacherResponse>> => {
    const response = await api.post("teachers", model);
    return response.data;
}

export const GetTeacherList = async ():Promise<Result<TeacherListResponse[]>> => {
    const response = await api.get("teachers");
    return response.data;
}