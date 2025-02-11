"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('Contact.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for inquiries, collaborations, or support
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Itahari International College
                        <br />
                        Sundarharaicha - 04, Morang, Nepal
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        Sunday - Friday: 8:00 AM - 4:00 PM
                        <br />
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        +977-9802776830
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        General: innovation.lab@iic.edu.np
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const data = {
                      firstName: formData.get('firstName'),
                      lastName: formData.get('lastName'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      message: formData.get('message')
                    };
                    
                    const mailtoLink = `mailto:innovation.lab@iic.edu.np?subject=Contact Form Submission&body=First Name: ${data.firstName}%0D%0ALast Name: ${data.lastName}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
                    
                    window.location.href = mailtoLink;
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      name="phone" 
                      type="tel" 
                      placeholder="+977-9800000000" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <Card className="overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3040468045287!2d${87.30237694989367}!3d${26.655715311078577}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c3912a93715%3A0x9e87b26012C23F0E!2sInnovation%20Lab!5e0!3m2!1sen!2snp!4v1647891702983!5m2!1sen!2snp`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </div>
      </section>
    </div>
  )
}