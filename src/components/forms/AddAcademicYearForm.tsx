"use client"
import { AcademicYearRequest } from '@/models/academicYears/academicYearRequest';
import { AddAcademicYearSchema } from '@/schemas/addAcademicYearSchema';
import { AddAcademicYear } from '@/service/academicYearService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Input } from '../ui/Input';

const AddAcademicYearForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting }
    } = useForm<AcademicYearRequest>({
        resolver: zodResolver(AddAcademicYearSchema)
    });

    const onSubmit = async (model: AcademicYearRequest) => {
        var response = await AddAcademicYear(model);
        if (response.isSuccess) {
            toast.success(response.message);
            router.push("/admin/academic-years")
        }
        else {
            toast.error(response.problemDetails.title);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>add academic year</h1>
                <div>
                    <Input
                        {...register("name")}
                        placeholder='Enter academic year name'
                        error={errors.name?.message} />
                </div>

                <div>
                    <Input
                        {...register("startDate", { valueAsDate: true })}
                        type='date'
                        error={errors.startDate?.message} />
                </div>

                <div>
                    <Input
                        {...register("endDate", { valueAsDate: true })}
                        type='date'
                        error={errors.endDate?.message}
                    />

                    <button type='submit'
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white p-2 rounded">{isSubmitting ? "Creating..." : "Create Academic Year"}</button>
                </div>
            </form>
        </div>
    )
}

export default AddAcademicYearForm
