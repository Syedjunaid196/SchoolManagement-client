import { api } from "@/lib/axios";
import { SectionListResponse } from "@/models/sections/sectionListResponse";
import { SectionRequest } from "@/models/sections/sectionRequest";
import { SectionResponse } from "@/models/sections/sectionResponse";
import { Result } from "@/utils/Result";

export const AddSection = async (model: SectionRequest): Promise<Result<SectionResponse>> =>{
    const response = await api.post("sections", model);
    return response.data;
}

export const GetSections = async(): Promise<Result<SectionListResponse[]>> =>{
    const response = await api.get("sections")
    return response.data;
}