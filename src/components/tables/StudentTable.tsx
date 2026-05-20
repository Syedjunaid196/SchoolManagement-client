'use client'
import { StudentListResponse } from "@/models/students/studentListResponse";
import { DeleteStudent } from "@/service/studentService";
import { toast } from "sonner";
import { id } from "zod/locales";

interface StudentTableProps {
    students: StudentListResponse[];
}

const deletestud = async(id: string)=>{
 var response = await DeleteStudent(id);
 if(response.isSuccess){
    toast.success(response.message)
 }
 toast.success(response.message)
}

export default function StudentTable({ students }: StudentTableProps) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full border-collapse">

                {/* Table Header */}
                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    <tr>
                        <th className="p-3">First Name</th>
                        <th className="p-3">Last Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Gender</th>
                        <th className="p-3">Roll Number</th>
                        <th className="p-3">Date Of Birth</th>
                        <th className="p-3">Parent Name</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-sm text-gray-700">
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="text-center p-6">
                                No students found
                            </td>
                        </tr>
                    ) : (
                        students.map((student) => (
                            <tr
                                key={student.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="p-3">{student.firstName}</td>
                                <td className="p-3">{student.lastName}</td>
                                <td className="p-3">{student.email}</td>
                                <td className="p-3">{student.gender}</td>
                                <td className="p-3">{student.rollNumber}</td>
                                <td className="p-3">
                                    {new Date(student.dateOfBirth).toLocaleDateString()}
                                </td>
                                <td className="p-3">{student.parentName?? 'null'}</td>

                                {/* Actions */}
                                <td className="p-3 flex gap-2">
                                    <button className="text-blue-600 hover:underline">
                                        Edit
                                    </button>

                                    <button className="text-red-600 hover:underline"
                                    onClick={()=>deletestud(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>

    );
}
