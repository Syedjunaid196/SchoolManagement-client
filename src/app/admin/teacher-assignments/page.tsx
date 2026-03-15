import Link from "next/link";

export default function TeacherAssignmentPage() {
    return (
        <div>
            <Link
                href="/admin/teacher-assignments/assign-subject"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Assign Teacher
            </Link>

        </div>
    )
}