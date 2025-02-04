"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Reply } from "lucide-react"

interface Comment {
  id: string
  content: string
  author: string
  date: string
  likes: number
  replies?: Comment[]
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([{
    id: '1',
    content: 'Great article! Really enjoyed reading this.',
    author: 'John Doe',
    date: '2024-01-15',
    likes: 5,
    replies: [{
      id: '2',
      content: 'Thanks for your feedback!',
      author: 'Jane Smith',
      date: '2024-01-16',
      likes: 2
    }]
  }, {
    id: '3',
    content: 'Very informative content. Looking forward to more!',
    author: 'Alice Johnson',
    date: '2024-01-17',
    likes: 3
  }])
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [likedComments, setLikedComments] = useState<{[key: string]: boolean}>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`likes-${postId}`)
      return saved ? JSON.parse(saved) : {}
    }
    return {}
  })

  const handleLike = (commentId: string) => {
    const newLikedComments = { ...likedComments }
    const isLiked = newLikedComments[commentId]

    if (isLiked) {
      delete newLikedComments[commentId]
    } else {
      newLikedComments[commentId] = true
    }

    setLikedComments(newLikedComments)
    localStorage.setItem(`likes-${postId}`, JSON.stringify(newLikedComments))

    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: isLiked ? comment.likes - 1 : comment.likes + 1 }
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId 
              ? { ...reply, likes: isLiked ? reply.likes - 1 : reply.likes + 1 }
              : reply
          ),
        }
      }
      return comment
    }))
  }

  const handleComment = async () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      content: newComment,
      author: "Current User", // TODO: Replace with actual user
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleReply = async (parentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Date.now().toString(),
      content: replyContent,
      author: "Current User", // TODO: Replace with actual user
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    }

    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply],
        }
      }
      return comment
    }))

    setReplyTo(null)
    setReplyContent("")
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleComment}>
          <MessageSquare className="h-4 w-4 mr-2" />
          Post Comment
        </Button>
      </Card>

      {comments.map((comment) => (
        <motion.div
          key={comment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatars/user.jpg" />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-sm mb-4">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <Button
                    variant={likedComments[comment.id] ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {comment.likes} Likes
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyTo(comment.id)}
                  >
                    <Reply className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                </div>

                {replyTo === comment.id && (
                  <div className="mt-4">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="mb-2"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleReply(comment.id)}
                      >
                        Post Reply
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyTo(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 pl-6 border-l-2 border-muted space-y-4">
                    {comment.replies.map((reply) => (
                      <motion.div
                        key={reply.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatars/user.jpg" />
                            <AvatarFallback>{reply.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">{reply.author}</span>
                              <span className="text-sm text-muted-foreground">
                                {reply.date}
                              </span>
                            </div>
                            <p className="text-sm mb-2">{reply.content}</p>
                            <Button
                              variant={likedComments[reply.id] ? "default" : "ghost"}
                              size="sm"
                              onClick={() => handleLike(reply.id)}
                            >
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              {reply.likes} Likes
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}