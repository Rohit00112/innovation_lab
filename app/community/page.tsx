"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users2, Calendar, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Community Hub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect, collaborate, and grow with fellow innovators
          </p>
        </motion.div>
      </section>

      {/* Community Features */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="discussions" className="space-y-6 md:space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 md:gap-4">
              <TabsTrigger value="discussions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
                <MessageSquare className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="groups" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
                <Users2 className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Groups
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
                <Calendar className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
                <Award className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {discussions.map((discussion, index) => (
                  <DiscussionCard key={index} discussion={discussion} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="groups" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {groups.map((group, index) => (
                  <GroupCard key={index} group={group} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {communityEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <AchievementCard key={index} achievement={achievement} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function DiscussionCard({ discussion }: { discussion: Discussion }) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <img
          src={discussion.authorAvatar}
          alt={discussion.author}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{discussion.title}</h3>
            <Badge>{discussion.category}</Badge>
          </div>
          <p className="text-muted-foreground mb-4">{discussion.preview}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{discussion.author}</span>
            <span>{discussion.date}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

function GroupCard({ group }: { group: Group }) {
  return (
    <Card className="overflow-hidden">
      <img src={group.image} alt={group.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{group.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
        <p className="text-muted-foreground mb-4">{group.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">{group.members} members</span>
          <Badge variant="secondary">{group.status}</Badge>
        </div>
        <Button className="w-full">Join Group</Button>
      </div>
    </Card>
  )
}

function EventCard({ event }: { event: CommunityEvent }) {
  return (
    <Card className="overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{event.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>
        <Button className="w-full">RSVP</Button>
      </div>
    </Card>
  )
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <Card className="p-6 text-center">
      <div className="mb-4">
        <img src={achievement.icon} alt={achievement.title} className="w-16 h-16 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
      <p className="text-muted-foreground mb-4">{achievement.description}</p>
      <Badge variant="secondary">{achievement.points} points</Badge>
    </Card>
  )
}

type Discussion = {
  title: string
  author: string
  authorAvatar: string
  category: string
  preview: string
  date: string
}

type Group = {
  name: string
  description: string
  category: string
  image: string
  members: number
  status: string
}

type CommunityEvent = {
  title: string
  description: string
  category: string
  image: string
  date: string
  location: string
}

type Achievement = {
  title: string
  description: string
  icon: string
  points: number
}

const discussions = [
  {
    title: "Future of AI in Innovation",
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    category: "Technology",
    preview: "Let's discuss how AI is shaping the future of innovation and its implications...",
    date: "2 hours ago",
  },
  {
    title: "Sustainable Design Practices",
    author: "Michael Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    category: "Design",
    preview: "Sharing best practices for incorporating sustainability in design process...",
    date: "1 day ago",
  },
  {
    title: "Innovation in Healthcare",
    author: "Emily Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    category: "Healthcare",
    preview: "Exploring innovative solutions in healthcare technology and services...",
    date: "2 days ago",
  },
]

const groups = [
  {
    name: "AI Innovators",
    description: "A group for AI enthusiasts and innovators",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    members: 1250,
    status: "Active",
  },
  {
    name: "Design Thinkers",
    description: "Collaborative group for design thinking practitioners",
    category: "Design",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    members: 850,
    status: "Active",
  },
  {
    name: "Green Innovation",
    description: "Focus on sustainable innovation and practices",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    members: 650,
    status: "Active",
  },
]

const communityEvents = [
  {
    title: "Innovation Summit 2024",
    description: "Annual gathering of innovators and thought leaders",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "June 15-16, 2024",
    location: "Innovation Center",
  },
  {
    title: "Design Thinking Workshop",
    description: "Hands-on workshop on design thinking methodology",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "April 25, 2024",
    location: "Workshop Room A",
  },
  {
    title: "Tech Meetup",
    description: "Monthly meetup for tech enthusiasts",
    category: "Meetup",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Monthly",
    location: "Tech Hub",
  },
]

const achievements = [
  {
    title: "Innovation Champion",
    description: "Contributed 10 innovative solutions",
    icon: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    points: 1000,
  },
  {
    title: "Community Leader",
    description: "Led 5 successful community projects",
    icon: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    points: 750,
  },
  {
    title: "Rising Star",
    description: "Rapidly growing contribution to the community",
    icon: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    points: 500,
  },
]