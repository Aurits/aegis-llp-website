"use client"

import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Users, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "24/7 technical support for government partners",
      contact: "+81-3-1234-5678",
      availability: "Available 24/7",
      color: "emerald",
    },
    {
      icon: Mail,
      title: "Email Contact",
      description: "General inquiries and partnership discussions",
      contact: "contact@aegisllp.com",
      availability: "Response within 24 hours",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Project Consultation",
      description: "Schedule a consultation for your digital transformation needs",
      contact: "projects@aegisllp.com",
      availability: "Consultation available",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Emergency Support",
      description: "Critical system support for government operations",
      contact: "emergency@aegisllp.com",
      availability: "Immediate response",
      color: "rose",
    },
  ]

  const offices = [
    {
      name: "Headquarters",
      address: "Mie Prefecture, Japan",
      description: "Main office and coordination center",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2812%29-QPTAHO18mqKBVdy0YMVD7OpIez10Da.jpeg",
      departments: ["Executive Leadership", "Strategic Planning", "LLP Coordination"],
    },
    {
      name: "Tokyo Office",
      address: "Tokyo Metropolitan Area",
      description: "Government relations and project management",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      departments: ["Government Relations", "Project Management", "Technical Support"],
    },
    {
      name: "Osaka Operations",
      address: "Osaka Prefecture",
      description: "Regional operations and client services",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      departments: ["Regional Operations", "Client Services", "Implementation"],
    },
  ]

  const serviceAreas = [
    {
      icon: Shield,
      title: "Government Partnerships",
      description: "Municipal and prefecture-level digital transformation projects",
    },
    {
      icon: Building2,
      title: "Infrastructure Solutions",
      description: "Cloud migration, system integration, and modernization services",
    },
    {
      icon: Users,
      title: "Citizen Services",
      description: "Digital platforms that improve citizen engagement and service delivery",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get In Touch
                </Badge>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
              >
                Let's Transform
                <span className="text-emerald-600 block">Your Digital Future</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ready to modernize your government operations? Contact Aegis LLP Group to discuss your digital
                transformation needs and discover how our expertise can benefit your organization.
              </motion.p>

              {/* Quick Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-slate-600">Gov Partners</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Contact Form */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Start Your Project</CardTitle>
                  <CardDescription>
                    Tell us about your digital transformation needs and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@organization.gov.jp" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Organization</label>
                    <Input placeholder="Your government agency or municipality" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Project Type</label>
                    <select className="w-full p-3 border border-slate-200 rounded-xl bg-white">
                      <option>Digital Infrastructure</option>
                      <option>Citizen Services Platform</option>
                      <option>Data Analytics Solution</option>
                      <option>Mobile Application</option>
                      <option>System Integration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                    <Textarea
                      placeholder="Describe your project requirements and goals..."
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-6">
              Multiple Ways to Connect
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the communication method that works best for your needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br from-${method.color}-400 to-${method.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <div className="font-medium text-slate-800">{method.contact}</div>
                    <Badge variant="outline" className="text-xs">
                      {method.availability}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-6">
              How We Can Help
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our specialized services for government and municipal organizations
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {serviceAreas.map((service, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-slate-800 text-xl mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-800 mb-6">
              Our Locations
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic locations across Japan to serve our government partners
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {offices.map((office, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <div className="relative h-48">
                    <Image src={office.image || "/placeholder.svg"} alt={office.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{office.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-slate-600 mb-3">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span>{office.address}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{office.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-700">Departments:</div>
                      <div className="flex flex-wrap gap-1">
                        {office.departments.map((dept, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="container mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
              Emergency Support Available
            </motion.h2>
            <motion.p variants={itemVariants} className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
              Critical system issues? Our emergency response team is available 24/7 for government partners.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-slate-50 rounded-xl">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Hotline
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Emergency Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
