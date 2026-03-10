"use client"
import { TeacherListResponse } from '@/models/teachers/teacherListResponse';
import { GetTeacherList } from '@/service/teacherService';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';


const TeacherTable = () => {

    const [teachers, SetTeachers] = useState<TeacherListResponse[]>();


    const result = async () => {
        const response = await GetTeacherList();
        if (response.isSuccess) {
            SetTeachers(response.value);
            toast.success(response.message);
        }
        else{
            toast.error(response.problemDetails.title);
        }
    }
    useEffect(() => {
        result();
    }, []);



    return (
        <div className='bg-white shadow rounded-lg overflow-hidden'>
            <table className='min-w-full border-collapse'>
                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    <tr >
                        <th className="p-3">First Name</th>
                        <th className="p-3">Last Name</th>
                        <th className="p-3">Gender</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Employee code</th>
                        <th className="p-3">Joining Date</th>
                        <th className="p-3">Actions</th>

                    </tr>
                </thead>
                <tbody className='text-sm text-gray-700'>
                    {teachers?.length === 0 ? (
                        <td colSpan={8} className="text-center p-6">
                            No Teacher found
                        </td>
                    ) :
                        (
                            teachers?.map((teacher) => (
                                <tr key={teacher.id}
                                    className='border-t hover:bg-gray-50'>
                                    <td className="p-3">{teacher.firstName}</td>
                                    <td className="p-3">{teacher.lastName}</td>
                                    <td className="p-3">{teacher.gender}</td>
                                    <td className="p-3">{teacher.email}</td>
                                    <td className="p-3">{teacher.employeeCode}</td>
                                    <td className="p-3">{new Date(teacher.joiningDate).toLocaleDateString()}</td>
                                    {/* action buttons */}
                                    <td className="p-3 flex gap-2">
                                        <button className="text-blue-600 hover:underline">
                                            Edit
                                        </button>

                                        <button className="text-red-600 hover:underline">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default TeacherTable
