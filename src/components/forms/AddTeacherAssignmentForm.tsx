"use client"
import { SectionListResponse } from '@/models/sections/sectionListResponse';
import { SubjectListResponse } from '@/models/subjects/subjectListResponse';
import { TeacherAssignmentRequest } from '@/models/teacherAssignment/teacherAssignmentRequest';
import { TeacherListResponse } from '@/models/teachers/teacherListResponse'
import { AddTeacherAssignmentSchema } from '@/schemas/AddTeacherAssignmentSchema';
import { GetSections } from '@/service/sectionService';
import { GetSubjects } from '@/service/subjectService';
import { AssignTeacherService } from '@/service/teacherAssignmentService';
import { GetTeacherList } from '@/service/teacherService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const AddTeacherAssignmentForm = () => {
    const router = useRouter();
    const [teachers, setTeachers] = useState<TeacherListResponse[]>([]);
    const [subjects, setSubjects] = useState<SubjectListResponse[]>([]);
    const [sections, setSections] = useState<SectionListResponse[]>([]);


    const data = async () => {
        const teacherResponse = await GetTeacherList();
        const subjectResponse = await GetSubjects();
        const sectionresponse = await GetSections();

        if (teacherResponse.isSuccess) {
            setTeachers(teacherResponse.value ?? []);
        }
        if (subjectResponse.isSuccess) {
            setSubjects(subjectResponse.value ?? []);
        }

        if (sectionresponse.isSuccess) {
            setSections(sectionresponse.value ?? []);
        }
    }

    useEffect(() => {
        data()
    }, []);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TeacherAssignmentRequest>({
        resolver: zodResolver(AddTeacherAssignmentSchema)
    });

    const onSubmit = async (model: TeacherAssignmentRequest) => {
        const response = await AssignTeacherService(model);
        if (response.isSuccess) {
            toast.success(response.message);

        }
        else{
            toast.error(response.problemDetails.title)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                <select {...register("teacherId")} className="border p-2 w-full rounded">
                    <option value="">Select Teacher</option>
                    {
                        teachers.map((t) => (
                            <option key={t.id} value={t.id}>{t.firstName} {t.lastName}</option>
                        ))
                    }
                </select>
                {errors.teacherId && (
                    <p className='text-red-500'>{errors.teacherId.message}</p>
                )}

                <select {...register("subjectId")} className="border p-2 w-full rounded">
                    <option value="" >Select Subject</option>

                    {subjects.map((sub) => (
                        <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                </select>
                {errors.subjectId && (
                    <p className='text-red-500'>{errors.subjectId?.message}</p>
                )}

                <select {...register("sectionId")} className="border p-2 w-full rounded">
                    <option value="" >Select Section</option>

                    {sections.map((sec) => (
                        <option key={sec.id} value={sec.id}>{sec.schoolClassName}-{sec.name}</option>
                    ))}
                </select>
                {errors.sectionId && (
                    <p className='text-red-500'>{errors.sectionId.message}</p>
                )}


                <button
                    disabled={isSubmitting}
                    className='bg-blue-600 text-white px-4 py-2 rounded w-full cursor-pointer'>{isSubmitting ? "Assigning" : "Assigning Subject"}</button>
            </form>
        </div>
    )
}

export default AddTeacherAssignmentForm
