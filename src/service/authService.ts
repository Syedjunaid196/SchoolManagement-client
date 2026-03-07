import { api } from "@/lib/axios";
import { LoginRequest } from "@/models/auth/loginRequest";
import { LoginResponse } from "@/models/auth/loginResponse";
import { UserRequest } from "@/models/auth/userRequest";
import { UserResponse } from "@/models/auth/userResponse";
import { Result } from "@/utils/Result";

export const userService= async(model:UserRequest):Promise<Result<UserResponse>>=>{
    const response = await api.post("auth", model);
    return response.data;
}


export const loginService = async(model:LoginRequest):Promise<Result<LoginResponse>>=>{
    const response = await api.post("auth/login", model);
    return response.data;
}

export const logoutService = async():Promise<Result<String>>=>{
    const response = await api.post("auth/logout");
    return response.data;
}