"use client"

import {
  Shield,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  CheckCircle,
  Zap,
  Code,
  Search,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function TechnologyPage() {
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

  const technologies = [
    {
      category: "Cloud Infrastructure",
      icon: Cloud,
      color: "emerald",
      description: "Scalable, secure cloud solutions for government operations",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      useCases: ["Data Migration", "Disaster Recovery", "Auto-scaling", "Multi-region Deployment"],
      projects: ["Osaka Prefecture Migration", "Tokyo Smart City Platform"],
      certifications: ["AWS Solutions Architect", "Azure Expert", "Google Cloud Professional"],
    },
    {
      category: "Data Analytics & AI",
      icon: Database,
      color: "blue",
      description: "Advanced analytics and AI solutions for government insights",
      technologies: ["Apache Spark", "Elasticsearch", "Power BI", "TensorFlow", "Python", "R"],
      useCases: ["Predictive Analytics", "Real-time Dashboards", "Citizen Behavior Analysis", "Resource Optimization"],
      projects: ["Kyoto Healthcare Analytics", "Hiroshima Emergency Prediction"],
      certifications: ["Microsoft Data Analyst", "Google Data Engineer", "AWS Machine Learning"],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "purple",
      description: "Cross-platform mobile solutions for citizen engagement",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Progressive Web Apps", "Ionic"],
      useCases: ["Citizen Portals", "Emergency Alerts", "Service Applications", "Digital ID Systems"],
      projects: ["Nagoya Citizen App", "Tokyo Emergency Response"],
      certifications: ["Apple Developer", "Google Play Console", "React Native Certified"],
    },
    {
      category: "Web Technologies",
      icon: Globe,
      color: "amber",
      description: "Modern web applications with responsive design",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
      useCases: ["Government Portals", "Admin Dashboards", "Public Websites", "Internal Tools"],
      projects: ["Osaka Digital Services", "Kyoto Health Portal"],
      certifications: ["React Developer", "Node.js Certified", "TypeScript Expert"],
    },
    {
      category: "Cybersecurity",
      icon: Lock,
      color: "rose",
      description: "Enterprise-grade security for sensitive government data",
      technologies: ["OAuth 2.0", "SAML", "Zero Trust", "Encryption", "VPN", "SIEM"],
      useCases: ["Identity Management", "Data Protection", "Audit Trails", "Compliance Monitoring"],
      projects: ["Government Security Framework", "Multi-Agency SSO"],
      certifications: ["CISSP", "CISM", "ISO 27001 Lead Auditor"],
    },
    {
      category: "IoT & Edge Computing",
      icon: Cpu,
      color: "indigo",
      description: "Connected devices and edge processing for smart cities",
      technologies: ["Azure IoT", "AWS IoT Core", "Edge Computing", "5G", "LoRaWAN", "MQTT"],
      useCases: ["Smart Traffic", "Environmental Monitoring", "Asset Tracking", "Predictive Maintenance"],
      projects: ["Tokyo IoT Platform", "Smart City Sensors"],
      certifications: ["IoT Solutions Architect", "Edge Computing Specialist"],
    },
  ]

  const dxCases = [
    {
      title: "AI-Powered Document Processing",
      challenge: "Manual processing of 100,000+ government documents monthly causing delays",
      solution: "Implemented OCR and NLP systems with automated workflow routing",
      outcome: "85% reduction in processing time, 95% accuracy improvement, ¥500M annual savings",
      technologies: ["Computer Vision", "Natural Language Processing", "Workflow Automation"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      client: "Osaka Prefecture",
    },
    {
      title: "Real-time Citizen Service Platform",
      challenge: "Citizens experienced 3+ hour wait times for municipal services",
      solution: "Built unified digital platform with queue management and real-time updates",
      outcome: "Wait times reduced to 15 minutes, 90% digital adoption, 70% satisfaction increase",
      technologies: ["Real-time Systems", "Queue Management", "Mobile Integration"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      client: "Nagoya City",
    },
    {
      title: "Predictive Emergency Response",
      challenge: "Emergency services needed better resource allocation and response prediction",
      solution: "Developed AI system analyzing weather, traffic, and historical data",
      outcome: "40% faster response times, 60% better resource utilization, lives saved",
      technologies: ["Machine Learning", "Predictive Analytics", "Real-time Data"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
      client: "Hiroshima Prefecture",
    },
  ]

  const innovationAreas = [
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms for complex government optimization problems",
      status: "Research Phase",
      timeline: "2025-2027",
    },
    {
      icon: Shield,
      title: "Blockchain Governance",
      description: "Transparent, immutable record-keeping for government transactions",
      status: "Pilot Testing",
      timeline: "2024-2025",
    },
    {
      icon: TrendingUp,
      title: "Digital Twin Cities",
      description: "Virtual city models for urban planning and disaster simulation",
      status: "Development",
      timeline: "2024-2026",
    },
    {
      icon: Zap,
      title: "5G Smart Infrastructure",
      description: "Ultra-low latency networks for real-time city management",
      status: "Implementation",
      timeline: "2024-2025",
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
                <Code className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Stack
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Technology &<span className="text-emerald-600 block">Digital Transformation</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive technology capabilities and successful digital transformation initiatives that
              drive innovation in government and municipal services.
            </motion.p>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search technologies..."
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

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-800 mb-4">
              Our Technology Stack
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
              Modern technologies and frameworks powering our digital solutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br from-${tech.color}-400 to-${tech.color}-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <tech.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-slate-800">{tech.category}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {tech.technologies.map((t, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-white/80">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">Recent Projects</h4>
                        <ul className="space-y-1">
                          {tech.projects.slice(0, 2).map((project, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">Certifications</h4>
                        <div className="flex flex-wrap gap-1">
                          {tech.certifications.slice(0, 2).map((cert, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DX Case Studies */}
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
              Digital Transformation Success Stories
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
              Real-world examples of how we've modernized government operations
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {dxCases.map((dxCase, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={dxCase.image || "/placeholder.svg"}
                        alt={dxCase.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge className="bg-emerald-600 text-white mb-2">{dxCase.client}</Badge>
                        <h3 className="text-xl font-bold">{dxCase.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Challenge */}
                        <div className="border-l-4 border-red-200 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-bold text-sm">01</span>
                            </div>
                            <h4 className="font-bold text-slate-800">Challenge</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{dxCase.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="border-l-4 border-blue-200 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">02</span>
                            </div>
                            <h4 className="font-bold text-slate-800">Solution</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{dxCase.solution}</p>
                        </div>

                        {/* Outcome */}
                        <div className="border-l-4 border-emerald-200 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <span className="text-emerald-600 font-bold text-sm">03</span>
                            </div>
                            <h4 className="font-bold text-slate-800">Outcome</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{dxCase.outcome}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {dxCase.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation & Future Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-800 mb-4">
              Innovation & Future Technologies
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-600 max-w-2xl mx-auto">
              Staying ahead with emerging technologies and innovative approaches
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {innovationAreas.map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center bg-white/90 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    >
                      <item.icon className="h-8 w-8 text-emerald-600" />
                    </motion.div>
                    <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {item.status}
                      </Badge>
                      <div className="text-xs text-slate-500">{item.timeline}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Operations?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Let our technology experts help you navigate your digital transformation journey with cutting-edge
              solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-8 py-4 rounded-xl">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 rounded-xl"
              >
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
