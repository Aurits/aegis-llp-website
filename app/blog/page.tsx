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
        title: "日本における政府デジタル変革の未来",
        excerpt:
            "AI、IoT、ブロックチェーンなどの新興技術が日本の自治体全体で公共サービスと市民参加をどのように再構築しているかを探ります。",
        content:
            "デジタル時代が深化する中、日本の政府機関は前例のないペースで変革的技術を取り入れています。AI駆動の市民サービスからIoT対応のスマートシティまで、行政の風景は急速に進化しています...",
        author: "田中博、テックフロー・ソリューションズCTO",
        date: "2024-12-18",
        readTime: "8 分で読む",
        category: "デジタル変革",
        tags: ["AI", "政府", "スマートシティ", "イノベーション"],
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
            title: "透明な政府APIによる信頼構築",
            excerpt:
                "オープンAPIがいかに透明性を促進し、サードパーティ開発者が革新的な市民サービスを創造することを可能にしているかを解説します。",
            author: "佐藤雪、データコア・システムズデータサイエンス責任者",
            date: "2024-12-15",
            readTime: "6 分で読む",
            category: "技術",
            tags: ["API", "透明性", "オープンデータ"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
            likes: 28,
            comments: 5,
        },
        {
            id: 3,
            title: "政府サービスのUXデザイン：学んだ教訓",
            excerpt:
                "多様な人口統計とアクセシビリティのニーズに対応する市民向けアプリケーションの設計から得た重要な洞察。",
            author: "山本明子、ウェブクラフト・デジタルクリエイティブディレクター",
            date: "2024-12-12",
            readTime: "5 分で読む",
            category: "デザイン",
            tags: ["UXデザイン", "アクセシビリティ", "市民サービス"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
            likes: 35,
            comments: 12,
        },
        {
            id: 4,
            title: "モバイルファースト政府：市民参加になぜアプリが重要か",
            excerpt:
                "市民を政府サービスや緊急対応システムと結ぶモバイルアプリケーションの重要性の高まりについて。",
            author: "中村健二、モバイルファーストテック・モバイル技術リード",
            date: "2024-12-10",
            readTime: "4 分で読む",
            category: "モバイル開発",
            tags: ["モバイルアプリ", "市民参加", "緊急対応"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
            likes: 31,
            comments: 7,
        },
        {
            id: 5,
            title: "政府におけるサイバーセキュリティ：デジタル時代の市民データ保護",
            excerpt:
                "政府サイバーセキュリティのベストプラクティスと新たな脅威、機密市民情報の保護に焦点を当てます。",
            author: "セキュリティチーム、イージスLLPグループ",
            date: "2024-12-08",
            readTime: "7 分で読む",
            category: "セキュリティ",
            tags: ["サイバーセキュリティ", "データ保護", "プライバシー"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
            likes: 45,
            comments: 9,
        },
        {
            id: 6,
            title: "LLPの利点：私たちの構造が政府パートナーにどのように利益をもたらすか",
            excerpt:
                "包括的な政府ソリューションの提供における有限責任パートナーシップモデルの独特の利点を理解します。",
            author: "経営陣、イージスLLPグループ",
            date: "2024-12-05",
            readTime: "6 分で読む",
            category: "ビジネス洞察",
            tags: ["LLP", "パートナーシップ", "政府関係"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg",
            likes: 38,
            comments: 6,
        },
        {
            id: 7,
            title: "持続可能技術：政府におけるグリーンIT実践",
            excerpt:
                "政府機関が持続可能な技術実践とグリーンITイニシアティブを通じて環境への影響を削減する方法。",
            author: "持続可能性委員会、イージスLLPグループ",
            date: "2024-12-03",
            readTime: "5 分で読む",
            category: "持続可能性",
            tags: ["グリーンIT", "持続可能性", "環境"],
            image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2812%29-QPTAHO18mqKBVdy0YMVD7OpIez10Da.jpeg",
            likes: 22,
            comments: 4,
        },
    ]

    const categories = [
        "すべての投稿",
        "デジタル変革",
        "技術",
        "デザイン",
        "モバイル開発",
        "セキュリティ",
        "ビジネス洞察",
        "持続可能性",
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-50/30" />
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div>
                            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                洞察・アップデート
                            </Badge>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            ブログ・<span className="text-emerald-600">更新</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            政府技術、デジタル変革、公共サービスのイノベーションに関する専門家チームからの洞察、考察、更新情報。
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <Input
                                    placeholder="ブログ投稿を検索..."
                                    className="pl-10 py-3  border-slate-200 bg-white/80 backdrop-blur-sm"
                                />
                            </div>
                            <Button variant="outline" className="px-6 py-3  bg-white/80 backdrop-blur-sm">
                                <Filter className="w-4 h-4 mr-2" />
                                フィルター
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
                                    <div className="absolute inset-0 bg-slate-900/60" />
                                    <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">注目投稿</Badge>

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
                                            投稿全文を読む <ArrowRight className="ml-2 h-4 w-4" />
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
                                        <div className="absolute inset-0 bg-slate-900/60" />
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
                                                続きを読む <ArrowRight className="ml-1 h-3 w-3" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 ">
                            さらに投稿を読み込む
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 px-4 bg-emerald-600">
                <div className="container mx-auto text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            最新の洞察で常に最新情報を入手
                        </h2>
                        <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
                            政府技術、デジタル変革、公共サービスのイノベーションに関する最新の考察をお届けするブログをご購読ください。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="メールアドレスを入力"
                                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70 "
                            />
                            <Button className="bg-white text-emerald-600 hover:bg-slate-50 ">登録</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}