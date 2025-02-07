export interface Resource {
  title: string
  category: "templates" | "guides" | "tools" | "research"
  description: string
  format: string
}

export interface Collection {
  title: string
  description: string
  itemCount: number
}

export interface ResourcesPageData {
  resources: Resource[]
  collections: Collection[]
}