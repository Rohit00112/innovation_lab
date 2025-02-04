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

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our story, mission, and the people behind Innovation Lab
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-background">
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
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-muted/50">
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
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
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
      </section>

      {/* Lab History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} relative mb-12`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4 justify-start">
                      {item.title === "Foundation" && <Building2 className="h-6 w-6 text-primary" />}
                      {item.title === "First Major Project" && <Target className="h-6 w-6 text-primary" />}
                      {item.title === "Expansion" && <ArrowUpRight className="h-6 w-6 text-primary" />}
                      {item.title === "International Recognition" && <Award className="h-6 w-6 text-primary" />}
                      {item.title === "Community Impact" && <Users2 className="h-6 w-6 text-primary" />}
                      {item.title === "Digital Transformation" && <Laptop className="h-6 w-6 text-primary" />}
                      <Badge className="px-3 py-1">{item.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
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
              <h2 className="text-4xl font-bold mb-6">Our Partnership with IIC</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  The Innovation Lab is proud to be an integral part of Itahari International
                  College (IIC). This strategic partnership enhances our ability to provide
                  cutting-edge resources and opportunities to students and researchers.
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
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="College Campus"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
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
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
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
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <Badge className="mb-2">{achievement.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
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
      <section className="py-20 bg-background">
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
      </section>
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

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Director",
    bio: "With over 15 years of experience in innovation and research, Dr. Chen leads our strategic initiatives.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Research",
    bio: "Michael brings extensive expertise in emerging technologies and research methodologies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Innovation Lead",
    bio: "Emily specializes in fostering creativity and driving innovative solutions across projects.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
]

const history = [
  {
    year: "2018",
    title: "Foundation",
    description: "Establishment of Innovation Lab with a vision to foster technological advancement and research excellence."
  },
  {
    year: "2019",
    title: "First Major Project",
    description: "Successfully completed our first collaborative research project with industry partners."
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Expanded our facilities to include state-of-the-art research labs and innovation spaces."
  },
  {
    year: "2021",
    title: "International Recognition",
    description: "Received international accreditation for our research programs and facilities."
  },
  {
    year: "2022",
    title: "Community Impact",
    description: "Launched successful community outreach programs and educational initiatives."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented cutting-edge digital infrastructure and virtual collaboration tools."
  }
]

const facilities = [
  {
    name: "Research Labs",
    description: "State-of-the-art laboratories equipped with the latest technology for conducting advanced research.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    name: "Innovation Hub",
    description: "A collaborative space designed for brainstorming, prototyping, and developing innovative solutions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    name: "Digital Studio",
    description: "Advanced digital equipment and software for multimedia content creation and virtual reality development.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  }
]

const achievements = [
  {
    year: "2023",
    title: "Innovation Excellence Award",
    description: "Recognized for outstanding contributions to technological innovation and research."
  },
  {
    year: "2023",
    title: "Best Research Paper",
    description: "Our team's research on sustainable technology was published in a leading international journal."
  },
  {
    year: "2022",
    title: "Community Impact Award",
    description: "Honored for successful implementation of community-focused technology solutions."
  },
  {
    year: "2022",
    title: "Industry Partnership Excellence",
    description: "Established successful collaborations with leading technology companies."
  },
  {
    year: "2021",
    title: "Educational Innovation Award",
    description: "Recognized for innovative approaches in technology education and training."
  },
  {
    year: "2021",
    title: "Sustainability Initiative",
    description: "Launched successful green technology research programs and sustainable practices."
  }
]

const faqs = [
  {
    question: "What is Innovation Lab?",
    answer: "Innovation Lab is a collaborative research and development space where students, faculty, and industry partners come together to work on cutting-edge projects and innovative solutions.",
  },
  {
    question: "How can I get involved?",
    answer: "There are multiple ways to get involved: join our research programs, attend workshops and events, apply for internships, or collaborate on projects. Check our Programs page for more details.",
  },
  {
    question: "Do you offer mentorship programs?",
    answer: "Yes, we offer various mentorship programs connecting students and early-career professionals with experienced industry experts and researchers.",
  },
  {
    question: "What facilities are available?",
    answer: "Our facilities include state-of-the-art research labs, prototyping workshops, collaboration spaces, and advanced computing resources.",
  },
]