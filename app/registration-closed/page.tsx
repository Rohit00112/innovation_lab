"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarClock, Bell, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegistrationClosedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-2xl w-full p-8 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
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
            <CalendarClock className="w-16 h-16 text-primary" />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Registration is Currently Closed
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're currently at capacity and registration is now closed.
           
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="h-2 bg-muted rounded-full overflow-hidden mb-8"
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-4"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/newsletter">
                <Bell className="mr-2 h-5 w-5" />
                Join Waitlist
              </Link>
            </Button>

            <div className="flex justify-center mt-6">
              <Button variant="link" className="text-sm" asChild>
                <Link href="/">
                  Return to Home <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Estimated Time */}
          
        </motion.div>
      </Card>
    </div>
  )
}