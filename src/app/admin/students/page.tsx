import StudentTable from "@/components/tables/StudentTable";
import { GetStudents } from "@/service/studentService";
import Link from "next/link";

export default async function StudentsPage() {

  const result = await GetStudents();

  if (!result.isSuccess) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Students</h1>
        <p className="text-red-500">
          {result.problemDetails?.title ?? "Failed to load students"}
        </p>
      </div>
    );
  }

  const students = result.value ?? [];

  return (
    <div>

      <Link
        href="/admin/students/add-student"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create Student
      </Link>

      <h1 className="text-2xl font-bold mb-6">Students</h1>

      <StudentTable students={students} />

    </div>
  );
}