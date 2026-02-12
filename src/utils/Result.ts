export interface Result<T>{
    value: T;
    isSuccess: boolean;
    message: string;
    statusCode: number;
    problemDetails: ProblemDetails  
}

export interface ProblemDetails{
    title: string;
    type: string;
    status: number;
    detail: string;
    Instance: string
}