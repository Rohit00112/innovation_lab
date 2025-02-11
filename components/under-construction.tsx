"use client"

import { motion } from "framer-motion"
import { Hammer, Wrench, HardHat } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

type IconPosition = {
  left: number
  top: number
  rotation: number
}

export function UnderConstruction() {
  const [positions, setPositions] = useState<IconPosition[]>([])

  useEffect(() => {
    const newPositions = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360
    }))
    setPositions(newPositions)
  }, [])

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 text-center relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                transform: `rotate(${pos.rotation}deg)`,
              }}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {i % 3 === 0 ? (
                <Hammer className="w-8 h-8" />
              ) : i % 3 === 1 ? (
                <Wrench className="w-8 h-8" />
              ) : (
                <HardHat className="w-8 h-8" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Wrench className="w-16 h-16 text-primary" />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Under Construction
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're working hard to bring you something amazing.
            <br />
            Please check back soon!
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="h-2 bg-muted rounded-full overflow-hidden mb-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-primary"
              animate={{
                width: ["0%", "100%"],
                x: ["-100%", "0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Estimated Time */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Estimated completion: Coming Soon
          </motion.p>
        </motion.div>
      </Card>
    </div>
  )
}