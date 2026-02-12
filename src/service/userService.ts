import { api } from "@/lib/axios";
import { UserRequest } from "@/models/user/userRequest";
import { UserResponse } from "@/models/user/userResponse";
import { Result } from "@/utils/Result";

export const userService= async(model:UserRequest):Promise<Result<UserResponse>>=>{
    const response = await api.post("users", model);
    return response.data;
}