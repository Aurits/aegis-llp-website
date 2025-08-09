"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Filter, Search, TrendingUp, User } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const featuredNews = {
    id: 1,
    title: "イージスLLPグループ、大阪府の大規模デジタルインフラ契約を受注",
    excerpt:
      "私たちのコンソーシアムが大阪府の自治体サービスのデジタル変革イニシアティブを主導することに選出され、これまでで最大の政府パートナーシップとなります。",
    content:
      "この画期的な契約により、イージスLLPグループは15の市役所にわたって包括的なデジタルインフラの見直しを実施し、280万人以上の市民に影響を与えます...",
    author: "イージス広報チーム",
    date: "2024-12-15",
    readTime: "5 分で読む",
    category: "重要発表",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
    featured: true,
  }

  const newsArticles = [
    {
      id: 2,
      title: "東京都とのスマートシティイニシアティブのための新しいパートナーシップ",
      excerpt:
        "イージスLLPグループが東京都と提携し、首都のインフラネットワーク全体にIoTソリューションを実装します。",
      author: "戦略的パートナーシップチーム",
      date: "2024-12-10",
      readTime: "3 分で読む",
      category: "パートナーシップ",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
    },
    {
      id: 3,
      title: "京都デジタル変革プロジェクトの成功完了",
      excerpt:
        "京都の自治体サービスの18か月間のデジタル見直しにより、60%の効率改善と市民満足度の向上を実現しました。",
      author: "プロジェクト管理室",
      date: "2024-12-08",
      readTime: "4 分で読む",
      category: "プロジェクト更新",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
    },
    {
      id: 4,
      title: "イージスLLPグループがメンバー会社ポートフォリオを拡大",
      excerpt:
        "私たちのLLP構造に2つの新しい専門会社を迎え、AIとサイバーセキュリティの能力を強化します。",
      author: "企業開発部",
      date: "2024-12-05",
      readTime: "2 分で読む",
      category: "会社ニュース",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
    },
    {
      id: 5,
      title: "業界認定：公共サービス革新に対するMETI優秀賞",
      excerpt:
        "イージスLLPグループが、公共部門のデジタル化への卓越した貢献により、経済産業省から権威ある認定を受けました。",
      author: "表彰委員会",
      date: "2024-12-01",
      readTime: "3 分で読む",
      category: "受賞・認定",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
    },
    {
      id: 6,
      title: "四半期報告書：2024年第4四半期業績ハイライト",
      excerpt:
        "政府パートナーシップの強力な成長と成功したプロジェクト提供により、イージスLLPグループにとって例外的な四半期となりました。",
      author: "経営陣",
      date: "2024-11-28",
      readTime: "6 分で読む",
      category: "財務報告",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg",
    },
  ]

  const categories = [
    "すべてのニュース",
    "重要発表",
    "プロジェクト更新",
    "パートナーシップ",
    "会社ニュース",
    "受賞・認定",
    "財務報告",
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
                <TrendingUp className="w-4 h-4 mr-2" />
                最新アップデート・インサイト
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              ニュース・<span className="text-emerald-600">更新</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              政府デジタル変革における私たちの最新プロジェクト、パートナーシップ、イノベーションについて最新情報をお届けします。
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="ニュースと更新を検索..."
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
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">注目記事</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      {featuredNews.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">{featuredNews.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">{featuredNews.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="h-4 w-4" />
                      <span>{featuredNews.author}</span>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      記事全文を読む <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div key={article.id} className="group">
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-slate-700 text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
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
              さらに記事を読み込む
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              イージスLLPグループの最新情報を入手
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              政府パートナーシップとデジタル変革イニシアティブの最新情報をお届けするニュースレターにご登録ください。
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