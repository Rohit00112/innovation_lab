// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react"
// import { EventRegistration } from "./components/event-registration"
// import Link from "next/link"
// import eventsData from "@/data/pages/events.json"

// export default function EventsPage() {
//   const [date, setDate] = useState<Date | undefined>(new Date())
//   const [activeTab, setActiveTab] = useState("upcoming")

//   const filteredEvents = events.filter(event => {
//     const eventDate = new Date(event.date)
//     const today = new Date()
    
//     // If a date is selected, only show events on that date
//     if (date) {
//       const selectedDate = new Date(date)
//       if (eventDate.getFullYear() !== selectedDate.getFullYear() ||
//           eventDate.getMonth() !== selectedDate.getMonth() ||
//           eventDate.getDate() !== selectedDate.getDate()) {
//         return false
//       }
//     }
    
//     // Apply upcoming/past filter
//     return activeTab === "upcoming"
//       ? eventDate >= today
//       : eventDate < today
//   })

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-4"
//         >
//           <h1 className="text-5xl font-bold mb-4">Events & Workshops</h1>
//           <p className="text-xl max-w-3xl mx-auto mb-8">
//             Join us for exciting events, workshops, and learning opportunities
//           </p>
//           <Button size="lg" variant="secondary" asChild>
//             <Link href="/join">Become a Member</Link>
//           </Button>
//         </motion.div>
//       </section>

//       {/* Events Calendar Section */}
//       <section className="py-12 md:py-20 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">
//             <div>
//               <Card className="p-4">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   className="rounded-md w-full"
//                 />
//               </Card>
//             </div>
//             <div>
//               <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//                 <TabsList className="grid w-full grid-cols-2 mb-8">
//                   <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#21409A] data-[state=active]:text-white">Upcoming Events</TabsTrigger>
//                   <TabsTrigger value="past" className="data-[state=active]:bg-[#21409A] data-[state=active]:text-white">Past Events</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="upcoming" className="space-y-4 md:space-y-6">
//                   {filteredEvents.map((event, index) => (
//                     <EventCard key={index} event={event} index={index} />
//                   ))}
//                   {filteredEvents.length === 0 && (
//                     <p className="text-center text-muted-foreground">No upcoming events scheduled</p>
//                   )}
//                 </TabsContent>
//                 <TabsContent value="past" className="space-y-4 md:space-y-6">
//                   {filteredEvents.map((event, index) => (
//                     <EventCard key={index} event={event} index={index} />
//                   ))}
//                   {filteredEvents.length === 0 && (
//                     <p className="text-center text-muted-foreground">No past events to display</p>
//                   )}
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Workshop */}
//       <section className="py-12 md:py-20 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
//             Featured Workshop
//           </h2>
//           <div className="max-w-4xl mx-auto">
//             <Card className="overflow-hidden">
//               <div className="grid grid-cols-1 md:grid-cols-2">
//                 <img
//                   src={eventsData.featuredWorkshop.image}
//                   alt={eventsData.featuredWorkshop.title}
//                   className="w-full h-48 md:h-full object-cover"
//                 />
//                 <div className="p-8">
//                   <Badge className="mb-4">{eventsData.featuredWorkshop.category}</Badge>
//                   <h3 className="text-2xl font-bold mb-4">
//                     {eventsData.featuredWorkshop.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-6">
//                     {eventsData.featuredWorkshop.description}
//                   </p>
//                   <div className="space-y-4 mb-6">
//                     <div className="flex items-center">
//                       <CalendarIcon className="h-5 w-5 mr-2" />
//                       <span>{eventsData.featuredWorkshop.date}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-5 w-5 mr-2" />
//                       <span>{eventsData.featuredWorkshop.time}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <MapPin className="h-5 w-5 mr-2" />
//                       <span>{eventsData.featuredWorkshop.location}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Users className="h-5 w-5 mr-2" />
//                       <span>Limited to {eventsData.featuredWorkshop.capacity} participants</span>
//                     </div>
//                   </div>
//                   <Button size="lg" onClick={() => {
//                     const dialog = document.createElement('dialog');
//                     dialog.setAttribute('open', '');
//                     dialog.innerHTML = `
//                       <div class="fixed inset-0 z-50 flex items-center justify-center">
//                         <div class="bg-background p-6 rounded-lg shadow-lg max-w-md w-full">
//                           <h2 class="text-xl font-semibold mb-4">Register for Design Thinking Masterclass</h2>
//                           <EventRegistration
//                             eventId="design-thinking-masterclass"
//                             eventTitle="Design Thinking Masterclass"
//                             onSuccess={() => dialog.remove()}
//                           />
//                         </div>
//                       </div>
//                     `;
//                     document.body.appendChild(dialog);
//                   }}>Register Now</Button>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function EventCard({
//   event,
//   index,
// }: {
//   event: typeof events[0]
//   index: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <Card className="p-6">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-48 flex-shrink-0">
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-32 object-cover rounded-md"
//             />
//           </div>
//           <div className="flex-grow">
//             <Badge className="mb-2">{event.type}</Badge>
//             <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//             <p className="text-sm text-muted-foreground mb-4">
//               {event.description}
//             </p>
//             <div className="flex flex-wrap gap-4 text-sm">
//               <div className="flex items-center">
//                 <CalendarIcon className="h-4 w-4 mr-2" />
//                 <span>{event.date}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="h-4 w-4 mr-2" />
//                 <span>{event.time}</span>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="h-4 w-4 mr-2" />
//                 <span>{event.location}</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex-shrink-0">
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button>{new Date(event.date) >= new Date() ? "Register" : "View Details"}</Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>{new Date(event.date) >= new Date() ? `Register for ${event.title}` : `${event.title} Details`}</DialogTitle>
//                   <DialogDescription>
//                     {new Date(event.date) >= new Date() 
//                       ? "Complete the registration form to secure your spot."
//                       : "View the details and outcomes of this past event."}
//                   </DialogDescription>
//                 </DialogHeader>
//                 {new Date(event.date) >= new Date() ? (
//                   <EventRegistration
//                     eventId={event.title.toLowerCase().replace(/ /g, '-')}
//                     eventTitle={event.title}
//                     onSuccess={() => {
//                       const dialog = document.querySelector('[role="dialog"]');
//                       if (dialog) {
//                         const closeButton = dialog.querySelector('button[aria-label="Close"]');
//                         if (closeButton instanceof HTMLElement) closeButton.click();
//                       }
//                     }}
//                   />
//                 ) : (
//                   <div className="space-y-4 py-4">
//                     <div className="space-y-2">
//                       <h4 className="font-medium">Event Description</h4>
//                       <p className="text-sm text-muted-foreground">{event.description}</p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <h4 className="font-medium">Date & Time</h4>
//                         <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
//                       </div>
//                       <div className="space-y-2">
//                         <h4 className="font-medium">Location</h4>
//                         <p className="text-sm text-muted-foreground">{event.location}</p>
//                       </div>
//                     </div>
//                     {event.outcomes && (
//                       <div className="space-y-2">
//                         <h4 className="font-medium">Event Outcomes</h4>
//                         <p className="text-sm text-muted-foreground">{event.outcomes}</p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }

// const events = eventsData.upcomingEvents

export default function EventsPage() {
  return <UnderConstruction />
}