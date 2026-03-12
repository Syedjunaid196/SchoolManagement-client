"use client"
import { ParentListResponse } from '@/models/parents/parentListResponse'
import { GetParentList } from '@/service/parentService';
import { useEffect, useState } from 'react'
import { toast } from 'sonner';

const ParentTable = () => {
    const [parents, setParents] = useState<ParentListResponse[]>([]);

    const result = async () => {
        const response = await GetParentList();
        if (response.isSuccess) {
            toast.success(response.message);
            setParents(response.value);
        }
        else {
            toast.error(response.problemDetails.title);
        }


    }
    useEffect(() => {
        result()
    }, []);
    return (
        <div className='bg-white shadow rounded-lg overflow-hidden'>
            <table className='min-w-full border-collapse'>
                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                    <tr>
                        <th className="p-3">First Name</th>
                        <th className="p-3">Last Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Gender</th>
                        <th className="p-3">Occupation</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody className='text-sm text-gray-700'>
                    {parents?.length === 0 ? (
                        <tr>
                        <td colSpan={8} className="text-center p-6">
                            No Parent found
                        </td>
                        </tr>
                    ) : (
                        parents.map((parent) => (
                            <tr key={parent.id}
                                className='border-t hover:bg-gray-50'>
                                <td className="p-3">{parent.firstName}</td>
                                <td className="p-3">{parent.lastName}</td>
                                <td className="p-3">{parent.email}</td>
                                <td className="p-3">{parent.gender}</td>
                                <td className="p-3">{parent.occupation}</td>
                                <td className="p-3">{parent.address}</td>
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

export default ParentTable
