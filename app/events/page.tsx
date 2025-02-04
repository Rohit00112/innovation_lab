"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react"
import { EventRegistration } from "./components/event-registration"
import Link from "next/link"

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Events & Workshops</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join us for exciting events, workshops, and learning opportunities
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/join">Become a Member</Link>
          </Button>
        </motion.div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">
            <div>
              <Card className="p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md w-full"
                />
              </Card>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Upcoming Events</h2>
              <div className="space-y-4 md:space-y-6">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workshop */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Featured Workshop
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt="Workshop"
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="p-8">
                  <Badge className="mb-4">Workshop</Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Design Thinking Masterclass
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join our intensive workshop on design thinking methodologies
                    and their practical applications in solving complex problems.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>Innovation Lab, Main Campus</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      <span>Limited to 30 participants</span>
                    </div>
                  </div>
                  <Button size="lg" onClick={() => {
                    const dialog = document.createElement('dialog');
                    dialog.setAttribute('open', '');
                    dialog.innerHTML = `
                      <div class="fixed inset-0 z-50 flex items-center justify-center">
                        <div class="bg-background p-6 rounded-lg shadow-lg max-w-md w-full">
                          <h2 class="text-xl font-semibold mb-4">Register for Design Thinking Masterclass</h2>
                          <EventRegistration
                            eventId="design-thinking-masterclass"
                            eventTitle="Design Thinking Masterclass"
                            onSuccess={() => dialog.remove()}
                          />
                        </div>
                      </div>
                    `;
                    document.body.appendChild(dialog);
                  }}>Register Now</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({
  event,
  index,
}: {
  event: typeof events[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-48 flex-shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
          <div className="flex-grow">
            <Badge className="mb-2">{event.type}</Badge>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {event.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Register</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register for {event.title}</DialogTitle>
                  <DialogDescription>
                    Complete the registration form to secure your spot.
                  </DialogDescription>
                </DialogHeader>
                <EventRegistration
                  eventId={event.title.toLowerCase().replace(/ /g, '-')}
                  eventTitle={event.title}
                  onSuccess={() => {
                    const dialog = document.querySelector('[role="dialog"]');
                    if (dialog) {
                      const closeButton = dialog.querySelector('button[aria-label="Close"]');
                      if (closeButton instanceof HTMLElement) closeButton.click();
                    }
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

const events = [
  {
    title: "AI in Healthcare Symposium",
    type: "Conference",
    description: "Explore the latest applications of AI in healthcare with leading experts.",
    date: "March 10, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Startup Pitch Day",
    type: "Competition",
    description: "Watch innovative startups pitch their ideas to industry experts.",
    date: "March 12, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Web3 Workshop",
    type: "Workshop",
    description: "Hands-on workshop on blockchain and decentralized applications.",
    date: "March 18, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Lab",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Research Showcase",
    type: "Exhibition",
    description: "Annual exhibition of groundbreaking research projects.",
    date: "March 25, 2024",
    time: "11:00 AM - 7:00 PM",
    location: "Exhibition Hall",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
]