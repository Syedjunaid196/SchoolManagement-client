"use client"
import { SubjectRequest } from '@/models/subjects/subjectRequest'
import { AddSubjectSchema } from '@/schemas/AddSubjectSchema'
import { AddSubject } from '@/service/subjectService'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '../ui/Input'
import { useRouter } from 'next/navigation'

const AddSubjectForm = () => {
    const router= useRouter();
    const{register, handleSubmit, formState: {errors, isSubmitting}}= useForm({
        resolver:zodResolver(AddSubjectSchema)
    });
    const onSubmit= async(model:SubjectRequest)=>{
        const response = await AddSubject(model);
        if(response.isSuccess){
            toast.success(response.message);
            router.push("/admin/subjects");
        }
        else{
            toast.error(response.problemDetails.title);
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        {...register("name")}
        placeholder='Enter subject name'
        error={errors.name?.message}
        />

        <Input 
        {...register("code")}
        placeholder='Enter subject code'
        error={errors.code?.message}
        />

        <button
        disabled={isSubmitting}
        className='w-full rounded bg-blue-600 text-white py-2  mt-4 '>{isSubmitting? "Creating..." : "Create Subject"}</button>

        
      </form>
    </div>
  )
}

export default AddSubjectForm
