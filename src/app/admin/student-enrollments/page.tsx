import Link from "next/link";

export default async function () {
    return (
        <div>

            <Link
                href="/admin/student-enrollments/enroll-student"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Enroll Student
            </Link>
        </div>
    )
}