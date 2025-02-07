"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Share2 } from "lucide-react"
import { EventRegistration } from "./event-registration"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { EventDetails as EventDetailsProps } from "@/types/events"

export function EventDetails({ event }: { event: EventDetailsProps }) {
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge>{event.category}</Badge>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{event.capacity} attendees</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
              <p>{event.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Event Agenda</h2>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="font-medium text-sm text-muted-foreground">
                      {item.time}
                    </div>
                    <div className="font-semibold mt-1">{item.title}</div>
                    <div className="text-sm mt-2">{item.description}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{speaker.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {speaker.role}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="p-6 sticky top-24">
            <h3 className="text-2xl font-semibold mb-6">Register for Event</h3>
            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
              <DialogTrigger asChild>
                <Button className="w-full">Register Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Register for {event.title}</DialogTitle>
                  <DialogDescription>
                    Please fill out the registration form below to secure your spot.
                  </DialogDescription>
                </DialogHeader>
                <EventRegistration
                  eventId={event.id}
                  eventTitle={event.title}
                  onSuccess={() => setIsRegistrationOpen(false)}
                />
              </DialogContent>
            </Dialog>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>* Registration closes 24 hours before the event</p>
              <p>* Limited seats available</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}