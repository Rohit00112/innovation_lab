export interface BlogPost {
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  image: string
}

export interface Comment {
  id: string
  content: string
  author: string
  date: string
  likes: number
  replies?: Comment[]
}

export interface BlogPostContent extends BlogPost {
  content: string
  tags?: string[]
}

export interface RelatedPost extends BlogPost {
  slug: string
}