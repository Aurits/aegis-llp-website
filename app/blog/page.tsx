"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Filter, Heart, MessageSquare, Search, Share2, User } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
    const featuredPost = {
        id: 1,
        title: "The Future of Government Digital Transformation in Japan",
        excerpt:
            "Exploring how emerging technologies like AI, IoT, and blockchain are reshaping public services and citizen engagement across Japanese municipalities.",
        content:
            "As we move deeper into the digital age, Japanese government agencies are embracing transformative technologies at an unprecedented pace. From AI-powered citizen services to IoT-enabled smart cities, the landscape of public administration is evolving rapidly...",
        author: "Hiroshi Tanaka, CTO at TechFlow Solutions",
        date: "2024-12-18",
        readTime: "8 min read",
        category: "Digital Transformation",
        tags: ["AI", "Government", "Smart Cities", "Innovation"],
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
        featured: true,
        likes: 42,
        comments: 8,
        shares: 15,
    }

    const blogPosts = [
        {
            id: 2,
            title: "Building Trust Through Transparent Government APIs",
            excerpt:
                "How open APIs are fostering transparency and enabling third-party developers to create innovative citizen services.",
            author: "Yuki Sato, Head of Data Science at DataCore Systems",
            date: "2024-12-15",
            readTime: "6 min read",
            category: "Technology",
            tags: ["APIs", "Transparency", "Open Data"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
            likes: 28,
            comments: 5,
        },
        {
            id: 3,
            title: "User Experience Design for Government Services: Lessons Learned",
            excerpt:
                "Key insights from designing citizen-facing applications that serve diverse demographics and accessibility needs.",
            author: "Akiko Yamamoto, Creative Director at WebCraft Digital",
            date: "2024-12-12",
            readTime: "5 min read",
            category: "Design",
            tags: ["UX Design", "Accessibility", "Citizen Services"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
            likes: 35,
            comments: 12,
        },
        {
            id: 4,
            title: "Mobile-First Government: Why Apps Matter for Citizen Engagement",
            excerpt:
                "The growing importance of mobile applications in connecting citizens with government services and emergency response systems.",
            author: "Kenji Nakamura, Mobile Technology Lead at MobileFirst Tech",
            date: "2024-12-10",
            readTime: "4 min read",
            category: "Mobile Development",
            tags: ["Mobile Apps", "Citizen Engagement", "Emergency Response"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
            likes: 31,
            comments: 7,
        },
        {
            id: 5,
            title: "Cybersecurity in Government: Protecting Citizen Data in the Digital Age",
            excerpt:
                "Best practices and emerging threats in government cybersecurity, with focus on protecting sensitive citizen information.",
            author: "Security Team, Aegis LLP Group",
            date: "2024-12-08",
            readTime: "7 min read",
            category: "Security",
            tags: ["Cybersecurity", "Data Protection", "Privacy"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
            likes: 45,
            comments: 9,
        },
        {
            id: 6,
            title: "The LLP Advantage: How Our Structure Benefits Government Partners",
            excerpt:
                "Understanding the unique benefits of the Limited Liability Partnership model for delivering comprehensive government solutions.",
            author: "Executive Team, Aegis LLP Group",
            date: "2024-12-05",
            readTime: "6 min read",
            category: "Business Insights",
            tags: ["LLP", "Partnership", "Government Relations"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg",
            likes: 38,
            comments: 6,
        },
        {
            id: 7,
            title: "Sustainable Technology: Green IT Practices in Government",
            excerpt:
                "How government agencies can reduce their environmental impact through sustainable technology practices and green IT initiatives.",
            author: "Sustainability Committee, Aegis LLP Group",
            date: "2024-12-03",
            readTime: "5 min read",
            category: "Sustainability",
            tags: ["Green IT", "Sustainability", "Environment"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2812%29-QPTAHO18mqKBVdy0YMVD7OpIez10Da.jpeg",
            likes: 22,
            comments: 4,
        },
    ]

    const categories = [
        "All Posts",
        "Digital Transformation",
        "Technology",
        "Design",
        "Mobile Development",
        "Security",
        "Business Insights",
        "Sustainability",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5" />
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div>
                            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Insights & Updates
                            </Badge>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            Blog & <span className="text-emerald-600">Updates</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Insights, thoughts, and updates from our team of experts on government technology, digital transformation,
                            and innovation in public services.
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <Input
                                    placeholder="Search blog posts..."
                                    className="pl-10 py-3 rounded-xl border-slate-200 bg-white/80 backdrop-blur-sm"
                                />
                            </div>
                            <Button variant="outline" className="px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div>
                        <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative h-64 lg:h-auto">
                                    <Image
                                        src={featuredPost.image || "/placeholder.svg"}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">Featured Post</Badge>

                                    {/* Engagement metrics */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                                        <div className="flex items-center gap-1">
                                            <Heart className="h-4 w-4" />
                                            <span>{featuredPost.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{featuredPost.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Share2 className="h-4 w-4" />
                                            <span>{featuredPost.shares}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                            {featuredPost.category}
                                        </Badge>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">{featuredPost.title}</h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {featuredPost.tags.map((tag, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs">
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <User className="h-4 w-4" />
                                            <span>{featuredPost.author}</span>
                                        </div>
                                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                                            Read Full Post <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 px-4 bg-white/50">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <div key={category}>
                                <Button
                                    variant={index === 0 ? "default" : "outline"}
                                    size="sm"
                                    className={`rounded-full ${index === 0
                                            ? "bg-emerald-600 hover:bg-emerald-700"
                                            : "bg-white/80 backdrop-blur-sm hover:bg-emerald-50"
                                        }`}
                                >
                                    {category}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={post.id} className="group">
                                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full hover:-translate-y-2">
                                    <div className="relative h-48">
                                        <Image
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                        <Badge className="absolute top-3 left-3 bg-white/90 text-slate-700 text-xs">{post.category}</Badge>

                                        {/* Engagement metrics */}
                                        <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-xs">
                                            <div className="flex items-center gap-1">
                                                <Heart className="h-3 w-3" />
                                                <span>{post.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MessageSquare className="h-3 w-3" />
                                                <span>{post.comments}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {post.tags.map((tag, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    #{tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <User className="h-3 w-3" />
                                                <span className="truncate">{post.author.split(",")[0]}</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 p-0">
                                                Read More <ArrowRight className="ml-1 h-3 w-3" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-xl">
                            Load More Posts
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="container mx-auto text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Stay Updated with Our Latest Insights
                        </h2>
                        <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
                            Subscribe to our blog for the latest thoughts on government technology, digital transformation, and
                            innovation in public services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="Enter your email"
                                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70 rounded-xl"
                            />
                            <Button className="bg-white text-emerald-600 hover:bg-slate-50 rounded-xl">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}