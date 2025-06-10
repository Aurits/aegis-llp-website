"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import ServiceShowcase from "@/components/service-showcase"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, Building2, CheckCircle, Cloud, Code, Database, Smartphone, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "TechFlow Solutions",
      specialization: "Digital Infrastructure",
      description: "Specializing in government digital infrastructure and cloud migration services",
      icon: Cloud,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/80 to-teal-50/80",
      services: ["Cloud Migration", "Infrastructure Design", "System Integration"],
      established: "2018",
    },
    {
      id: 2,
      name: "DataCore Systems",
      specialization: "Data Management",
      description: "Expert data management and analytics solutions for municipal governments",
      icon: Database,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/80 to-indigo-50/80",
      services: ["Data Analytics", "Database Design", "Business Intelligence"],
      established: "2016",
    },
    {
      id: 3,
      name: "WebCraft Digital",
      specialization: "Web Development",
      description: "Modern web applications and digital platforms for public sector organizations",
      icon: Code,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50/80 to-pink-50/80",
      services: ["Web Development", "UI/UX Design", "Digital Platforms"],
      established: "2019",
    },
    {
      id: 4,
      name: "MobileFirst Tech",
      specialization: "Mobile Solutions",
      description: "Mobile applications and responsive solutions for citizen engagement",
      icon: Smartphone,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50/80 to-orange-50/80",
      services: ["Mobile Apps", "Responsive Design", "Citizen Portals"],
      established: "2020",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Building2 className="w-4 h-4 mr-2" />8 Specialized Companies, One Vision
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                Our Member
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 block">
                  Companies
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                Each member company brings unique expertise and specialized knowledge, working together under the Aegis
                LLP structure to deliver comprehensive digital solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-lg px-8 py-6"
                >
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Company overview with real image */}
            <div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                  <div className="relative h-64">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                      alt="Aegis Group Company Overview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Group Companies</h3>
                      <p className="text-white/90">Specialized expertise across multiple domains</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Total Companies</p>
                        <p className="text-2xl font-bold text-emerald-600">8</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Service Areas</p>
                        <p className="text-2xl font-bold text-blue-600">15+</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Years Experience</p>
                        <p className="text-2xl font-bold text-purple-600">18+</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Projects Completed</p>
                        <p className="text-2xl font-bold text-amber-600">200+</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -left-10 top-10 z-10 rounded-lg bg-white shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">Unified Team</div>
                      <div className="text-slate-600">One vision</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-10 bottom-10 z-10 rounded-lg bg-white shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">Quality Assured</div>
                      <div className="text-slate-600">Certified excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase Section */}
      <ServiceShowcase />

      {/* Companies Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Member Companies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise working together as one unified team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div key={company.id}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${company.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative z-10 pb-8">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${company.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <company.icon className="h-10 w-10 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-white/80 backdrop-blur-sm">
                        Est. {company.established}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-slate-800 mt-6">{company.name}</CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {company.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 relative z-10">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">Core Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.services.map((service, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-white/80 backdrop-blur-sm border-slate-200"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Building2 className="h-4 w-4" />
                        <span>{company.specialization}</span>
                      </div>
                      <div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-emerald-50 group-hover:border-emerald-200 bg-white/80 backdrop-blur-sm"
                        >
                          <Link href={`/companies/${company.id}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
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

      {/* Collaboration Examples */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-emerald-50/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Inter-Company Collaboration
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real examples of how our member companies work together to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Cloud className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                      Collaboration Project
                    </Badge>
                  </div>
                  <CardTitle className="text-slate-800 text-xl">Municipal Data Platform</CardTitle>
                  <CardDescription className="leading-relaxed">
                    TechFlow Solutions provided cloud infrastructure while DataCore Systems handled data architecture
                    and analytics for a comprehensive municipal data platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Seamless data integration across departments",
                      "Real-time analytics and reporting",
                      "Scalable cloud infrastructure",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Smartphone className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                      Collaboration Project
                    </Badge>
                  </div>
                  <CardTitle className="text-slate-800 text-xl">Citizen Engagement Portal</CardTitle>
                  <CardDescription className="leading-relaxed">
                    WebCraft Digital created the web platform while MobileFirst Tech developed the companion mobile app
                    for enhanced citizen engagement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Unified user experience across platforms",
                      "Mobile-first responsive design",
                      "Enhanced citizen participation",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The advantages of working with our unified LLP structure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Unified Team",
                description: "One coordinated team with diverse expertise working towards your success",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Consistent quality standards maintained across all member companies",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "Faster project delivery through coordinated expertise and resources",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((item, index) => (
              <div key={index}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg text-center bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-slate-800 text-xl mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-blue-700" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-3xl" />

        <div className="container mx-auto text-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Work With Our Expert Team?
            </h2>
            <p className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with our member companies and discover how our collaborative approach can benefit your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}