import axios from "axios";
import { config } from "process";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true

});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token-school-management");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

