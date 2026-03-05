import { api } from "@/lib/axios";
import { LoginRequest } from "@/models/user/loginRequest";
import { LoginResponse } from "@/models/user/loginResponse";
import { UserRequest } from "@/models/user/userRequest";
import { UserResponse } from "@/models/user/userResponse";
import { Result } from "@/utils/Result";

export const userService= async(model:UserRequest):Promise<Result<UserResponse>>=>{
    const response = await api.post("users", model);
    return response.data;
}


export const loginService = async(model:LoginRequest):Promise<Result<LoginResponse>>=>{
    const response = await api.post("users/login", model);
    return response.data;
}

export const logoutService = async():Promise<Result<String>>=>{
    const response = await api.post("users/logout");
    return response.data;
}