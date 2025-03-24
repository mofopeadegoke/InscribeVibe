import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Edit3, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-yellow-500/20 bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-black font-bold">
              I
            </div>
            <span className="text-xl font-bold text-yellow-500">Inscribe</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 px-3 py-1 rounded-full">
                  Our Story
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Helping people capture ideas anywhere on the web
                </h1>
                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to make note-taking seamless, intuitive, and powerful for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">How it all started</h2>
                  <p className="text-gray-400 md:text-xl/relaxed">
                    Inscribe began in 2020 when our founder, Alex Chen, was frustrated with the disconnected experience
                    of taking notes while researching online. Switching between tabs, copying and pasting content, and
                    losing track of sources was inefficient and disruptive to the creative process.
                  </p>
                  <p className="text-gray-400 md:text-xl/relaxed">
                    What started as a simple Chrome extension has evolved into a comprehensive note-taking platform that
                    helps thousands of students, researchers, writers, and professionals capture and organize their
                    ideas more effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-xl overflow-hidden border border-yellow-500/20">
                <div className="w-full aspect-video bg-gray-800 flex items-center justify-center text-gray-500">
                  Founder Image
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Our mission</h2>
                <p className="text-gray-400 md:text-xl/relaxed">
                  We believe that great ideas can happen anywhere, and capturing them should be effortless.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <Card className="bg-gray-800 border-yellow-500/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Accessibility</h3>
                  <p className="text-gray-400">
                    Making powerful note-taking tools accessible to everyone, regardless of technical skill.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-yellow-500/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Edit3 className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Creativity</h3>
                  <p className="text-gray-400">
                    Empowering users to express their ideas in multiple formats, from text to sketches.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-yellow-500/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Productivity</h3>
                  <p className="text-gray-400">
                    Helping users save time and stay organized with intuitive tools and workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Meet our team
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">The passionate people behind Inscribe</p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Alex Chen", role: "Founder & CEO" },
                { name: "Sarah Johnson", role: "Head of Product" },
                { name: "Michael Lee", role: "Lead Developer" },
                { name: "Emma Wilson", role: "UX Designer" },
                { name: "David Kim", role: "Marketing Director" },
                { name: "Olivia Martinez", role: "Customer Success" },
                { name: "James Taylor", role: "Frontend Engineer" },
                { name: "Sophia Garcia", role: "Content Strategist" },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-gray-800 border border-yellow-500/20"></div>
                  <div className="text-center">
                    <h3 className="font-medium text-white">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform how you take notes?
                </h2>
                <p className="text-yellow-900 md:text-xl/relaxed">
                  Join thousands of users who are already using Inscribe to capture and organize their ideas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link
                  href="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-yellow-500 shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#features"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-black/20 bg-black/10 px-8 text-sm font-medium text-black shadow-sm transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-yellow-500/20 bg-black">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-4 md:w-1/3">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-black font-bold">
                  I
                </div>
                <span className="text-xl font-bold text-yellow-500">Inscribe</span>
              </Link>
              <p className="text-sm text-gray-400">
                Inscribe helps you collect, organize, and share notes across any website. Sketch ideas, set reminders,
                and boost your productivity.
              </p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
                  <Link key={social} href="#" className="text-gray-400 hover:text-yellow-500">
                    {social}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:flex-1">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Product</h4>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Integrations", "Changelog", "Roadmap"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-yellow-500">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Company</h4>
                <ul className="space-y-2">
                  {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-yellow-500">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Resources</h4>
                <ul className="space-y-2">
                  {["Documentation", "Help Center", "Community", "Tutorials", "Legal"].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-yellow-500">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-yellow-500/20 pt-6">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Inscribe. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-400 hover:text-yellow-500">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-yellow-500">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-yellow-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

