import StudentEnrollmentTable from "@/components/tables/StudentEnrollmentTable";
import { GetEnrollments } from "@/service/studentEnrollmentService";
import Link from "next/link";

export default async function EnrollmentsPage() {

    const result = await GetEnrollments();

    if (!result.isSuccess) {
        return <p>{result.problemDetails?.title}</p>;
    }

    const enrollments = result.value ?? [];
    return (
        <div>
            <Link
                href="/admin/student-enrollments/enroll-student"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >Enroll Student</Link>
            <h1 className="text-2xl font-bold mt-4 mb-6">Student Enrollments</h1>
            <StudentEnrollmentTable enrollments={enrollments} />
        </div>
    )
}