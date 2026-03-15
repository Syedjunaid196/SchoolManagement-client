import { StudentEnrollmentListResponse } from "@/models/studentEnrollment/StudentEnrollmentListResponse";
import { table } from "console";

interface Props {
    enrollments: StudentEnrollmentListResponse[];
}

export default function StudentEnrollmentTable({ enrollments }: Props) {
    return (
        <div>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Student</th>
                        <th className="p-2 text-left">Academic Year</th>
                        <th className="p-2 text-left">Class</th>
                        <th className="p-2 text-left">Section</th>
                    </tr>
                </thead>

                <tbody>
                    {enrollments.map((e) => (
                        <tr key={e.id} className="border-t hover:bg-gray-300">
                            <td className="p-2">{e.studentName}</td>
                            <td className="p-2">{e.academicYearName}</td>
                            <td className="p-2">{e.className}</td>
                            <td className="p-2">{e.sectionName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}