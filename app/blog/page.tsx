"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Search, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = category === "all" || post.category === category
    const matchesSearch = post.title
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
            backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
          <h1 className="text-5xl font-bold mb-4">Innovation Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, discoveries, and stories from our innovation community
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
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
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Innovation">Innovation</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
                <SelectItem value="Community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Link href="/blog/the-future-of-quantum-computing">
            <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt="Featured Post"
                  className="h-full object-cover"
                />
                <div className="p-8">
                  <Badge className="mb-4">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    The Future of Quantum Computing
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Exploring the revolutionary potential of quantum computing and
                    its implications for solving complex problems.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>March 1, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>Dr. Sarah Chen</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary hover:text-primary/80">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
            </Link>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogPostCard({
  post,
  index,
}: {
  post: typeof blogPosts[0]
  index: number
}) {
  const slug = post.title.toLowerCase().replace(/\s+/g, '-');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <Badge className="mb-2">{post.category}</Badge>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
            <div className="flex items-center text-primary hover:text-primary/80">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

const blogPosts = [
  {
    title: "Breakthrough in AI Research",
    category: "Technology",
    excerpt: "Our team has made significant progress in developing more efficient machine learning algorithms.",
    date: "February 28, 2024",
    author: "Dr. Michael Wong",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Innovation in Healthcare",
    category: "Innovation",
    excerpt: "How technology is transforming patient care and medical research.",
    date: "February 25, 2024",
    author: "Dr. Emma Davis",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Sustainable Energy Solutions",
    category: "Research",
    excerpt: "Latest developments in renewable energy technology and implementation.",
    date: "February 22, 2024",
    author: "Prof. James Wilson",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Community Impact Report",
    category: "Community",
    excerpt: "How our initiatives are making a difference in the local community.",
    date: "February 20, 2024",
    author: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Future of Work",
    category: "Innovation",
    excerpt: "Exploring how technology is reshaping the workplace and career development.",
    date: "February 18, 2024",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
  {
    title: "Student Success Stories",
    category: "Community",
    excerpt: "Highlighting achievements of our student researchers and innovators.",
    date: "February 15, 2024",
    author: "Lisa Park",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  },
]