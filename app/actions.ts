"use server"

import { signIn, signUp, signOut } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function handleSignUp(formData: FormData) {
  const result = await signUp(formData)

  if (result.success) {
    redirect("/dashboard")
  }

  return result
}

export async function handleSignIn(formData: FormData) {
  const result = await signIn(formData)

  if (result.success) {
    redirect("/dashboard")
  }

  return result
}

export async function handleSignOut() {
  await signOut()
}

