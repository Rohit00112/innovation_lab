// "use client"

import { UnderConstruction } from "@/components/under-construction";

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Check, Heart, Users, Star, Trophy, HandHeart } from "lucide-react"
// import { JoinPageData } from "@/types/join"
// import joinData from "@/data/pages/join.json"

// export default function JoinPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     membershipType: "",
//     message: "",
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // TODO: Implement form submission
//     console.log(formData)
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
//           <h1 className="text-5xl font-bold mb-4">Join & Support</h1>
//           <p className="text-xl max-w-3xl mx-auto">
//             Become part of our innovative community and help shape the future
//           </p>
//         </motion.div>
//       </section>

//       {/* Membership & Support Options */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="membership" className="space-y-12">
//             <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4">
//               <TabsTrigger value="membership" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Users className="mr-2 h-4 w-4" />
//                 Membership
//               </TabsTrigger>
//               <TabsTrigger value="support" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <HandHeart className="mr-2 h-4 w-4" />
//                 Support Us
//               </TabsTrigger>
//               <TabsTrigger value="volunteer" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//                 <Heart className="mr-2 h-4 w-4" />
//                 Volunteer
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="membership" className="space-y-8">
//               {/* Membership Tiers */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                 {membershipTiers.map((tier, index) => (
//                   <Card key={index} className="p-6">
//                     <Badge className="mb-2">{tier.type}</Badge>
//                     <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
//                     <p className="text-3xl font-bold mb-6">
//                       ${tier.price}<span className="text-sm font-normal">/year</span>
//                     </p>
//                     <ul className="space-y-3 mb-6">
//                       {tier.benefits.map((benefit, i) => (
//                         <li key={i} className="flex items-start">
//                           <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
//                           <span className="text-sm">{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
//                       Apply Now
//                     </Button>
//                   </Card>
//                 ))}
//               </div>

//               {/* Application Form */}
//               <Card className="p-6">
//                 <h2 className="text-2xl font-bold mb-6">Membership Application</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <Input
//                       placeholder="Full Name"
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       required
//                     />
//                     <Input
//                       type="email"
//                       placeholder="Email Address"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       required
//                     />
//                     <Input
//                       type="tel"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       required
//                     />
//                     <Input
//                       placeholder="Organization"
//                       value={formData.organization}
//                       onChange={(e) =>
//                         setFormData({ ...formData, organization: e.target.value })
//                       }
//                     />
//                   </div>
//                   <Textarea
//                     placeholder="Why do you want to join Innovation Lab?"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     required
//                     className="min-h-[150px]"
//                   />
//                   <Button type="submit" size="lg">
//                     Submit Application
//                   </Button>
//                 </form>
//               </Card>
//             </TabsContent>

//             <TabsContent value="support" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {supportOptions.map((option, index) => (
//                   <Card key={index} className="p-6">
//                     <div className="text-primary mb-4">{option.icon}</div>
//                     <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
//                     <p className="text-muted-foreground mb-4">{option.description}</p>
//                     <Button variant="outline" className="w-full">
//                       Learn More
//                     </Button>
//                   </Card>
//                 ))}
//               </div>

//               {/* Donation Form */}
//               <Card className="p-6">
//                 <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   {[25, 50, 100, 250].map((amount) => (
//                     <Button
//                       key={amount}
//                       variant="outline"
//                       className="w-full"
//                       onClick={() => console.log(`Selected amount: $${amount}`)}
//                     >
//                       ${amount}
//                     </Button>
//                   ))}
//                 </div>
//                 <Input
//                   type="number"
//                   placeholder="Custom Amount"
//                   className="mb-4"
//                 />
//                 <Button className="w-full" size="lg">
//                   Proceed to Payment
//                 </Button>
//               </Card>
//             </TabsContent>

//             <TabsContent value="volunteer" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {volunteerOpportunities.map((opportunity, index) => (
//                   <Card key={index} className="p-6">
//                     <Badge className="mb-2">{opportunity.commitment}</Badge>
//                     <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
//                     <p className="text-muted-foreground mb-4">{opportunity.description}</p>
//                     <Button variant="outline" className="w-full">
//                       Apply Now
//                     </Button>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   )
// }

// const { membershipTiers, supportOptions: rawSupportOptions, volunteerOpportunities } = joinData as JoinPageData

// const supportOptions = [
//   {
//     icon: <Trophy className="h-8 w-8" />,
//     ...rawSupportOptions[0]
//   },
//   {
//     icon: <Star className="h-8 w-8" />,
//     ...rawSupportOptions[1]
//   },
//   {
//     icon: <Users className="h-8 w-8" />,
//     ...rawSupportOptions[2]
//   }
// ]

export default function JoinPage() {
  return <UnderConstruction />
}