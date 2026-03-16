"use client"

import { AcademicYearResponse } from "@/models/academicYears/academicYearsResponse"

interface Props{
    academicYears: AcademicYearResponse[];
}

export default function AcademicYearTable({academicYears}: Props) {


    return (
        <div>
            <table className="w-full border">

                <thead>
                    <tr className="text-left bg-gray-300">
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>

                <tbody>
                    {academicYears?.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="text-center p-6">
                                No academic years found
                            </td>
                        </tr>
                    ) : (
                        academicYears?.map((year) => (
                            <tr key={year.id}
                                className='border-t hover:bg-gray-50'>
                                <td>{year.name}</td>
                                <td>{new Date(year.startDate).toLocaleDateString()}</td>
                                <td>{new Date(year.endDate).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    )
}

