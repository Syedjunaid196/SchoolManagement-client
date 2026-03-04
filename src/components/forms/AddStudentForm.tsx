"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/Input";
import { AddStudentSchema } from "@/schemas/addStudentSchema";
import { AddStudentService } from "@/service/studentService";

import { z } from "zod";

type AddStudentFormValues = z.infer<typeof AddStudentSchema>;

const AddStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddStudentFormValues>({
    resolver: zodResolver(AddStudentSchema),
  });

  const onSubmit = async (model: AddStudentFormValues) => {
    const response = await AddStudentService(model);

    if (response.isSuccess) {
      alert(response.message);
    } else {
      alert(response.problemDetails?.title ?? "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* <h1 className="text-2xl font-bold mb-6">Create Student</h1> */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...register("firstName")}
          placeholder="Enter first name"
          error={errors.firstName?.message}
        />

        <Input
          {...register("lastName")}
          placeholder="Enter last name"
          error={errors.lastName?.message}
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

        {/* Date of Birth */}
      <Input
  type="date"
  {...register("dateOfBirth", { valueAsDate: true })}
  error={errors.dateOfBirth?.message}
/>

        <Input
          {...register("rollNumber")}
          placeholder="Enter roll number"
          error={errors.rollNumber?.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white p-2 rounded"
        >
          {isSubmitting ? "Creating..." : "Create Student"}
        </button>
      </form>
    </div>
  );
};

export default AddStudent;