"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Share2, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import CommentSection from "./comment-section"
import Link from "next/link"

interface BlogPost {
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  image: string
}

import blogData from "@/data/pages/blog.json"

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const relatedPosts = blogData.blogPosts
    .filter((p) => p.category === post.category && p.title !== post.title)
    .slice(0, 3)

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
            </div>
          </div>
        </Card>

        {/* Related Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                href={`/blog/${relatedPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-transform group-hover:scale-[1.02]">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="mb-2">{relatedPost.category}</Badge>
                    <h3 className="font-semibold mb-2 group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Comments Section */}
        <CommentSection postId={""} />
      </div>
    </div>
  )
}