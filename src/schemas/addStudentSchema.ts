import { Gender } from "@/models/Enums/appEnums";
import { z } from "zod";

export const AddStudentSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100),

  gender: z.nativeEnum(Gender),

  // If coming from HTML input type="date"
  dateOfBirth: z.date(),

  rollNumber: z
    .string()
    .min(1, "Roll number is required")
    .max(20, "Roll number is too long"),
});