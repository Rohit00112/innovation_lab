"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Video, Trophy, Users } from "lucide-react"

export default function LearnPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Learners Zone</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our educational resources and enhance your skills
          </p>
        </motion.div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="courses" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-4">
              <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Book className="mr-2 h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="workshops" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Users className="mr-2 h-4 w-4" />
                Workshops
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Video className="mr-2 h-4 w-4" />
                Tutorials
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Trophy className="mr-2 h-4 w-4" />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <TutorialCard key={index} tutorial={tutorial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certifications.map((certification, index) => (
                  <CertificationCard key={index} certification={certification} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{course.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
        <Button className="w-full mt-4">Continue Learning</Button>
      </div>
    </Card>
  )
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Card className="overflow-hidden">
      <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{workshop.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
        <p className="text-muted-foreground mb-4">{workshop.description}</p>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>{workshop.date}</span>
          <span>{workshop.duration}</span>
        </div>
        <Button className="w-full">Register Now</Button>
      </div>
    </Card>
  )
}

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Card className="overflow-hidden">
      <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{tutorial.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
        <p className="text-muted-foreground mb-4">{tutorial.description}</p>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>{tutorial.duration}</span>
          <span>{tutorial.level}</span>
        </div>
        <Button className="w-full">Watch Now</Button>
      </div>
    </Card>
  )
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="overflow-hidden">
      <img src={certification.image} alt={certification.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Badge className="mb-2">{certification.category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
        <p className="text-muted-foreground mb-4">{certification.description}</p>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>{certification.duration}</span>
          <span>{certification.level}</span>
        </div>
        <Button className="w-full">Start Certification</Button>
      </div>
    </Card>
  )
}

type Course = {
  title: string
  description: string
  category: string
  image: string
  progress: number
}

type Workshop = {
  title: string
  description: string
  category: string
  image: string
  date: string
  duration: string
}

type Tutorial = {
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
}

type Certification = {
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
}

const courses = [
  {
    title: "Introduction to Innovation",
    description: "Learn the fundamentals of innovation and creative thinking",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    progress: 75,
  },
  {
    title: "Design Thinking Basics",
    description: "Master the principles of design thinking methodology",
    category: "Design",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    progress: 45,
  },
  {
    title: "Emerging Technologies",
    description: "Explore the latest trends in technology and their applications",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    progress: 30,
  },
]

const workshops = [
  {
    title: "Prototyping Workshop",
    description: "Hands-on workshop on rapid prototyping techniques",
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "April 15, 2024",
    duration: "4 hours",
  },
  {
    title: "Innovation Strategy",
    description: "Develop effective innovation strategies for your organization",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "April 20, 2024",
    duration: "6 hours",
  },
  {
    title: "Digital Transformation",
    description: "Navigate the challenges of digital transformation",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "April 25, 2024",
    duration: "5 hours",
  },
]

const tutorials = [
  {
    title: "Design Sprint Guide",
    description: "Step-by-step guide to running effective design sprints",
    category: "Design",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "45 minutes",
    level: "Intermediate",
  },
  {
    title: "Problem Solving",
    description: "Advanced techniques for creative problem solving",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "30 minutes",
    level: "Beginner",
  },
  {
    title: "Future Trends",
    description: "Analysis of emerging trends and their impact",
    category: "Research",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "60 minutes",
    level: "Advanced",
  },
]

const certifications = [
  {
    title: "Innovation Leadership",
    description: "Comprehensive certification for innovation leaders",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "12 weeks",
    level: "Advanced",
  },
  {
    title: "Design Methods",
    description: "Professional certification in design methodologies",
    category: "Design",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    title: "Tech Innovation",
    description: "Certification in technological innovation",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    duration: "10 weeks",
    level: "Advanced",
  },
]