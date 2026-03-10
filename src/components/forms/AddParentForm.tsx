"use client"
import { ParentRequest } from '@/models/parents/parentRequest';
import { AddParentSchema } from '@/schemas/addParentSchema';
import { AddParent } from '@/service/parentService';
import { AddTeacherService } from '@/service/teacherService';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Input } from '../ui/Input';
import { error } from 'console';
import { useRouter } from 'next/navigation';

const AddParentForm = () => {

    const router= useRouter()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ParentRequest>({
        resolver: zodResolver(AddParentSchema)
    });

    const onSubmit = async (model: ParentRequest) => {
        const response = await AddParent(model);
        if (response.isSuccess) {
            toast.success(response.message);
            router.push("/admin/parents");
        }
        else {
            toast.error(response.problemDetails.title);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("firstName")}
                    placeholder='Enter first name'
                    error={errors.firstName?.message} />

                <Input
                    {...register("lastName")}
                    placeholder='Enter last name'
                    error={errors.lastName?.message} />

                <Input
                    {...register("email")}
                    placeholder='Enter email address'
                    error={errors.email?.message} />

                <Input
                    {...register("password")}
                    placeholder='Enter password'
                    error={errors.password?.message} />

                {/* Gender Dropdown */}
                <div className="space-y-1">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="gender"
                        {...register("gender", { valueAsNumber: true })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                    >
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                    </select>
                    {errors.gender && (
                        <p className="text-sm text-red-500">{errors.gender.message}</p>
                    )}
                </div>


                <Input
                    {...register("occupation")}
                    placeholder='Enter occupation'
                    error={errors.firstName?.message} />

                <Input
                    {...register("address")}
                    placeholder='Enter address'
                    error={errors.firstName?.message} />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white p-2 rounded"
                >
                    {isSubmitting ? "Creating..." : "Create Parent"}
                </button>





            </form>
        </div>
    )
}

export default AddParentForm
