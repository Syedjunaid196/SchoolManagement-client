import { api } from "@/lib/axios";
import { ParentListResponse } from "@/models/parents/parentListResponse";
import { ParentRequest } from "@/models/parents/parentRequest";
import { ParentResponse } from "@/models/parents/parentResponse";
import { Result } from "@/utils/Result";

export const GetParentList = async (): Promise<Result<ParentListResponse[]>> =>{
    const response = await api.get("parents");
    return response.data;
};

export const AddParent = async (model: ParentRequest): Promise<Result<ParentResponse>> =>{
    const response = await api.post("parents", model);
    return response.data;
}