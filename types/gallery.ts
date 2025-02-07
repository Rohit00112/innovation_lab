export interface MediaItem {
  title: string
  type: "image" | "video" | "360"
  description: string
  thumbnail: string
}

export interface Collection {
  title: string
  description: string
  itemCount: number
}

export interface GalleryData {
  mediaItems: MediaItem[]
}