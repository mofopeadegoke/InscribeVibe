import { compare, hash } from "bcryptjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"
import crypto from "crypto"

// Function to create a session token
export async function createSessionToken(userId: string) {
  // Create a simple session token with an expiration
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  const sessionToken = crypto.randomBytes(32).toString("hex")

  // Store the session in MongoDB
  const client = await clientPromise
  const db = client.db()

  await db.collection("sessions").insertOne({
    sessionToken,
    userId: new ObjectId(userId),
    expires,
  })

  // Set the cookie
  cookies().set("session-token", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires,
    path: "/",
  })

  return sessionToken
}

// Function to verify a session token
export async function verifySessionToken() {
  const sessionToken = cookies().get("session-token")?.value

  if (!sessionToken) {
    return null
  }

  const client = await clientPromise
  const db = client.db()

  const session = await db.collection("sessions").findOne({
    sessionToken,
    expires: { $gt: new Date() },
  })

  if (!session) {
    cookies().delete("session-token")
    return null
  }

  return { userId: session.userId.toString() }
}

// Function to get the current user
export async function getCurrentUser() {
  const session = await verifySessionToken()

  if (!session) {
    return null
  }

  const client = await clientPromise
  const db = client.db()

  const user = await db.collection("users").findOne({
    _id: new ObjectId(session.userId),
  })

  if (!user) {
    return null
  }

  // Remove sensitive data
  const { password, ...userWithoutPassword } = user

  return userWithoutPassword
}

// Function to sign up a user
export async function signUp(formData: FormData) {
  const firstName = formData.get("first-name") as string
  const lastName = formData.get("last-name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    return {
      error: "All fields are required",
    }
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters",
    }
  }

  try {
    const client = await clientPromise
    const db = client.db()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return {
        error: "A user with this email already exists",
      }
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Insert user into database
    const result = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    })

    // Create session
    await createSessionToken(result.insertedId.toString())

    return { success: true }
  } catch (error) {
    console.error("Error during signup:", error)
    return {
      error: "An error occurred during signup. Please try again.",
    }
  }
}

// Function to sign in a user
export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Basic validation
  if (!email || !password) {
    return {
      error: "Email and password are required",
    }
  }

  try {
    const client = await clientPromise
    const db = client.db()

    // Find user
    const user = await db.collection("users").findOne({ email })
    if (!user) {
      return {
        error: "Invalid email or password",
      }
    }

    // Verify password
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      return {
        error: "Invalid email or password",
      }
    }

    // Create session
    await createSessionToken(user._id.toString())

    return { success: true }
  } catch (error) {
    console.error("Error during signin:", error)
    return {
      error: "An error occurred during sign in. Please try again.",
    }
  }
}

// Function to sign out a user
export async function signOut() {
  const sessionToken = cookies().get("session-token")?.value

  if (sessionToken) {
    const client = await clientPromise
    const db = client.db()

    // Delete the session from the database
    await db.collection("sessions").deleteOne({ sessionToken })
  }

  cookies().delete("session-token")
  redirect("/login")
}

// Function to require authentication
export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return user
}

