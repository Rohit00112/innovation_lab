// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Search, Image, Play, ArrowRight } from "lucide-react"
// import galleryData from "@/data/pages/gallery.json"

// export default function GalleryPage() {
//   const [mediaType, setMediaType] = useState("all")
//   const [searchQuery, setSearchQuery] = useState("")

//   const filteredMedia = mediaItems.filter((item) => {
//     const matchesType = mediaType === "all" || item.type === mediaType
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//     return matchesType && matchesSearch
//   })

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-4"
//         >
//           <h1 className="text-5xl font-bold mb-4">Media Gallery</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Explore our collection of project images, videos, and virtual tours
//           </p>
//         </motion.div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           {/* Filters */}
//           <div className="flex flex-col md:flex-row gap-4 mb-12">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search media..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//             </div>
//             <Select value={mediaType} onValueChange={setMediaType}>
//               <SelectTrigger className="w-full md:w-[200px]">
//                 <SelectValue placeholder="Media Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Media</SelectItem>
//                 <SelectItem value="image">Images</SelectItem>
//                 <SelectItem value="video">Videos</SelectItem>
//                 <SelectItem value="360">360° Tours</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Media Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {filteredMedia.map((item, index) => (
//               <MediaCard key={index} item={item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function MediaCard({
//   item,
//   index,
// }: {
//   item: typeof mediaItems[0]
//   index: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <Card className="overflow-hidden">
//         <div className="relative">
//           <img
//             src={item.thumbnail}
//             alt={item.title}
//             className="w-full h-48 object-cover"
//           />
//           {item.type === "video" && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//               <Play className="h-12 w-12 text-white" />
//             </div>
//           )}
//           {item.type === "360" && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//               <Image className="h-12 w-12 text-white" />
//             </div>
//           )}
//         </div>
//         <div className="p-6">
//           <Badge className="mb-2">
//             {item.type === "image" && "Image"}
//             {item.type === "video" && "Video"}
//             {item.type === "360" && "360° Tour"}
//           </Badge>
//           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//           <p className="text-sm text-muted-foreground mb-4">
//             {item.description}
//           </p>
//           <Button variant="link" className="p-0">
//             View {item.type === "360" ? "Tour" : "Media"} <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </Card>
//     </motion.div>
//   )
// }

// const { mediaItems } = galleryData

export default function GalleryPage() {
  return <UnderConstruction />
}