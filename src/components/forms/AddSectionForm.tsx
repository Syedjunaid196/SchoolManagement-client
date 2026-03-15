"use client"
import { ClassListResponse } from '@/models/class/ClassListResponse'
import { SectionRequest } from '@/models/sections/sectionRequest'
import { AddSectionSchema } from '@/schemas/addSectionSchema'
import { GetClasses } from '@/service/classService'
import { AddSection } from '@/service/sectionService'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '../ui/Input'

const AddSectionForm = () => {

    const [classes, setClasses] = useState<ClassListResponse[]>([])

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SectionRequest>({
        resolver: zodResolver(AddSectionSchema)
    });

    //fetch classes by which i will use the class id to create the section 
    const fetchClasses = async () => {
        const classes = await GetClasses();
        if (classes.isSuccess) {
            setClasses(classes.value ?? [])
        }
    }

    useEffect(() => {
        fetchClasses();
    }, [])


    const onSubmit = async (model: SectionRequest) => {
        const response = await AddSection(model);
        if (response.isSuccess) {
            toast.success(response.message)
        }
        else {
            toast.error(response.problemDetails.title)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("name")}
                    placeholder='Enter Section Name'
                    error={errors.name?.message}
                />

                <select {...register("schoolClassId")}
                    className="border p-2 w-full rounded">
                    <option value="">Select Class</option>
                    {classes.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                {errors.schoolClassId && (
                    <p className="text-red-500 text-sm">{errors.schoolClassId?.message}</p>
                )}
                <button
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                    {isSubmitting ? "Creating..." : "Create Section"}
                </button>
            </form>
        </div>
    )
}

export default AddSectionForm
