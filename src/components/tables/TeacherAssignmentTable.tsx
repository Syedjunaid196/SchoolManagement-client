import { TeacherAssignmentListResponse } from "@/models/teacherAssignment/teacherAssignmentListResponse";
import { table } from "console";
import { tr } from "zod/locales";

interface Props {
    assignments: TeacherAssignmentListResponse[]
}

export default function TeacherAssignmentTable({ assignments }: Props) {
    return (
        <div>
            <table className="w-full border">
                <thead>
                    <tr className="bg-grey-100">
                        <th className="p-2 text-left">S. NO</th>
                        <th className="p-2 text-left">TeacherName</th>
                        <th className="p-2 text-left">Subject</th>
                        <th className="p-2 text-left">Class</th>
                        <th className="p-2 text-left">Section</th>
                    </tr>
                </thead>

                <tbody>
                    {assignments.map((a, index) => (

                        <tr key={a.id} className="border-t hover:bg-gray-300">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{a.teacherName}</td>
                            <td className="p-2">{a.subjectName}</td>
                            <td className="p-2">{a.className}</td>
                            <td className="p-2">{a.sectionName}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}