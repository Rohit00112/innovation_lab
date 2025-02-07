"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { ProgramsPageData } from "@/types/programs"
import programsData from "@/data/pages/programs.json"

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover opportunities to learn, innovate, and grow with our diverse range of programs
          </p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12 gap-2 md:gap-4">
              <TabsTrigger value="all" className="text-sm md:text-base">All Programs</TabsTrigger>
              <TabsTrigger value="research" className="text-sm md:text-base">Research</TabsTrigger>
              <TabsTrigger value="innovation" className="text-sm md:text-base">Innovation</TabsTrigger>
              <TabsTrigger value="education" className="text-sm md:text-base">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {programs.map((program, index) => (
                  <ProgramCard key={index} program={program} index={index} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs
                  .filter((p) => p.category === "Research")
                  .map((program, index) => (
                    <ProgramCard key={index} program={program} index={index} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="innovation">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs
                  .filter((p) => p.category === "Innovation")
                  .map((program, index) => (
                    <ProgramCard key={index} program={program} index={index} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs
                  .filter((p) => p.category === "Education")
                  .map((program, index) => (
                    <ProgramCard key={index} program={program} index={index} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Application Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProgramCard({
  program,
  index,
}: {
  program: typeof programs[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <Badge className="mb-2">{program.category}</Badge>
          <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
          <div className="space-y-2">
            <div className="text-sm">
              <strong>Duration:</strong> {program.duration}
            </div>
            <div className="text-sm">
              <strong>Format:</strong> {program.format}
            </div>
          </div>
          <Button className="mt-4" asChild>
            <a href={`/programs/${program.title.toLowerCase().replace(/ /g, '-')}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

const { programs, applicationSteps } = programsData as ProgramsPageData