import { z } from "zod"

export const signUpSchema = z.object({
  email: z.string().email({ message: "Not an email format" }).trim(),
  password: z
  .string()
  .min(8, { message: "At least 8 characters"})
  .trim(),
  username: z
  .string()
  .min(3, { message: "At least 3 characters" })
  .trim()
})

export const loginSchema = signUpSchema

export type FormState =
  {
    errors?: {
      email?: string[]
      password?: string[]
    }
    message?: string
  } | undefined
