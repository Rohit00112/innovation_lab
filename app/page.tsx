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
import { ArrowRight, Users, Trophy, Lightbulb, Calendar, Star, Clock, MapPin, X } from "lucide-react"
import Link from "next/link"
import homeData from "@/data/pages/home.json"
import { Video } from "@/components/ui/video"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showEventModal, setShowEventModal] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Show modal on mount
    setShowEventModal(true)
  }, [])

  if (!mounted) return null

  const nextEvent = upcomingEvents[0] // Assuming the first event is the next one

  return (
    <div>
      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-2xl bg-background rounded-lg shadow-lg p-6 m-4">
            <button
              onClick={() => setShowEventModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Next Upcoming Event</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={nextEvent.image}
                  alt={nextEvent.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div>
                <Badge className="mb-2">{nextEvent.category}</Badge>
                <h3 className="text-xl font-semibold mb-4">{nextEvent.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{nextEvent.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{nextEvent.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{nextEvent.location}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 mt-6">
                  <Button asChild>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3O_Jd52RcOogmRqDzEuOWNJbThEM3QY7qt69RRRYlY2tB-w/viewform?usp=header" target="_blank">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="HandBook.pdf" target="_blank">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the page content */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('Hero.jpg')",
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
          <h1 className="text-4xl md:text-7xl font-bold mb-3 md:mb-2">
          Welcome to Innovation Lab
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Where ideas transform into reality through collaboration, research, and innovation
          </p>
          <Button size="lg" className="animate-bounce" asChild>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf3O_Jd52RcOogmRqDzEuOWNJbThEM3QY7qt69RRRYlY2tB-w/viewform?usp=header">
              Register Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-background">
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
      </section> */}



      {/* Featured Programs */}
      {/* <section className="py-20 bg-muted/50">
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
      </section> */}

{/* <section className="py-20 bg-muted/50"> */}
<section className="py-20 bg-background">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
          <Carousel className="max-w-8xl mx-auto">
            <CarouselContent>
              <CarouselItem className="basis-full">
                <div className="p-1">
                  <Card className="p-4 mx-auto shadow-lg">
                    <h3 className="font-semibold mb-2">{programs[0].title}</h3>
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden shadow-md">
                      <Video embedCode={programs[0].video} />
                    </div>
                    <Badge variant="secondary" className="mb-2 shadow-sm">
                      {programs[0].category}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {programs[0].description}
                    </p>
                    <Button variant="link" className="mt-4 p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest News */}
      {/* <section className="py-20 bg-background">
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
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 text-center shadow-lg">
                    <div className="mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                      />
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <p className="text-lg italic mb-6">{testimonial.quote}</p>
                    <div className="flex justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 drop-shadow ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
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
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-96"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-61 object-cover shadow-md"
                  />
                  <div className="p-6">
                    <Badge className="mb-2 shadow-sm">{event.category}</Badge>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 drop-shadow" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 drop-shadow" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 drop-shadow" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                    {event.link && (
                      <Button className="w-full sm:w-auto" asChild>
                        <Link 
                          href={event.link}
                          target="_blank"
                        >
                          Register Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    <Link 
                      href="HandBook.pdf"
                      target="_blank"
                      className="inline-flex items-center justify-center sm:justify-start text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </div>
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

const { programs, testimonials, upcomingEvents, news } = homeData