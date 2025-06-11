"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Award, Calendar, ExternalLink, Globe, Mail, MapPin, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Company data - in a real app, this would come from a CMS or API
const companies = {
    "1": {
        id: "1",
        name: "TechFlow Solutions",
        tagline: "Digital Infrastructure Excellence",
        specialization: "Cloud Infrastructure & System Integration",
        established: "2018",
        employees: "45+",
        headquarters: "Tokyo, Japan",
        description:
            "TechFlow Solutions specializes in government-grade digital infrastructure, providing scalable cloud solutions and system integration services for municipal and prefecture-level organizations across Japan.",
        mission:
            "To modernize government operations through cutting-edge cloud infrastructure and seamless system integration, ensuring 24/7 reliability and security compliance.",
        services: [
            {
                name: "Cloud Migration",
                description:
                    "Comprehensive migration of legacy government systems to modern cloud platforms with zero downtime.",
                technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
            },
            {
                name: "System Integration",
                description: "Seamless integration of disparate government systems for unified operations.",
                technologies: ["API Gateway", "Microservices", "Docker", "Terraform"],
            },
            {
                name: "Infrastructure Monitoring",
                description: "24/7 monitoring and maintenance of critical government infrastructure.",
                technologies: ["Prometheus", "Grafana", "ELK Stack", "Nagios"],
            },
        ],
        achievements: [
            "Successfully migrated 15 municipal offices to cloud infrastructure",
            "Achieved 99.9% uptime across all government clients",
            "Reduced infrastructure costs by 40% on average",
            "METI-certified cloud security implementation",
        ],
        projects: [
            {
                name: "Osaka Prefecture Digital Infrastructure",
                client: "Osaka Prefecture Government",
                year: "2024",
                description: "Complete digital infrastructure overhaul serving 2.8M citizens",
            },
            {
                name: "Tokyo Smart City IoT Platform",
                client: "Tokyo Metropolitan Government",
                year: "2023",
                description: "IoT integration platform with 10,000+ sensors",
            },
        ],
        team: {
            leadership: "Hiroshi Tanaka, Chief Technology Officer",
            expertise: ["Cloud Architecture", "DevOps", "Security Compliance", "Government Relations"],
            certifications: ["AWS Solutions Architect", "Azure Expert", "Google Cloud Professional"],
        },
        contact: {
            email: "contact@techflow.aegisllp.com",
            phone: "+81-3-1234-5679",
            website: "https://techflow.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
    },
    "2": {
        id: "2",
        name: "DataCore Systems",
        tagline: "Intelligent Data Solutions",
        specialization: "Data Analytics & Business Intelligence",
        established: "2016",
        employees: "38+",
        headquarters: "Osaka, Japan",
        description:
            "DataCore Systems transforms government data into actionable insights, providing advanced analytics and business intelligence solutions that drive informed policy decisions and improve citizen services.",
        mission:
            "To empower government agencies with data-driven decision making through advanced analytics, machine learning, and intelligent reporting systems.",
        services: [
            {
                name: "Data Analytics Platform",
                description: "Comprehensive analytics platform for government data processing and insights generation.",
                technologies: ["Apache Spark", "Elasticsearch", "Power BI", "Tableau"],
            },
            {
                name: "Predictive Analytics",
                description: "AI-powered predictive models for resource planning and citizen service optimization.",
                technologies: ["TensorFlow", "Python", "R", "Machine Learning"],
            },
            {
                name: "Real-time Dashboards",
                description: "Interactive dashboards providing real-time insights for government operations.",
                technologies: ["React", "D3.js", "WebSocket", "Redis"],
            },
        ],
        achievements: [
            "Processed over 100TB of government data annually",
            "Improved decision-making speed by 60% for client agencies",
            "Developed 50+ custom analytics solutions",
            "ISO 27001 certified data security practices",
        ],
        projects: [
            {
                name: "Kyoto Healthcare Data Management",
                client: "Kyoto Prefecture Health Department",
                year: "2024",
                description: "Unified healthcare data system serving 500K patients",
            },
            {
                name: "Municipal Resource Optimization",
                client: "Nagoya City Government",
                year: "2023",
                description: "AI-powered resource allocation system",
            },
        ],
        team: {
            leadership: "Yuki Sato, Head of Data Science",
            expertise: ["Data Science", "Machine Learning", "Business Intelligence", "Statistical Analysis"],
            certifications: ["Microsoft Data Analyst", "Google Data Engineer", "AWS Machine Learning"],
        },
        contact: {
            email: "contact@datacore.aegisllp.com",
            phone: "+81-6-1234-5679",
            website: "https://datacore.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
    },
    "3": {
        id: "3",
        name: "WebCraft Digital",
        tagline: "Citizen-Centered Design",
        specialization: "Web Development & User Experience",
        established: "2019",
        employees: "32+",
        headquarters: "Kyoto, Japan",
        description:
            "WebCraft Digital creates intuitive, accessible web applications that bridge the gap between government services and citizens, focusing on user experience and digital accessibility.",
        mission:
            "To design and develop user-friendly digital interfaces that make government services accessible to all citizens, regardless of age or technical ability.",
        services: [
            {
                name: "Government Web Portals",
                description: "Comprehensive web portals for municipal services with focus on accessibility and usability.",
                technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            },
            {
                name: "Citizen Service Applications",
                description: "Digital applications that streamline citizen interactions with government services.",
                technologies: ["Progressive Web Apps", "Node.js", "GraphQL", "MongoDB"],
            },
            {
                name: "Accessibility Compliance",
                description: "Ensuring all digital services meet WCAG 2.1 AA standards for accessibility.",
                technologies: ["ARIA", "Screen Reader Testing", "Color Contrast Tools", "Keyboard Navigation"],
            },
        ],
        achievements: [
            "Achieved 95% citizen satisfaction scores across projects",
            "WCAG 2.1 AA compliance on all delivered applications",
            "Reduced service completion time by 70% on average",
            "Designed interfaces used by 5M+ citizens annually",
        ],
        projects: [
            {
                name: "Nagoya Digital Services Platform",
                client: "Nagoya City Government",
                year: "2024",
                description: "Comprehensive digital services platform for 2.3M citizens",
            },
            {
                name: "Citizen Engagement Portal",
                client: "Multiple Municipalities",
                year: "2023",
                description: "Unified citizen engagement platform",
            },
        ],
        team: {
            leadership: "Akiko Yamamoto, Creative Director",
            expertise: ["UX/UI Design", "Frontend Development", "Accessibility", "User Research"],
            certifications: ["Google UX Design", "Adobe Certified Expert", "IAAP Accessibility"],
        },
        contact: {
            email: "contact@webcraft.aegisllp.com",
            phone: "+81-75-1234-5679",
            website: "https://webcraft.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
    },
    "4": {
        id: "4",
        name: "MobileFirst Tech",
        tagline: "Mobile Innovation for Government",
        specialization: "Mobile Development & Citizen Apps",
        established: "2020",
        employees: "28+",
        headquarters: "Hiroshima, Japan",
        description:
            "MobileFirst Tech develops cutting-edge mobile applications that bring government services directly to citizens' smartphones, focusing on security, performance, and user engagement.",
        mission:
            "To revolutionize citizen-government interaction through innovative mobile solutions that are secure, accessible, and user-friendly.",
        services: [
            {
                name: "Citizen Mobile Apps",
                description: "Native and cross-platform mobile applications for government services and citizen engagement.",
                technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            },
            {
                name: "Emergency Response Systems",
                description: "Real-time emergency alert and response systems for mobile devices.",
                technologies: ["Push Notifications", "GPS Integration", "Real-time Messaging", "Offline Capability"],
            },
            {
                name: "Digital Identity Solutions",
                description: "Secure mobile identity verification and authentication systems.",
                technologies: ["Biometric Authentication", "Blockchain", "OAuth 2.0", "Multi-factor Authentication"],
            },
        ],
        achievements: [
            "Developed apps used by 3M+ citizens across Japan",
            "Achieved 4.8/5 average app store ratings",
            "Zero security breaches across all mobile applications",
            "Winner of Japan Mobile App Excellence Award 2023",
        ],
        projects: [
            {
                name: "Hiroshima Emergency Response App",
                client: "Hiroshima Prefecture",
                year: "2024",
                description: "AI-powered emergency response system protecting 2.8M citizens",
            },
            {
                name: "Tokyo Citizen Services App",
                client: "Tokyo Metropolitan Government",
                year: "2023",
                description: "Comprehensive citizen services mobile platform",
            },
        ],
        team: {
            leadership: "Kenji Nakamura, Mobile Technology Lead",
            expertise: ["Mobile Development", "Security", "User Experience", "Performance Optimization"],
            certifications: ["Apple Developer", "Google Play Console", "React Native Certified"],
        },
        contact: {
            email: "contact@mobilefirst.aegisllp.com",
            phone: "+81-82-1234-5679",
            website: "https://mobilefirst.aegisllp.com",
        },
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
    },
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
    const company = companies[params.id as keyof typeof companies]

    if (!company) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5" />
                <div className="container mx-auto relative z-10">
                    <div>
                        <div className="mb-8">
                            <Link href="/companies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to All Companies
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Badge className="mb-6 bg-emerald-100 text-emerald-800">Member Company</Badge>
                                <h1 className="text-5xl font-bold text-slate-800 mb-4">{company.name}</h1>
                                <p className="text-2xl text-emerald-600 mb-6">{company.tagline}</p>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{company.description}</p>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Established</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.established}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Team Size</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.employees}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Headquarters</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.headquarters}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-slate-500 mb-1">Specialization</div>
                                        <div className="text-lg font-semibold text-slate-800">{company.specialization}</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={company.image || "/placeholder.svg"}
                                        alt={company.name}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                                        <p className="text-white/90">{company.tagline}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {company.mission}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Our Services
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Specialized solutions designed for government and municipal organizations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {company.services.map((service, index) => (
                            <div key={index}>
                                <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">{service.name}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-slate-700">Technologies:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {service.technologies.map((tech, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Key Achievements
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Measurable results and recognition in government technology solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {company.achievements.map((achievement, index) => (
                            <div key={index}>
                                <div className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-md">
                                    <Award className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                                    <p className="text-slate-700">{achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Recent Projects
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Highlighting our latest successful implementations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {company.projects.map((project, index) => (
                            <div key={index}>
                                <Card className="hover:shadow-lg transition-shadow border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="outline">{project.year}</Badge>
                                            <div className="flex items-center gap-1 text-sm text-slate-500">
                                                <Calendar className="h-4 w-4" />
                                                <span>{project.year}</span>
                                            </div>
                                        </div>
                                        <CardTitle className="text-slate-800">{project.name}</CardTitle>
                                        <CardDescription>{project.client}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{project.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team & Leadership */}
            <section className="py-16 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                            Team & Expertise
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">Leadership</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Users className="h-5 w-5 text-emerald-600" />
                                            <span className="font-medium text-slate-800">{company.team.leadership}</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-slate-700">Core Expertise:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {company.team.expertise.map((skill, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle className="text-slate-800">Certifications</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {company.team.certifications.map((cert, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Award className="h-4 w-4 text-emerald-600" />
                                                    <span className="text-slate-700">{cert}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8">
                            Get in Touch
                        </h2>

                        <div>
                            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-center gap-3">
                                            <Mail className="h-5 w-5 text-emerald-600" />
                                            <a href={`mailto:${company.contact.email}`} className="text-slate-700 hover:text-emerald-600">
                                                {company.contact.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <Phone className="h-5 w-5 text-emerald-600" />
                                            <a href={`tel:${company.contact.phone}`} className="text-slate-700 hover:text-emerald-600">
                                                {company.contact.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <Globe className="h-5 w-5 text-emerald-600" />
                                            <a
                                                href={company.contact.website}
                                                className="text-slate-700 hover:text-emerald-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Company Website <ExternalLink className="h-4 w-4 inline ml-1" />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <MapPin className="h-5 w-5 text-emerald-600" />
                                            <span className="text-slate-700">{company.headquarters}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-200">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                            <Link href="/contact">Contact Through Aegis LLP</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link href="/companies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            All Companies
                        </Link>
                        <Link href="/projects" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                            View Our Projects
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}