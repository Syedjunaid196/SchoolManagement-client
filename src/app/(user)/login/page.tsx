"use client"
import { LoginRequest } from '@/models/user/loginRequest'
import { loginSchema } from '@/schemas/loginSchema'
import { loginService } from '@/service/userService'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { refine } from 'zod'
import { id } from 'zod/locales'

 const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>({
        resolver: zodResolver(loginSchema)
    })

    const onsubmit = async (model: LoginRequest) => {
        const response = await loginService(model);
        if (response.isSuccess) {
            alert(response.message);
            localStorage.setItem("token-school-management", response.value.token);
        }
        else {
            alert(response.problemDetails.title)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>

                <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            placeholder="Enter your email"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            placeholder="Enter your password"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default Login
