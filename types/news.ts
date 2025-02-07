export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  image: string
  tags: string[]
}

export interface NewsPageData {
  categories: string[]
  articles: Article[]
}