"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import Image from "next/image"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Government Solutions Architect",
      department: "TechFlow Solutions",
      location: "Tokyo, Japan",
      type: "Full-time",
      level: "Senior",
      description:
        "Lead the design and implementation of digital infrastructure solutions for government agencies. Work directly with municipal partners to transform public services.",
      requirements: [
        "5+ years in enterprise architecture",
        "Government sector experience",
        "Cloud platforms expertise",
        "Japanese business proficiency",
      ],
      benefits: ["Competitive salary", "Government project exposure", "Professional development", "Health insurance"],
    },
    {
      id: 2,
      title: "Data Analytics Specialist",
      department: "DataCore Systems",
      location: "Osaka, Japan",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Develop analytics solutions for municipal data platforms. Create insights that drive policy decisions and improve citizen services.",
      requirements: [
        "3+ years in data analytics",
        "Python/R proficiency",
        "Public sector understanding",
        "Statistical modeling experience",
      ],
      benefits: ["Flexible working", "Training budget", "Impact-driven work", "Team collaboration"],
    },
    {
      id: 3,
      title: "UX/UI Designer - Public Services",
      department: "WebCraft Digital",
      location: "Remote/Hybrid",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Design intuitive interfaces for citizen-facing government applications. Focus on accessibility and user experience for diverse demographics.",
      requirements: [
        "4+ years UX/UI design",
        "Accessibility standards knowledge",
        "Government app experience",
        "Design system expertise",
      ],
      benefits: ["Remote flexibility", "Creative freedom", "User impact", "Design conferences"],
    },
    {
      id: 4,
      title: "Mobile Development Engineer",
      department: "MobileFirst Tech",
      location: "Kyoto, Japan",
      type: "Full-time",
      level: "Senior",
      description:
        "Build mobile applications that connect citizens with government services. Develop cross-platform solutions with focus on security and performance.",
      requirements: [
        "React Native/Flutter",
        "5+ years mobile development",
        "Security best practices",
        "Government compliance knowledge",
      ],
      benefits: ["Technical growth", "Innovation time", "Conference attendance", "Mentorship opportunities"],
    },
    {
      id: 5,
      title: "Project Manager - Digital Transformation",
      department: "Aegis LLP Group",
      location: "Mie Prefecture",
      type: "Full-time",
      level: "Senior",
      description:
        "Manage large-scale digital transformation projects for government clients. Coordinate across multiple member companies and stakeholder groups.",
      requirements: [
        "PMP certification preferred",
        "Government project experience",
        "Stakeholder management",
        "Agile methodologies",
      ],
      benefits: ["Leadership development", "Cross-company exposure", "Strategic involvement", "Executive mentoring"],
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      department: "Security Division",
      location: "Tokyo, Japan",
      type: "Full-time",
      level: "Mid-level",
      description:
        "Ensure security compliance for government systems. Conduct security assessments and implement protection measures for sensitive public data.",
      requirements: [
        "Security certifications",
        "Government security standards",
        "Incident response experience",
        "Risk assessment skills",
      ],
      benefits: ["Security training", "Certification support", "Critical infrastructure work", "Expert mentorship"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Contribute to projects that directly improve citizens' lives and government efficiency",
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Advance your career with exposure to cutting-edge government technology projects",
      color: "blue",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work across multiple specialized companies within our unique LLP structure",
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access to training, certifications, and professional development opportunities",
      color: "amber",
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with government contracts and long-term partnerships",
      color: "rose",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Be part of award-winning projects recognized by METI and industry leaders",
      color: "indigo",
    },
  ]

  const companyValues = [
    {
      title: "Public Service Excellence",
      description: "We serve as agents of public service, ensuring fairness and transparency in all operations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
    },
    {
      title: "User-Focused Innovation",
      description: "We relentlessly pursue service excellence from the citizen's perspective.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
    },
    {
      title: "Meaningful Work Environment",
      description: "We foster a workplace where team members experience growth and fulfillment.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
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
            <div>
              <div>
                <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Join Our Mission
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Build the Future of
                <span className="text-emerald-600 block">Public Service</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join Aegis LLP Group and be part of transforming government services for millions of citizens. Work on
                meaningful projects that make a real difference in society.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl bg-white/80 backdrop-blur-sm">
                  Learn About Our Culture
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                  alt="Aegis LLP Group Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
                  <p className="text-white/90">8 specialized companies, one unified mission</p>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-slate-600">Team Members</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">18+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our Values & Culture
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Aegis LLP Group, we believe in creating meaningful work that serves the public good
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <div className="relative h-48">
                    <Image src={value.image || "/placeholder.svg"} alt={value.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-800 text-xl mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the benefits of joining Japan's leading government technology partnership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card className="text-center p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our team and help shape the future of government technology in Japan
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={job.id}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-4 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            {job.department}
                          </Badge>
                          <Badge variant="secondary">{job.level}</Badge>
                        </div>
                        <h3 className="font-bold text-slate-800 text-xl mb-2">{job.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{job.description}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4 text-emerald-600" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Building2 className="h-4 w-4 text-emerald-600" />
                          <span>{job.department}</span>
                        </div>
                      </div>

                      <div className="text-center lg:text-right">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Join Aegis LLP Group and be part of Japan's digital transformation journey. Your skills can help improve
              millions of lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 rounded-xl">
                Browse All Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 rounded-xl"
              >
                Contact HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}