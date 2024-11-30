"use server"

export default async function login(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  console.log(email)
  console.log(password)
}