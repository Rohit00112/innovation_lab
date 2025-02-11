// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MessageSquare, Users2, Calendar, Award } from "lucide-react"
// import { Discussion, Group, CommunityEvent, Achievement } from "@/types/community"
// import communityData from "@/data/pages/community.json"

// export default function CommunityPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
//           <h1 className="text-5xl font-bold mb-4">Community Hub</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Connect, collaborate, and grow with fellow innovators
//           </p>
//         </motion.div>
//       </section>

//       {/* Community Features */}
//       <section className="py-12 md:py-20 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <Tabs defaultValue="discussions" className="space-y-6 md:space-y-8">
//             <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 md:gap-4">
//               <TabsTrigger value="discussions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
//                 <MessageSquare className="mr-2 h-3 w-3 md:h-4 md:w-4" />
//                 Discussions
//               </TabsTrigger>
//               <TabsTrigger value="groups" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
//                 <Users2 className="mr-2 h-3 w-3 md:h-4 md:w-4" />
//                 Groups
//               </TabsTrigger>
//               <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
//                 <Calendar className="mr-2 h-3 w-3 md:h-4 md:w-4" />
//                 Events
//               </TabsTrigger>
//               <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base">
//                 <Award className="mr-2 h-3 w-3 md:h-4 md:w-4" />
//                 Achievements
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="discussions" className="space-y-6 md:space-y-8">
//               <div className="grid grid-cols-1 gap-4 md:gap-6">
//                 {discussions.map((discussion, index) => (
//                   <DiscussionCard key={index} discussion={discussion} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="groups" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {groups.map((group, index) => (
//                   <GroupCard key={index} group={group} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="events" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {communityEvents.map((event, index) => (
//                   <EventCard key={index} event={event} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="achievements" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {achievements.map((achievement, index) => (
//                   <AchievementCard key={index} achievement={achievement} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   )
// }

// function DiscussionCard({ discussion }: { discussion: Discussion }) {
//   return (
//     <Card className="p-6">
//       <div className="flex items-start space-x-4">
//         <img
//           src={discussion.authorAvatar}
//           alt={discussion.author}
//           className="w-12 h-12 rounded-full"
//         />
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-semibold">{discussion.title}</h3>
//             <Badge>{discussion.category}</Badge>
//           </div>
//           <p className="text-muted-foreground mb-4">{discussion.preview}</p>
//           <div className="flex items-center justify-between text-sm text-muted-foreground">
//             <span>{discussion.author}</span>
//             <span>{discussion.date}</span>
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }

// function GroupCard({ group }: { group: Group }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={group.image} alt={group.name} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{group.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
//         <p className="text-muted-foreground mb-4">{group.description}</p>
//         <div className="flex items-center justify-between mb-4">
//           <span className="text-sm text-muted-foreground">{group.members} members</span>
//           <Badge variant="secondary">{group.status}</Badge>
//         </div>
//         <Button className="w-full">Join Group</Button>
//       </div>
//     </Card>
//   )
// }

// function EventCard({ event }: { event: CommunityEvent }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <Badge className="mb-2">{event.category}</Badge>
//         <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//         <p className="text-muted-foreground mb-4">{event.description}</p>
//         <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
//           <span>{event.date}</span>
//           <span>{event.location}</span>
//         </div>
//         <Button className="w-full">RSVP</Button>
//       </div>
//     </Card>
//   )
// }

// function AchievementCard({ achievement }: { achievement: Achievement }) {
//   return (
//     <Card className="p-6 text-center">
//       <div className="mb-4">
//         <img src={achievement.icon} alt={achievement.title} className="w-16 h-16 mx-auto" />
//       </div>
//       <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
//       <p className="text-muted-foreground mb-4">{achievement.description}</p>
//       <Badge variant="secondary">{achievement.points} points</Badge>
//     </Card>
//   )
// }

// const { discussions, groups, communityEvents, achievements } = communityData

export default function CommunityPage() {
  return <UnderConstruction />;
}