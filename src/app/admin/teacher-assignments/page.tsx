import TeacherAssignmentTable from "@/components/tables/TeacherAssignmentTable";
import { GetTeacherAssignments } from "@/service/teacherAssignmentService";
import Link from "next/link";

export default async function TeacherAssignmentsPage() {
    const result = await GetTeacherAssignments();
    if (!result.isSuccess) {
        <p>{result.problemDetails.title}</p>
    }
    const assignments = result.value ??[]
    return (
        <div>
            <Link
                href="/admin/teacher-assignments/assign-subject"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Assign Teacher
            </Link>

            <h1 className="text-2xl font-bold text-center">Teacher Subject Assignments</h1>
            <TeacherAssignmentTable assignments={assignments} />

        </div>
    )
}