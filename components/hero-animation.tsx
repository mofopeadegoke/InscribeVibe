"use client"
import { motion } from "framer-motion"

export function HeroAnimation() {
  return (
    <div className="w-full h-full bg-gray-900 p-4 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[500px] h-[280px] bg-gray-800 rounded-lg border border-yellow-500/20 shadow-sm">
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-700 border-b border-yellow-500/20 rounded-t-lg flex items-center px-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
          </div>
          <div className="mx-auto bg-gray-800 rounded-md h-5 w-64 flex items-center justify-center text-xs text-gray-400">
            example.com
          </div>
        </div>

        {/* Browser content */}
        <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
          {/* Website content */}
          <div className="w-full h-6 bg-gray-700 rounded mb-3"></div>
          <div className="w-3/4 h-4 bg-gray-700 rounded mb-6"></div>

          <div className="flex space-x-4 mb-6">
            <div className="w-1/3 h-20 bg-gray-700 rounded"></div>
            <div className="w-2/3 space-y-2">
              <div className="w-full h-4 bg-gray-700 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-700 rounded"></div>
              <div className="w-4/6 h-4 bg-gray-700 rounded"></div>
            </div>
          </div>

          <div className="w-full h-4 bg-gray-700 rounded mb-2"></div>
          <div className="w-full h-4 bg-gray-700 rounded mb-2"></div>
          <div className="w-2/3 h-4 bg-gray-700 rounded"></div>

          {/* Sticky notes animation */}
          <motion.div
            className="absolute top-12 right-8 w-32 h-32 bg-yellow-500 rounded shadow-md p-3 rotate-3 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-full h-3 bg-yellow-600 rounded mb-2"></div>
            <div className="w-5/6 h-3 bg-yellow-600 rounded mb-2"></div>
            <div className="w-4/6 h-3 bg-yellow-600 rounded"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-6 w-28 h-28 bg-gray-200 rounded shadow-md p-3 -rotate-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="w-full h-3 bg-gray-300 rounded mb-2"></div>
            <div className="w-5/6 h-3 bg-gray-300 rounded mb-2"></div>
            <div className="w-4/6 h-3 bg-gray-300 rounded"></div>
          </motion.div>

          <motion.div
            className="absolute top-24 left-20 w-24 h-24 bg-yellow-300 rounded shadow-md p-2 rotate-12 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="w-full h-2 bg-yellow-400 rounded mb-2"></div>
            <div className="w-5/6 h-2 bg-yellow-400 rounded mb-2"></div>
            <div className="w-4/6 h-2 bg-yellow-400 rounded"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

