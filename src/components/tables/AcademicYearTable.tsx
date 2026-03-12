"use client"
import { AcademicYearResponse } from "@/models/academicYears/academicYearsResponse"
import { GetAcademicYears } from "@/service/academicYearService";
import { useEffect, useState } from "react"
import { toast } from "sonner";

const AcademicYearTable = () => {
    const [academicyears, setAcademicYears] = useState<AcademicYearResponse[]>([]);

    const academicYearList = async () => {
        const response = await GetAcademicYears();
        if (response.isSuccess) {
            toast.success(response.message);
            setAcademicYears(response.value);
            console.log(response.value)
        }
        else {
            toast.error(response.problemDetails.title)
        }
    }
    useEffect(() => {
        academicYearList();
    }, []);
    return (
        <div>
            <table className="w-full border">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>

                <tbody>
                    {academicyears?.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="text-center p-6">
                                No academic years found
                            </td>
                        </tr>
                    ) : (
                        academicyears?.map((year) => (
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

export default AcademicYearTable
