"use client"

import { motion } from "framer-motion"
import { Loader2, Cog } from "lucide-react"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  variant?: "spinner" | "bar"
  className?: string
}

export function LoadingAnimation({
  size = "md",
  variant = "spinner",
  className = "",
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  if (variant === "spinner") {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`${sizeClasses[size]} text-primary`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-full h-full animate-pulse" />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.3, scale: 1.2 }}
            animate={{ opacity: 0, scale: 1.8 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className={`${sizeClasses[size]} rounded-full border-2 border-primary/30`} />
          </motion.div>
        </motion.div>
        <div className="flex items-center gap-2 text-primary">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Cog className="h-4 w-4" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm font-medium tracking-wide"
          >
            Work in Progress
          </motion.span>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-3">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            initial={{ x: "-100%" }}
            animate={{
              x: ["-120%", "100%"],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-2 text-primary">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Cog className="h-4 w-4" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm font-medium tracking-wide"
          >
            Work in Progress
          </motion.span>
        </div>
      </div>
    </div>
  )
}