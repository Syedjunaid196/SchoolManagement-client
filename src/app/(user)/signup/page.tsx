"use client"
import { UserRequest } from '@/models/auth/userRequest';
import { signupSchema } from '@/schemas/signupSchems';
import { userService } from '@/service/authService';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const UserSignup = () => {

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserRequest>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (model: UserRequest) => {
    var response = await userService(model);
    if (response.isSuccess) {
      alert(response.message)
    }
    else {
      alert(response.problemDetails.title)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* First Name */}
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Gender */}
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

        {/* Role */}
        <div className="space-y-1">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            
            {...register("role", { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value={1}>Admin</option>
            <option value={2}>Teacher</option>
            <option value={3}>Student</option>
            <option value={4}>Parent</option>
          </select>
        </div>
        {errors.role && (
          <p className="text-sm text-red-500">{errors.role.message}</p>
        )}

        {/* Submit Button */}
        <div>
          <button
           
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>

  )
}

export default UserSignup
