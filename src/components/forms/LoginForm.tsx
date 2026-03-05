"use client"
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { UserRole, UserStatus } from '@/models/Enums/appEnums'
import { LoginRequest } from '@/models/user/loginRequest'
import { loginSchema } from '@/schemas/loginSchema'
import { loginService } from '@/service/userService'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const Login = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>({
        resolver: zodResolver(loginSchema)
    })

    const onsubmit = async (model: LoginRequest) => {
        const response = await loginService(model);
        if (response.isSuccess) {
           toast.success(response.message)
            if(response.value.role === UserRole.Admin)
                router.push("admin/dashboard")

            if(response.value.role === UserRole.Student)
                router.push("student/dashboard")

            if(response.value.role === UserRole.Parent)
                router.push("parent/dashboard")
            if(response.value.role === UserRole.Teacher)
                router.push("teacher/dashboard")
        }
        else {
            toast.error(response.problemDetails.title)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card>
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Login
                </h2>

                <form onSubmit={handleSubmit(onsubmit)}>
                    <Input
                        {...register("email")}
                        placeholder="Email"
                        error={errors.email?.message}
                    />

                    <Input
                        type="password"
                        {...register("password")}
                        placeholder="Password"
                        error={errors.password?.message}
                    />

                    <Button type="submit">
                       Login
                    </Button>
                </form>
            </Card>
        </div>
    )

}

export default Login
