import { api } from "@/lib/axios";
import { SubjectRequest } from "@/models/subjects/subjectRequest";
import { SubjectResponse } from "@/models/subjects/subjectResponse";
import { Result } from "@/utils/Result";

export const AddSubject = async (model: SubjectRequest): Promise<Result<SubjectResponse>> => {
    const respone = await api.post("subjects", model);
    return respone.data;
}