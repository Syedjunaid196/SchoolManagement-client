import { api } from "@/lib/axios";
import { StudentEnrollmentRequest } from "@/models/studentEnrollment/studentEnrollmentRequest";
import { StudentEnrollmentResponse } from "@/models/studentEnrollment/studentEnrollmentResponse";
import { Result } from "@/utils/Result";

export const EnrollStudent = async(model: StudentEnrollmentRequest):Promise<Result<StudentEnrollmentResponse>>=>{
    const response = await api.post("student-enrollments", model);
    return response.data;
}