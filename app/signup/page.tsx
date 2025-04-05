"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { handleSignUp } from "@/app/actions"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Form submitted successfully!");
      setFormData({ lname: "", fname: "", email: "", message: "" });
    } else {
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-black font-bold">
                I
              </div>
              <span className="text-xl font-bold text-yellow-500">Inscribe</span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">Create your account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-yellow-500 hover:text-yellow-400">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action={handleSubmit} className="space-y-6">
                {/* {error && <div className="bg-red-500/10 text-red-500 text-sm p-3 rounded-md">{error}</div>} */}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        onChange={handleChange}
                        value={formData.fname}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last name
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                        onChange={handleChange}
                        value={formData.lname}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email address
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </Label>
                  <div className="mt-1">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox
                    id="terms"
                    name="terms"
                    required
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-500"
                  />
                  <Label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                    I agree to the{" "}
                    <Link href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                  >
                    {isPending ? "Creating account..." : "Create account"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-black px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-yellow-500"
                >
                  <span className="sr-only">Sign up with Google</span>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-yellow-500"
                >
                  <span className="sr-only">Sign up with Twitter</span>
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-yellow-500"
                >
                  <span className="sr-only">Sign up with GitHub</span>
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
          <div className="max-w-md p-8 text-black">
            <h2 className="text-2xl font-bold mb-4">Join Inscribe today</h2>
            <p className="mb-6">Start capturing ideas anywhere on the web with our powerful note-taking tools.</p>
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-full h-48 bg-black/20 rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-black/20 rounded w-3/4"></div>
                <div className="h-4 bg-black/20 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
