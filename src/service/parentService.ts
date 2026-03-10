import { api } from "@/lib/axios";
import { ParentListResponse } from "@/models/parents/parentListResponse";
import { Result } from "@/utils/Result";

export const GetParentList = async (): Promise<Result<ParentListResponse[]>> =>{
    const response = await api.get("parents");
    return response.data;
}