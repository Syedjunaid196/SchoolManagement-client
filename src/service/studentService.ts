import { api } from "@/lib/axios";
import { StudentListResponse } from "@/models/students/studentListResponse";
import { StudentRequest } from "@/models/students/studentRequest";
import { StudentResponse } from "@/models/students/studentResponse";
import { Result } from "@/utils/Result";

export const AddStudentService = async (model: StudentRequest): Promise<Result<StudentResponse>>=>{
    const response = await api.post("students", model);
    return response.data;
}

export const GetStudents = async (): Promise<Result<StudentListResponse[]>> =>{
    const response = await api.get<Result<StudentListResponse[]>>("students");
    return response.data;
}

export const DeleteStudent = async (id: string):Promise<Result<StudentResponse>>=>{
     const response = await api.delete(`students/${id}`);
     return response.data;
}