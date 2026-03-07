'use client'
import { TeacherRequest } from '@/models/teachers/teacherRequest'
import { AddTeacherSchema } from '@/schemas/addTeacherSchema'
import { AddTeacherService } from '@/service/teacherService'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation'

const AddTeacherForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TeacherRequest>({
        resolver: zodResolver(AddTeacherSchema)
    })

    const onSubmit = async (model: TeacherRequest) => {
        const response = await AddTeacherService(model);
        if (response.isSuccess) {
            toast.success(response.message);
            router.back();
        }
        else {
            toast.error(response.problemDetails.title);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("firstName")}
                    placeholder='Enter first name'
                    error={errors.firstName?.message}
                />

                <Input
                    {...register("lastName")}
                    placeholder='Enter last name'
                />

                <Input
                    {...register("email")}
                    placeholder="Enter email"
                    error={errors.email?.message}
                />

                <Input
                    type="password"
                    {...register("password")}
                    placeholder="Enter password"
                    error={errors.password?.message}
                />

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
                    type="date"
                    {...register("dateOfJoining", { valueAsDate: true })}
                    error={errors.dateOfJoining?.message}
                />

                <Input
                    {...register("employeeCode")}
                    placeholder="Enter roll number"
                    error={errors.employeeCode?.message}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white p-2 rounded"
                >
                    {isSubmitting ? "Creating..." : "Create Teacher"}
                </button>
            </form>
        </div>
    )
}

export default AddTeacherForm
