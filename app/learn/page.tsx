// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Book, Video, Trophy, Users } from "lucide-react"
// import { Certification, Course, LearnPageData, Tutorial, Workshop } from "@/types/learn"
// import learnData from "@/data/pages/learn.json"

// export default function LearnPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
//           <h1 className="text-5xl font-bold mb-4">Learners Zone</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Explore our educational resources and enhance your skills
//           </p>
//         </motion.div>
//       </section>

//       {/* Learning Paths */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="courses" className="space-y-8">
//             <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-4">
//               <TabsTrigger value="courses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Book className="mr-2 h-4 w-4" />
//                 Courses
//               </TabsTrigger>
//               <TabsTrigger value="workshops" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Users className="mr-2 h-4 w-4" />
//                 Workshops
//               </TabsTrigger>
//               <TabsTrigger value="tutorials" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Video className="mr-2 h-4 w-4" />
//                 Tutorials
//               </TabsTrigger>
//               <TabsTrigger value="certifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Trophy className="mr-2 h-4 w-4" />
//                 Certifications
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="courses" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {courses.map((course, index) => (
//                   <CourseCard key={index} course={course} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="workshops" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {workshops.map((workshop, index) => (
//                   <WorkshopCard key={index} workshop={workshop} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="tutorials" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {tutorials.map((tutorial, index) => (
//                   <TutorialCard key={index} tutorial={tutorial} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="certifications" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {certifications.map((certification, index) => (
//                   <CertificationCard key={index} certification={certification} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   )
// }

// function CourseCard({ course }: { course: Course }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{course.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//         <p className="text-muted-foreground mb-4">{course.description}</p>
//         <div className="space-y-2">
//           <div className="flex justify-between text-sm">
//             <span>Progress</span>
//             <span>{course.progress}%</span>
//           </div>
//           <Progress value={course.progress} className="h-2" />
//         </div>
//         <Button className="w-full mt-4">Continue Learning</Button>
//       </div>
//     </Card>
//   )
// }

// function WorkshopCard({ workshop }: { workshop: Workshop }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{workshop.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
//         <p className="text-muted-foreground mb-4">{workshop.description}</p>
//         <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
//           <span>{workshop.date}</span>
//           <span>{workshop.duration}</span>
//         </div>
//         <Button className="w-full">Register Now</Button>
//       </div>
//     </Card>
//   )
// }

// function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{tutorial.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
//         <p className="text-muted-foreground mb-4">{tutorial.description}</p>
//         <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
//           <span>{tutorial.duration}</span>
//           <span>{tutorial.level}</span>
//         </div>
//         <Button className="w-full">Watch Now</Button>
//       </div>
//     </Card>
//   )
// }

// function CertificationCard({ certification }: { certification: Certification }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={certification.image} alt={certification.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{certification.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
//         <p className="text-muted-foreground mb-4">{certification.description}</p>
//         <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
//           <span>{certification.duration}</span>
//           <span>{certification.level}</span>
//         </div>
//         <Button className="w-full">Start Certification</Button>
//       </div>
//     </Card>
//   )
// }

// const { courses, workshops, tutorials, certifications } = learnData as LearnPageData

export default function LearnPage() {
  return <UnderConstruction />
}