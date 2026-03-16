"use client"
import { AcademicYearResponse } from '@/models/academicYears/academicYearsResponse';
import { SectionListResponse } from '@/models/sections/sectionListResponse';
import { StudentEnrollmentRequest } from '@/models/studentEnrollment/studentEnrollmentRequest';
import { StudentListResponse } from '@/models/students/studentListResponse';
import { StudentEnrollmentSchema } from '@/schemas/studentEnrollmentSchema';
import { GetAcademicYears } from '@/service/academicYearService';
import { GetSections } from '@/service/sectionService';
import { EnrollStudent } from '@/service/studentEnrollmentService';
import { GetStudents } from '@/service/studentService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const StudentEnrollForm = () => {
    const router = useRouter();
    const [students, setStudents] = useState<StudentListResponse[]>([]);
    const [academicYear, setacademicyears] = useState<AcademicYearResponse[]>([]);
    const [sections, setSections] = useState<SectionListResponse[]>([]);

    const loadData = async () => {

        const studentRes = await GetStudents();
        const yearRes = await GetAcademicYears();
        const sectionRes = await GetSections();

        if (studentRes.isSuccess)
            setStudents(studentRes.value ?? []);

        if (yearRes.isSuccess)
            setacademicyears(yearRes.value ?? []);

        if (sectionRes.isSuccess)
            setSections(sectionRes.value ?? []);
    };

    useEffect(() => {
        loadData()
    }, []);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<StudentEnrollmentRequest>({ resolver: zodResolver(StudentEnrollmentSchema) })

    const onSubmit = async (model: StudentEnrollmentRequest) => {
        const result = await EnrollStudent(model);
        if (result.isSuccess) {
            toast.success(result.message);
            router.push("/admin/student-enrollments");
        }
        else {
            toast.error(result.problemDetails.title)
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 max-w-md'>

                <select {...register("studentId")} className="border p-2 w-full rounded">
                    <option value="">Select Student</option>

                    {students.map((s) => (
                        <option key={s.id} value={s.id}>
                            {s.firstName} {s.lastName}
                        </option>
                    ))}
                </select>

                {errors.studentId && (
                    <p className="text-red-500">{errors.studentId.message}</p>
                )}

                <select {...register("academicYearId")} className="border p-2 w-full rounded">
                    <option value="">Select Academic Year</option>

                    {academicYear.map((a) => (
                        <option key={a.id} value={a.id}>
                            {a.name}
                        </option>
                    ))}
                </select>

                {errors.academicYearId && (
                    <p className="text-red-500">{errors.academicYearId.message}</p>
                )}

                <select {...register("sectionId")} className="border p-2 w-full rounded">
                    <option value="">Select Class & Section</option>

                    {sections.map((s) => (
                        <option key={s.id} value={s.id}>
                            {s.schoolClassName} -{s.name.toUpperCase()}
                        </option>
                    ))}
                </select>
                {errors.sectionId && (
                    <p className='text-red-500'>{errors.sectionId.message}</p>
                )}

                <button
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                    {isSubmitting ? "Enrolling..." : "Enroll Student"}
                </button>
            </form>
        </div>
    )
}

export default StudentEnrollForm
