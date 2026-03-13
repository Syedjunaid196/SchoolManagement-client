import { api } from "@/lib/axios";
import { ClassListResponse } from "@/models/class/ClassListResponse";
import { ClassRequest } from "@/models/class/classRequest";
import { ClassResponse } from "@/models/class/classResponse";
import { Result } from "@/utils/Result";

export const AddClass = async (model: ClassRequest): Promise<Result<ClassResponse>> => {
    const response = await api.post("classes", model);
    return response.data;
}

export const GetClasses = async(): Promise<Result<ClassListResponse[]>> =>{
    const response = await api.get("classes");
    return response.data;
}