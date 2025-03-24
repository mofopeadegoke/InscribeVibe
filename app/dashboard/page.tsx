import { Button } from "@/components/ui/button"
import Link from "next/link"
import { requireAuth } from "@/lib/auth"
import { handleSignOut } from "@/app/actions"

export default async function DashboardPage() {
  const user = await requireAuth()

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-yellow-500/20 bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-black font-bold">
              I
            </div>
            <span className="text-xl font-bold text-yellow-500">Inscribe</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/notes"
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors"
            >
              My Notes
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-400">Welcome, {user.firstName}</span>
            <form action={handleSignOut}>
              <Button
                type="submit"
                variant="outline"
                className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Welcome to your Dashboard
            </h1>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start capturing and organizing your ideas
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          <div className="bg-gray-800 border border-yellow-500/20 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Create New Note</h3>
            <p className="text-gray-400 mb-4">Start a new note to capture your ideas</p>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 mt-auto">New Note</Button>
          </div>

          <div className="bg-gray-800 border border-yellow-500/20 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">My Notebooks</h3>
            <p className="text-gray-400 mb-4">Organize your notes into different notebooks</p>
            <Button variant="outline" className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 mt-auto">
              View Notebooks
            </Button>
          </div>

          <div className="bg-gray-800 border border-yellow-500/20 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Recent Activity</h3>
            <p className="text-gray-400 mb-4">View your recent notes and edits</p>
            <Button variant="outline" className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 mt-auto">
              View Activity
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 border border-yellow-500/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Total Notes</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Notebooks</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Tags</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Storage Used</p>
              <p className="text-2xl font-bold text-white">0 MB</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

