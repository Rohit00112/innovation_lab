// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Mail, Settings, Archive, BarChart3 } from "lucide-react"

// export default function NewsletterPage() {
//   const [email, setEmail] = useState("")
//   const [preferences, setPreferences] = useState({
//     technology: false,
//     innovation: false,
//     research: false,
//     events: false,
//   })

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault()
//     // TODO: Implement newsletter subscription logic
//     console.log("Subscribe:", { email, preferences })
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
//           <h1 className="text-5xl font-bold mb-4">Newsletter</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Stay updated with the latest innovations, research, and events
//           </p>
//         </motion.div>
//       </section>

//       {/* Newsletter Features */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="subscribe" className="space-y-8">
//             <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-4">
//               <TabsTrigger value="subscribe" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Mail className="mr-2 h-4 w-4" />
//                 Subscribe
//               </TabsTrigger>
//               <TabsTrigger value="preferences" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Settings className="mr-2 h-4 w-4" />
//                 Preferences
//               </TabsTrigger>
//               <TabsTrigger value="archive" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Archive className="mr-2 h-4 w-4" />
//                 Archive
//               </TabsTrigger>
//               <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <BarChart3 className="mr-2 h-4 w-4" />
//                 Analytics
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="subscribe">
//               <Card className="max-w-md mx-auto p-6">
//                 <form onSubmit={handleSubscribe} className="space-y-4">
//                   <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
//                   <div className="space-y-2">
//                     <Input
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <h3 className="font-semibold mb-2">Interests</h3>
//                     <div className="space-y-2">
//                       {Object.entries(preferences).map(([key, value]) => (
//                         <div key={key} className="flex items-center space-x-2">
//                           <Checkbox
//                             id={key}
//                             checked={value}
//                             onCheckedChange={(checked) =>
//                               setPreferences((prev) => ({
//                                 ...prev,
//                                 [key]: checked === true,
//                               }))
//                             }
//                           />
//                           <label
//                             htmlFor={key}
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             {key.charAt(0).toUpperCase() + key.slice(1)}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <Button type="submit" className="w-full">
//                     Subscribe
//                   </Button>
//                 </form>
//               </Card>
//             </TabsContent>

//             <TabsContent value="preferences">
//               <Card className="max-w-3xl mx-auto p-6">
//                 <h2 className="text-2xl font-bold mb-6">Manage Your Preferences</h2>
//                 <p className="text-muted-foreground mb-4">
//                   Enter your email to manage your newsletter preferences
//                 </p>
//                 <div className="space-y-4">
//                   <Input type="email" placeholder="Enter your email" />
//                   <Button>Access Preferences</Button>
//                 </div>
//               </Card>
//             </TabsContent>

//             <TabsContent value="archive">
//               <Card className="max-w-3xl mx-auto p-6">
//                 <h2 className="text-2xl font-bold mb-6">Newsletter Archive</h2>
//                 <p className="text-muted-foreground mb-4">
//                   Browse and search through our past newsletters
//                 </p>
//                 <div className="space-y-4">
//                   <Input type="search" placeholder="Search newsletters..." />
//                   <div className="space-y-4">
//                     {/* Placeholder for newsletter archive items */}
//                     <p className="text-muted-foreground">Coming soon...</p>
//                   </div>
//                 </div>
//               </Card>
//             </TabsContent>

//             <TabsContent value="analytics">
//               <Card className="max-w-3xl mx-auto p-6">
//                 <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
//                 <p className="text-muted-foreground mb-4">
//                   Track newsletter performance and subscriber engagement
//                 </p>
//                 <div className="space-y-4">
//                   {/* Placeholder for analytics dashboard */}
//                   <p className="text-muted-foreground">Admin access required</p>
//                 </div>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   )
// }

export default function NewsletterPage() {
  return <UnderConstruction />
}