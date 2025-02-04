"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Download, Book, FileText, ArrowRight, Folder } from "lucide-react"

export default function ResourcesPage() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = category === "all" || resource.category === category
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Innovation Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access tools, templates, and documents to support your innovation journey
          </p>
        </motion.div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="templates">Templates</SelectItem>
                <SelectItem value="guides">Guides</SelectItem>
                <SelectItem value="tools">Tools</SelectItem>
                <SelectItem value="research">Research Papers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Folder className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {collection.description}
                      </p>
                      <Badge>{collection.itemCount} items</Badge>
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

function ResourceCard({
  resource,
  index,
}: {
  resource: typeof resources[0]
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
        <div className="flex items-start gap-4">
          {resource.category === "templates" && <FileText className="h-6 w-6 text-primary mt-1" />}
          {resource.category === "guides" && <Book className="h-6 w-6 text-primary mt-1" />}
          {resource.category === "tools" && <Download className="h-6 w-6 text-primary mt-1" />}
          {resource.category === "research" && <FileText className="h-6 w-6 text-primary mt-1" />}
          <div>
            <Badge className="mb-2">{resource.category}</Badge>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {resource.description}
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{resource.format}</Badge>
              <Button variant="link" className="p-0">
                Download <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

const resources = [
  {
    title: "Innovation Project Canvas",
    category: "templates",
    description: "A comprehensive template for planning and tracking innovation projects.",
    format: "PDF",
  },
  {
    title: "Design Thinking Toolkit",
    category: "tools",
    description: "Essential tools and methods for implementing design thinking in your projects.",
    format: "ZIP",
  },
  {
    title: "Research Methodology Guide",
    category: "guides",
    description: "Step-by-step guide to conducting effective research in innovation.",
    format: "PDF",
  },
  {
    title: "Project Management Templates",
    category: "templates",
    description: "Collection of templates for managing innovation projects effectively.",
    format: "DOCX",
  },
  {
    title: "Innovation Metrics Framework",
    category: "tools",
    description: "Tools for measuring and tracking innovation success metrics.",
    format: "XLSX",
  },
  {
    title: "Latest Research Papers",
    category: "research",
    description: "Recent publications and findings in innovation and technology.",
    format: "PDF",
  },
]

const collections = [
  {
    title: "Startup Toolkit",
    description: "Essential resources for launching and growing innovative startups.",
    itemCount: 12,
  },
  {
    title: "Research Resources",
    description: "Comprehensive collection of research tools and templates.",
    itemCount: 8,
  },
  {
    title: "Project Management",
    description: "Tools for effective project planning and execution.",
    itemCount: 15,
  },
  {
    title: "Innovation Methods",
    description: "Guides and templates for various innovation methodologies.",
    itemCount: 10,
  },
]