// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { ArrowRight, Search } from "lucide-react"
// import { ProjectsPageData } from "@/types/projects"
// import projectsData from "@/data/pages/projects.json"

// export default function ProjectsPage() {
//   const [category, setCategory] = useState("all")
//   const [searchQuery, setSearchQuery] = useState("")

//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory = category === "all" || project.category === category
//     const matchesSearch = project.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
//           <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Explore innovative solutions and groundbreaking research from our community
//           </p>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-12 md:py-20 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           {/* Filters */}
//           <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search projects..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 w-full"
//                 />
//               </div>
//             </div>
//             <Select value={category} onValueChange={setCategory}>
//               <SelectTrigger className="w-full md:w-[200px]">
//                 <SelectValue placeholder="Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 <SelectItem value="Technology">Technology</SelectItem>
//                 <SelectItem value="Research">Research</SelectItem>
//                 <SelectItem value="Innovation">Innovation</SelectItem>
//                 <SelectItem value="Sustainability">Sustainability</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//             {filteredProjects.map((project, index) => (
//               <ProjectCard key={index} project={project} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Project */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Featured Project
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
//                 alt="Featured Project"
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Badge className="mb-4">Innovation</Badge>
//               <h3 className="text-3xl font-bold mb-4">
//                 AI-Powered Sustainable Energy Management
//               </h3>
//               <p className="text-lg text-muted-foreground mb-6">
//                 Our flagship project combines artificial intelligence with renewable
//                 energy systems to optimize power distribution and reduce carbon
//                 footprint in urban environments.
//               </p>
//               <Button size="lg">
//                 Learn More <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ProjectCard({
//   project,
//   index,
// }: {
//   project: typeof projects[0]
//   index: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <Card className="overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-6">
//           <Badge className="mb-2">{project.category}</Badge>
//           <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//           <p className="text-sm text-muted-foreground mb-4">
//             {project.description}
//           </p>
//           <div className="flex items-center justify-between">
//             <div className="flex -space-x-2">
//               {project.team.map((member, i) => (
//                 <img
//                   key={i}
//                   src={member.avatar}
//                   alt={member.name}
//                   title={member.name}
//                   className="w-8 h-8 rounded-full border-2 border-background"
//                 />
//               ))}
//             </div>
//             <Button variant="link" className="p-0">
//               View Project <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }

// const { projects } = projectsData as ProjectsPageData


export default function ProjectsPage() {
  return <UnderConstruction />
}