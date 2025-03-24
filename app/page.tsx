import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, Download, Globe, Palette } from "lucide-react"
import { HeroAnimation } from "@/components/hero-animation"
import { PricingCard } from "@/components/pricing-card"
import { FeatureShowcase } from "@/components/feature-showcase"

export default function Home() {
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
            <Link href="/" className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 px-3 py-1 rounded-full">
                    New Release
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Capture ideas anywhere on the web
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Inscribe helps you collect, organize, and share notes across any website. Sketch ideas, set
                    reminders, and boost your productivity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-yellow-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
                  >
                    Try for free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 px-8 text-sm font-medium text-yellow-500 shadow-sm transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/20"
                  >
                    See how it works
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-black bg-gray-800" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    Join <span className="font-medium text-yellow-500">5,000+</span> users already using Inscribe
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[500px] aspect-video overflow-hidden rounded-2xl border border-yellow-500/20 bg-gray-900 shadow-lg">
                  <HeroAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="w-full py-12 md:py-16 border-y border-yellow-500/20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Trusted by teams at</div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-70">
                {["Google", "Microsoft", "Airbnb", "Spotify", "Netflix"].map((company) => (
                  <div key={company} className="flex items-center justify-center">
                    <div className="text-xl font-bold text-gray-500">{company}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-500">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Everything you need to capture ideas
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Inscribe combines the best note-taking features in one seamless experience
                </p>
              </div>
            </div>

            <div className="grid gap-12 md:gap-16">
              <FeatureShowcase
                title="Take notes while browsing"
                description="Capture ideas, quotes, and insights directly on any webpage. Organize with tags and folders for easy retrieval."
                icon={<Globe className="h-10 w-10 text-yellow-500" />}
                imagePosition="right"
              />

              <FeatureShowcase
                title="Create sketches and diagrams"
                description="Express your ideas visually with our intuitive drawing tools. Add shapes, arrows, and freehand sketches to your notes."
                icon={<Palette className="h-10 w-10 text-yellow-500" />}
                imagePosition="left"
              />

              <FeatureShowcase
                title="Download and share notes"
                description="Export your notes in multiple formats (PDF, PNG, Markdown) or share them directly with teammates via link."
                icon={<Download className="h-10 w-10 text-yellow-500" />}
                imagePosition="right"
              />

              <FeatureShowcase
                title="Set reminders with sticky notes"
                description="Never miss important deadlines. Set alarms on your notes and get notified when it's time to take action."
                icon={<Clock className="h-10 w-10 text-yellow-500" />}
                imagePosition="left"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-500">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Choose the plan that's right for you
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start for free, upgrade when you need more features
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for getting started"
                features={["Up to 50 notes", "Basic note-taking", "3 notebooks", "7-day history"]}
                buttonText="Get Started"
                buttonVariant="outline"
                popular={false}
              />

              <PricingCard
                title="Pro"
                price="$9"
                period="/month"
                description="For power users and professionals"
                features={[
                  "Unlimited notes",
                  "Advanced sketching tools",
                  "Unlimited notebooks",
                  "30-day history",
                  "Priority support",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                popular={true}
              />

              <PricingCard
                title="Team"
                price="$19"
                period="/user/month"
                description="For teams and organizations"
                features={[
                  "Everything in Pro",
                  "Team collaboration",
                  "Admin controls",
                  "Advanced security",
                  "API access",
                  "24/7 support",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Email Collection Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Stay updated with our latest features
                  </h2>
                  <p className="max-w-[600px] text-yellow-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our newsletter and be the first to know about new features, tips, and special offers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/80 border-yellow-600/20 text-black placeholder:text-black/60 focus-visible:ring-yellow-600"
                  />
                  <Button type="submit" className="bg-black text-yellow-500 hover:bg-gray-900">
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm text-yellow-900">We respect your privacy. Unsubscribe at any time.</p>
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

