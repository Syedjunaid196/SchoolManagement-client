import { api } from "@/lib/axios";
import { SubjectListResponse } from "@/models/subjects/subjectListResponse";
import { SubjectRequest } from "@/models/subjects/subjectRequest";
import { SubjectResponse } from "@/models/subjects/subjectResponse";
import { Result } from "@/utils/Result";

export const AddSubject = async (model: SubjectRequest): Promise<Result<SubjectResponse>> => {
    const respone = await api.post("subjects", model);
    return respone.data;
}

export const GetSubjects = async (): Promise<Result<SubjectListResponse[]>> => {
    const response = await api.get("subjects");
    return response.data;
}