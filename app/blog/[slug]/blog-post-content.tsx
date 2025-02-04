"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Share2, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import CommentSection from "./comment-section"

interface BlogPost {
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  image: string
}

const relatedPosts: BlogPost[] = [
  {
    title: "The Future of AI in Research",
    category: "Technology",
    excerpt: "Exploring how artificial intelligence is transforming research methodologies.",
    date: "2024-01-20",
    author: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    title: "Sustainable Innovation Practices",
    category: "Innovation",
    excerpt: "Best practices for implementing sustainable innovation in organizations.",
    date: "2024-01-18",
    author: "Michael Wong",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    title: "Collaborative Research Methods",
    category: "Research",
    excerpt: "How collaboration is changing the landscape of modern research.",
    date: "2024-01-15",
    author: "Emma Davis",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  }
]

export default function BlogPostContent({ post }: { post: BlogPost }) {

  const handleComment = async () => {
    // TODO: Implement comment submission
  }

  const handleShare = async () => {
    // TODO: Implement social sharing
  }

  const handleLike = async () => {
    // TODO: Implement like functionality
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/author.jpg" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
          {/* Article content will be rendered here */}
        </div>

        {/* Engagement Section */}
        <div className="flex items-center gap-6 mb-12">
          <Button variant="outline" onClick={handleLike}>
            <Heart className="h-4 w-4 mr-2" />
            <span>123 Likes</span>
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            <span>Share</span>
          </Button>
        </div>

        <Separator className="mb-12" />

        {/* Author Profile */}
        <Card className="p-6 mb-12">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatars/author.jpg" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
              <p className="text-muted-foreground mb-4">
                Expert in {post.category} with extensive experience in research and innovation.
              </p>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </div>
          </div>
        </Card>

        {/* Comments Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <CommentSection postId={post.title.toLowerCase().replace(/\s+/g, '-')} />
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts
              .filter(relatedPost => 
                relatedPost.title !== post.title && 
                relatedPost.category === post.category
              )
              .map((relatedPost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatars/author.jpg" />
                            <AvatarFallback>{relatedPost.author[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{relatedPost.author}</span>
                        </div>
                        <Button variant="link" className="p-0">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}