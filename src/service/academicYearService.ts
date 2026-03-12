import { api } from "@/lib/axios";
import { AcademicYearRequest } from "@/models/academicYears/academicYearRequest";
import { AcademicYearResponse } from "@/models/academicYears/academicYearsResponse";
import { Result } from "@/utils/Result";

export const AddAcademicYear = async (model:AcademicYearRequest):Promise<Result<AcademicYearResponse>>=>{
    var response = await api.post("academic-years", model);
    return response.data;
}

export const GetAcademicYears = async():Promise<Result<AcademicYearResponse[]>> =>{
    var response = await api.get("academic-years");
    return response.data;
}