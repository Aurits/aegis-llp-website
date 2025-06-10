"use client"

import { Calendar, Users, Target, Lightbulb, TrendingUp, Building2, ArrowRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ProjectsPage() {
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

  const projects = [
    {
      id: 1,
      title: "Osaka Prefecture Digital Infrastructure Modernization",
      client: "Osaka Prefecture Government",
      category: "Government",
      duration: "12 months",
      team: ["TechFlow Solutions", "DataCore Systems", "WebCraft Digital"],
      problem:
        "The prefecture needed to modernize legacy systems across 15 municipal offices, affecting 2.8 million citizens. Existing infrastructure was fragmented, causing service delays and citizen frustration.",
      proposal:
        "Implemented a unified cloud-based platform with integrated citizen services, real-time data analytics, and mobile-first design. Included comprehensive staff training and phased migration strategy.",
      result:
        "Achieved 65% reduction in service processing time, 40% increase in citizen satisfaction scores, and 99.9% system uptime. Successfully migrated all 15 offices with zero downtime.",
      technologies: ["Cloud Infrastructure", "Data Analytics", "Mobile Development", "System Integration"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
      status: "Completed",
      year: "2024",
      budget: "¥2.8B",
      impact: "2.8M citizens served",
    },
    {
      id: 2,
      title: "Tokyo Smart City IoT Integration Platform",
      client: "Tokyo Metropolitan Government",
      category: "Smart City",
      duration: "18 months",
      team: ["TechFlow Solutions", "MobileFirst Tech", "DataCore Systems"],
      problem:
        "Tokyo needed an integrated IoT system to monitor traffic, environmental conditions, and public utilities while providing real-time data to citizens and enabling predictive maintenance.",
      proposal:
        "Developed a comprehensive IoT platform with 10,000+ sensors, AI-powered analytics, citizen mobile app, and automated alert systems for emergency response and maintenance.",
      result:
        "Improved traffic flow by 30%, reduced energy consumption by 25%, decreased emergency response time by 45%, and increased citizen engagement through the mobile app by 300%.",
      technologies: ["IoT Integration", "AI Analytics", "Mobile Development", "Real-time Processing"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      status: "Completed",
      year: "2023",
      budget: "¥4.2B",
      impact: "14M citizens served",
    },
    {
      id: 3,
      title: "Kyoto Healthcare Data Management System",
      client: "Kyoto Prefecture Health Department",
      category: "Healthcare",
      duration: "15 months",
      team: ["DataCore Systems", "TechFlow Solutions", "WebCraft Digital"],
      problem:
        "Healthcare facilities needed a unified system for patient data management, appointment scheduling, and resource allocation across 25 locations with strict privacy compliance.",
      proposal:
        "Created a secure, HIPAA-compliant data management system with integrated scheduling, resource management, telemedicine capabilities, and advanced analytics for health insights.",
      result:
        "Streamlined operations across 25 facilities, reduced administrative overhead by 50%, improved patient care coordination by 60%, and achieved 100% privacy compliance.",
      technologies: ["Healthcare IT", "Data Security", "System Integration", "Telemedicine"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      status: "Completed",
      year: "2024",
      budget: "¥1.9B",
      impact: "500K patients served",
    },
    {
      id: 4,
      title: "Nagoya Municipal Services Digital Transformation",
      client: "Nagoya City Government",
      category: "Government",
      duration: "10 months",
      team: ["WebCraft Digital", "MobileFirst Tech", "DataCore Systems"],
      problem:
        "Citizens faced long wait times and complex procedures for municipal services. The city needed to digitize 50+ services while maintaining accessibility for all age groups.",
      proposal:
        "Built a comprehensive digital services platform with intuitive UI/UX, multi-language support, accessibility features, and integrated payment systems for seamless citizen experience.",
      result:
        "Reduced average service completion time from 3 hours to 15 minutes, achieved 85% digital adoption rate, and improved citizen satisfaction scores by 70%.",
      technologies: ["Web Development", "Mobile Apps", "Payment Integration", "Accessibility"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
      status: "Completed",
      year: "2023",
      budget: "¥1.2B",
      impact: "2.3M citizens served",
    },
    {
      id: 5,
      title: "Hiroshima Emergency Response System",
      client: "Hiroshima Prefecture",
      category: "Emergency Services",
      duration: "8 months",
      team: ["TechFlow Solutions", "MobileFirst Tech"],
      problem:
        "The prefecture needed a modern emergency response system to coordinate disaster response, citizen alerts, and resource management during natural disasters.",
      proposal:
        "Developed an AI-powered emergency response platform with real-time monitoring, automated citizen alerts, resource tracking, and coordination tools for first responders.",
      result:
        "Reduced emergency response time by 40%, improved coordination between agencies by 60%, and successfully managed 3 major weather events with zero system failures.",
      technologies: ["AI Systems", "Real-time Monitoring", "Mobile Alerts", "Resource Management"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
      status: "In Progress",
      year: "2024",
      budget: "¥980M",
      impact: "2.8M citizens protected",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5" />
        <div className="container mx-auto relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                <Building2 className="w-4 h-4 mr-2" />
                Proven Track Record
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Our Project
              <span className="text-emerald-600 block">Portfolio</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful digital transformation projects for government agencies and municipalities,
              showcasing our Problem → Proposal → Result methodology.
            </motion.p>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 py-3 rounded-xl border-slate-200 bg-white/80 backdrop-blur-sm"
                />
              </div>
              <Button variant="outline" className="px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 bg-slate-100 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="government" className="rounded-lg">
                  Government
                </TabsTrigger>
                <TabsTrigger value="smart-city" className="rounded-lg">
                  Smart City
                </TabsTrigger>
                <TabsTrigger value="healthcare" className="rounded-lg">
                  Healthcare
                </TabsTrigger>
                <TabsTrigger value="emergency" className="rounded-lg">
                  Emergency
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </TabsContent>

            <TabsContent value="government" className="space-y-12">
              {projects
                .filter((p) => p.category === "Government")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </TabsContent>

            <TabsContent value="smart-city" className="space-y-12">
              {projects
                .filter((p) => p.category === "Smart City")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </TabsContent>

            <TabsContent value="healthcare" className="space-y-12">
              {projects
                .filter((p) => p.category === "Healthcare")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </TabsContent>

            <TabsContent value="emergency" className="space-y-12">
              {projects
                .filter((p) => p.category === "Emergency Services")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-800 mb-4">
              Project Impact
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
              Measurable results from our digital transformation initiatives
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
                  <div className="text-slate-600">Projects Completed</div>
                  <div className="text-sm text-slate-500 mt-2">Across Japan</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">22M+</div>
                  <div className="text-slate-600">Citizens Served</div>
                  <div className="text-sm text-slate-500 mt-2">Direct impact</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-slate-600">Average Uptime</div>
                  <div className="text-sm text-slate-500 mt-2">System reliability</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-amber-600 mb-2">55%</div>
                  <div className="text-slate-600">Avg. Efficiency Gain</div>
                  <div className="text-sm text-slate-500 mt-2">Process improvement</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Digital Transformation?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven Problem → Proposal → Result methodology.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-8 py-4 rounded-xl">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 rounded-xl"
              >
                <Link href="/technology">View Our Technology</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
        <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
          <div className={`relative h-64 lg:h-auto ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

            {/* Project Stats Overlay */}
            <div className="absolute top-4 left-4 space-y-2">
              <Badge className={`${project.status === "Completed" ? "bg-emerald-600" : "bg-blue-600"} text-white`}>
                {project.status}
              </Badge>
              <Badge variant="outline" className="bg-white/90 text-slate-700">
                {project.category}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold">{project.budget}</div>
                  <div className="text-white/80">Project Budget</div>
                </div>
                <div>
                  <div className="font-bold">{project.impact}</div>
                  <div className="text-white/80">Citizens Impacted</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Users className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-600 mb-6">Client: {project.client}</p>

            <div className="space-y-6">
              {/* Problem */}
              <div className="border-l-4 border-red-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-slate-800">Problem</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* Proposal */}
              <div className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-slate-800">Proposal</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.proposal}</p>
              </div>

              {/* Result */}
              <div className="border-l-4 border-emerald-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-semibold text-slate-800">Result</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Users className="h-4 w-4" />
                  <span>Team: {project.team.join(", ")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string, i: number) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="outline" className="group-hover:bg-emerald-50 group-hover:border-emerald-200">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
