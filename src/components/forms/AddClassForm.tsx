"use client"
import { ClassRequest } from '@/models/class/classRequest'
import { ClassRequestSchema } from '@/schemas/addClassSchema'
import { AddClass } from '@/service/classService'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '../ui/Input'

const AddClassForm = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<ClassRequest>({
        resolver: zodResolver(ClassRequestSchema)
    });
    const onSubmit = async(model: ClassRequest)=>{
        const response = await AddClass(model);
        if(response.isSuccess){
            toast.success(response.message)
        }
        else{
            toast.error(response.problemDetails.title)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Add class</h1>
        </div>
        <div>
          <Input 
          {...register("name")}
          placeholder='Enter class name'
          error={errors.name?.message}
          />

          <button 
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            {isSubmitting? "Creating...": "Create class"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddClassForm
