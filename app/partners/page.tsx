"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Handshake, Globe, Users } from "lucide-react"
import { PartnersPageData } from "@/types/partners"
import partnersData from "@/data/pages/partners.json"

export default function PartnersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our network of innovative organizations and collaboration opportunities
          </p>
        </motion.div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-32 object-contain p-4"
                  />
                  <div className="p-6">
                    <Badge className="mb-2">{partner.type}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {partner.description}
                    </p>
                    <Button variant="link" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {benefitIcons[benefit.icon]}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our network of innovative organizations and help shape the future of
              technology and research. We're always looking for new partnerships that
              align with our mission and values.
            </p>
            <Button size="lg">
              Get in Touch <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const { partners, benefits } = partnersData as PartnersPageData

const benefitIcons: any = {
  Globe: <Globe className="h-8 w-8" />,
  Handshake: <Handshake className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />
}