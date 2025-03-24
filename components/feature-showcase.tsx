"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface FeatureShowcaseProps {
  title: string
  description: string
  icon: ReactNode
  imagePosition: "left" | "right"
}

export function FeatureShowcase({ title, description, icon, imagePosition }: FeatureShowcaseProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contentVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? -20 : 20 },
    visible: { opacity: 1, x: 0 },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? 20 : -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      {imagePosition === "left" && (
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-yellow-500/20 bg-gray-800 shadow-sm">
            <FeatureImage feature={title} />
          </div>
        </motion.div>
      )}

      <motion.div
        className="flex flex-col justify-center space-y-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 md:text-lg">{description}</p>
        <ul className="space-y-2">
          {getFeatureBullets(title).map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                className="h-5 w-5 flex-shrink-0 text-yellow-500 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {imagePosition === "right" && (
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-yellow-500/20 bg-gray-800 shadow-sm">
            <FeatureImage feature={title} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

function FeatureImage({ feature }: { feature: string }) {
  // This would be replaced with actual feature-specific images
  return <div className="w-full h-full flex items-center justify-center text-gray-500">{feature} Illustration</div>
}

function getFeatureBullets(feature: string): string[] {
  switch (feature) {
    case "Take notes while browsing":
      return [
        "Works on any website without switching tabs",
        "Automatically saves the source URL",
        "Organize with tags and folders",
        "Search across all your web notes",
      ]
    case "Create sketches and diagrams":
      return [
        "Intuitive drawing tools",
        "Shapes, arrows, and connectors",
        "Freehand sketching",
        "Convert handwriting to text",
      ]
    case "Download and share notes":
      return [
        "Export as PDF, PNG, or Markdown",
        "One-click sharing with teammates",
        "Control access permissions",
        "Version history",
      ]
    case "Set reminders with sticky notes":
      return ["Set due dates and times", "Get browser notifications", "Email reminders", "Recurring reminders"]
    default:
      return []
  }
}

