"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Innovation Lab website and services, you
                acknowledge that you have read, understood, and agree to be bound by
                these Terms of Service. If you do not agree to these terms, please do
                not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                When you create an account with us, you must provide accurate and
                complete information. You are responsible for maintaining the
                confidentiality of your account credentials and for all activities that
                occur under your account.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You must be at least 18 years old to create an account</li>
                <li>You are responsible for keeping your password secure</li>
                <li>You agree to notify us immediately of any unauthorized access</li>
                <li>We reserve the right to suspend or terminate accounts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including but not limited to text,
                graphics, logos, images, audio clips, digital downloads, and data
                compilations, is the property of Innovation Lab or its content
                suppliers and is protected by international copyright laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violating any applicable laws or regulations</li>
                <li>Interfering with or disrupting our services</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Impersonating other users or entities</li>
                <li>Collecting user information without consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Content Guidelines</h2>
              <p className="text-muted-foreground mb-4">
                When contributing content to our platform, you agree to follow these
                guidelines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Content must be accurate and original</li>
                <li>Respect intellectual property rights</li>
                <li>No harmful or malicious content</li>
                <li>No spam or unauthorized advertising</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Innovation Lab shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or relating
                to your use of our services. We make no warranties about the accuracy
                or reliability of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify
                users of any material changes via email or through our website. Your
                continued use of our services after such modifications constitutes
                acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact
                us at:
              </p>
              <p className="mt-2 text-muted-foreground">
                Email: legal@innovationlab.com<br />
                Address: Innovation Lab, Itahari International College<br />
                Phone: +977 123-456-7890
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2024
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}