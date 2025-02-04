"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight, Users, Trophy, Lightbulb, Calendar, Star, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')",
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
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            Welcome to Innovation Lab
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Where ideas transform into reality through collaboration, research, and innovation
          </p>
          <Button size="lg" className="animate-bounce" asChild>
            <Link href="/join">
              Join Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCard
              icon={<Users className="h-8 w-8" />}
              number="5000+"
              label="Active Members"
            />
            <StatsCard
              icon={<Trophy className="h-8 w-8" />}
              number="200+"
              label="Awards Won"
            />
            <StatsCard
              icon={<Lightbulb className="h-8 w-8" />}
              number="1000+"
              label="Projects Completed"
            />
            <StatsCard
              icon={<Calendar className="h-8 w-8" />}
              number="150+"
              label="Annual Events"
            />
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {programs.map((program, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2">{program.title}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {program.category}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {program.description}
                      </p>
                      <Button variant="link" className="mt-4 p-0">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge className="mb-2">{item.category}</Badge>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 text-center">
                    <div className="mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <p className="text-lg italic mb-6">{testimonial.quote}</p>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="mb-2">{event.category}</Badge>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function StatsCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  const [count, setCount] = useState(0)
  const targetNumber = parseInt(number.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easedProgress = 1 - Math.pow(1 - progress, 3) // Cubic easing
      const currentCount = Math.round(easedProgress * targetNumber)

      setCount(currentCount)

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [targetNumber])

  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <div className="text-3xl font-bold mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  )
}

const programs = [
  {
    title: "Research Innovation",
    category: "Research",
    description: "Collaborate on cutting-edge research projects with industry experts.",
  },
  {
    title: "Startup Accelerator",
    category: "Entrepreneurship",
    description: "Transform your ideas into successful businesses with our mentorship program.",
  },
  {
    title: "Tech Workshops",
    category: "Education",
    description: "Learn the latest technologies through hands-on workshops.",
  },
  {
    title: "Design Thinking",
    category: "Innovation",
    description: "Master the art of problem-solving through design thinking.",
  },
]

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Research Fellow",
    quote: "The Innovation Lab has been instrumental in bringing my research ideas to life. The collaborative environment and state-of-the-art facilities are unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    quote: "The mentorship and resources provided by the Innovation Lab were crucial in helping me launch my successful tech startup.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Student Innovator",
    quote: "Being part of the Innovation Lab community has opened up countless opportunities and helped me grow both personally and professionally.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
]

const upcomingEvents = [
  {
    title: "AI Innovation Summit",
    category: "Conference",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Startup Pitch Day",
    category: "Competition",
    date: "March 20, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Design Thinking Workshop",
    category: "Workshop",
    date: "March 25, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Workshop Room 2",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
]

const news = [
  {
    title: "Innovation Lab Wins Excellence Award",
    category: "Awards",
    excerpt: "Our commitment to innovation and research has been recognized with the prestigious Excellence in Innovation Award.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "New Research Partnership Announced",
    category: "Partnerships",
    excerpt: "We're excited to announce our new partnership with leading tech companies to advance AI research.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Student Project Receives Global Recognition",
    category: "Success Stories",
    excerpt: "Our student team's innovative solution for sustainable energy has gained international attention.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
]