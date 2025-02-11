"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Users2, Target, Heart, Trophy, Building2, Award, Microscope, ArrowUpRight, Laptop } from "lucide-react"
import { AboutPageData } from "@/types/about"
import aboutData from "@/data/pages/about.json"
import { Video } from "@/components/ui/video"

export default function AboutPage() {
  const { team, history, facilities, achievements, faqs } = aboutData as AboutPageData

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('About.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our story, mission, and the people behind Innovation Lab
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      {/* <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                To foster innovation and creativity through collaborative learning,
                cutting-edge research, and meaningful partnerships that drive positive
                change in our community and beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be a leading hub of innovation where ideas flourish, talent thrives,
                and groundbreaking solutions emerge to address global challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      {/* <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <ValueCard
              icon={<Users2 className="h-8 w-8" />}
              title="Collaboration"
              description="Working together to achieve extraordinary results"
            />
            <ValueCard
              icon={<Target className="h-8 w-8" />}
              title="Innovation"
              description="Pushing boundaries and embracing new ideas"
            />
            <ValueCard
              icon={<Heart className="h-8 w-8" />}
              title="Passion"
              description="Driven by enthusiasm and dedication"
            />
            <ValueCard
              icon={<Trophy className="h-8 w-8" />}
              title="Excellence"
              description="Striving for the highest standards"
            />
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <Badge className="mb-4">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Lab History */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary" />
            
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex relative mb-8 md:mb-12"
                style={{
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }}
              >
                <div 
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}
                  style={{
                    paddingLeft: index % 2 === 0 ? '0' : 'md:3rem',
                    paddingRight: index % 2 === 0 ? 'md:3rem' : '0',
                    textAlign: index % 2 === 0 ? 'left' : 'right'
                  }}
                >
                  <Card className="p-4 md:p-6">
                    <div className={`flex items-center gap-2 md:gap-4 mb-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      <Badge className="px-2 md:px-3 py-1 order-1 md:order-none">{item.year}</Badge>
                      {item.title === "Foundation" && <Building2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      {item.title === "IIC Quest" && <Laptop className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      {item.title === "IIC Quest 2.0" && <Laptop className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Relationship */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-2">A part of Itahari International College</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Innovation Lab is a part of the Itahari International College, a renowned
                  institution in the field of engineering and technology. We are proud to be
                  part of this prestigious institution, known for its excellence in engineering
                  and technology.
                </p>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Collaborative Environment</h3>
                      <p className="text-sm text-muted-foreground">
                        Our integration with IIC creates a dynamic ecosystem where academic
                        excellence meets practical innovation, fostering groundbreaking research
                        and development.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden"
            >
              <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
                <iframe 
                  src="https://player.vimeo.com/video/1055453708?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                  title="IIC"
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Microscope className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{facility.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="py-20 bg-muted/50"> */}
      <section className="py-20 bg-background">

        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 max-w-xl mx-auto">
                  <div className="flex items-start gap-4">
                    <Award className="h-24 w-24 text-primary mt-1" />
                    <div>
                      <Badge className="mb-2">{achievement.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <div className="aspect-video mb-4 rounded-lg">
                      <Video embedCode={achievement.video} />
              </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section> */}
    </div>
  )
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}
