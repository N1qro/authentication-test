"use server"

import { signUpSchema, FormState } from "../lib/definitions"

export default async function register(state: FormState, formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username")
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  const request = await fetch(
    "http://localhost:8000/api/register",
    {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "email": validatedFields.data.email,
        "password": validatedFields.data.password,
        "name": validatedFields.data.username
      })
    }
  )

  console.log(request)
  console.log(request.headers)
}