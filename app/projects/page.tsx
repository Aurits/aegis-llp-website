"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building2, Calendar, Filter, Lightbulb, Search, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "大阪府デジタルインフラ現代化",
      client: "大阪府政府",
      category: "政府",
      duration: "12ヶ月",
      team: ["テックフロー・ソリューション", "データコア・システムズ", "ウェブクラフト・デジタル"],
      problem:
        "府は280万人の市民に影響を与える15の市役所でレガシーシステムの現代化が必要でした。既存インフラは断片化しており、サービスの遅延と市民の不満を引き起こしていました。",
      proposal:
        "統合市民サービス、リアルタイムデータ分析、モバイルファーストデザインを備えた統一クラウドベースプラットフォームを実装しました。包括的なスタッフ研修と段階的移行戦略を含みました。",
      result:
        "サービス処理時間の65%短縮、市民満足度スコアの40%向上、システム稼働率99.9%を達成しました。すべての15オフィスをゼロダウンタイムで移行しました。",
      technologies: ["クラウドインフラ", "データ分析", "モバイル開発", "システム統合"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg",
      status: "完了",
      year: "2024",
      budget: "¥2.8B",
      impact: "280万人の市民にサービス提供",
    },
    {
      id: 2,
      title: "東京スマートシティIoT統合プラットフォーム",
      client: "東京都政府",
      category: "スマートシティ",
      duration: "18ヶ月",
      team: ["テックフロー・ソリューション", "モバイルファースト・テック", "データコア・システムズ"],
      problem:
        "東京は交通、環境状況、公共インフラを監視し、同時に市民にリアルタイムデータを提供し、予知保守を可能にする統合IoTシステムが必要でした。",
      proposal:
        "10,000個以上のセンサー、AI駆動分析、市民モバイルアプリ、緊急対応と保守のための自動アラートシステムを備えた包括的なIoTプラットフォームを開発しました。",
      result:
        "交通流の30%改善、エネルギー消費の25%削減、緊急対応時間の45%短縮、モバイルアプリを通じた市民参加の300%向上を達成しました。",
      technologies: ["IoT統合", "AI分析", "モバイル開発", "リアルタイム処理"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      status: "完了",
      year: "2023",
      budget: "¥4.2B",
      impact: "1,400万人の市民にサービス提供",
    },
    {
      id: 3,
      title: "京都医療データ管理システム",
      client: "京都府保健部",
      category: "医療",
      duration: "15ヶ月",
      team: ["データコア・システムズ", "テックフロー・ソリューション", "ウェブクラフト・デジタル"],
      problem:
        "医療施設は25の拠点で厄しいプライバシーコンプライアンスの下、患者データ管理、予約スケジューリング、リソース配分のための統一システムが必要でした。",
      proposal:
        "統合スケジューリング、リソース管理、遠隔医療機能、健康洞察のための高度な分析を備えた安全でHIPAA適合のデータ管理システムを作成しました。",
      result:
        "25の施設での運用を合理化し、管理オーバーヘッドを50%削減、患者ケア連携を60%改善し、100%のプライバシーコンプライアンスを達成しました。",
      technologies: ["医療IT", "データセキュリティ", "システム統合", "遠隔医療"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      status: "完了",
      year: "2024",
      budget: "¥1.9B",
      impact: "50万人の患者にサービス提供",
    },
    {
      id: 4,
      title: "名古屋自治体サービスデジタル変革",
      client: "名古屋市政府",
      category: "政府",
      duration: "10ヶ月",
      team: ["ウェブクラフト・デジタル", "モバイルファースト・テック", "データコア・システムズ"],
      problem:
        "市民は自治体サービスで長い待ち時間と複雑な手続きに直面していました。市はすべての年齢層のアクセシビリティを維持しながら50以上のサービスをデジタル化する必要がありました。",
      proposal:
        "直感的なUI/UX、多言語サポート、アクセシビリティ機能、シームレスな市民体験のための統合決済システムを備えた包括的デジタルサービスプラットフォームを構築しました。",
      result:
        "平均サービス完了時間を3時間から15分に短縮、デジタル採用玅85%を達成、市民満足度スコアを70%改善しました。",
      technologies: ["ウェブ開発", "モバイルアプリ", "決済統合", "アクセシビリティ"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
      status: "完了",
      year: "2023",
      budget: "¥1.2B",
      impact: "230万人の市民にサービス提供",
    },
    {
      id: 5,
      title: "広島緊急対応システム",
      client: "広島県",
      category: "緊急サービス",
      duration: "8ヶ月",
      team: ["テックフロー・ソリューション", "モバイルファースト・テック"],
      problem:
        "県は自然災害時の災害対応、市民アラート、リソース管理を調整するための最新緊急対応システムが必要でした。",
      proposal:
        "リアルタイム監視、自動市民アラート、リソース追跡、初期対応者のための連携ツールを備えたAI駆動緊急対応プラットフォームを開発しました。",
      result:
        "緊急対応時間を40%短縮、機関間の連携を60%改善し、3つの主要な気象イベントをシステム障害ゼロで成功的に管理しました。",
      technologies: ["AIシステム", "リアルタイム監視", "モバイルアラート", "リソース管理"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
      status: "進行中",
      year: "2024",
      budget: "¥980M",
      impact: "280万人の市民を保護",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-japanese">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-50/30" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div>
              <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                <Building2 className="w-4 h-4 mr-2" />
                実証された実績
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight mobile-horizontal">
              私たちの
              <span className="text-emerald-600 block">プロジェクト実績</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              政府機関や自治体向けの成功したデジタル変革プロジェクトをご覧ください。私たちの問題→提案→結果の手法を紹介しています。
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="プロジェクトを検索..."
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

      {/* Project Categories */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 bg-slate-100 ">
                <TabsTrigger value="all" className="rounded-lg">
                  全プロジェクト
                </TabsTrigger>
                <TabsTrigger value="government" className="rounded-lg">
                  政府
                </TabsTrigger>
                <TabsTrigger value="smart-city" className="rounded-lg">
                  スマートシティ
                </TabsTrigger>
                <TabsTrigger value="healthcare" className="rounded-lg">
                  医療
                </TabsTrigger>
                <TabsTrigger value="emergency" className="rounded-lg">
                  緊急対応
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              プロジェクトの影響
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              デジタル変革イニシアティブの測定可能な結果
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Card className="text-center border-0 shadow-lg bg-emerald-50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
                  <div className="text-slate-600">完了プロジェクト</div>
                  <div className="text-sm text-slate-500 mt-2">日本全国</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="text-center border-0 shadow-lg bg-slate-50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-slate-600 mb-2">22M+</div>
                  <div className="text-slate-600">市民へのサービス</div>
                  <div className="text-sm text-slate-500 mt-2">直接的な影響</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="text-center border-0 shadow-lg bg-slate-100 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-slate-700 mb-2">99.9%</div>
                  <div className="text-slate-600">平均稼働時間</div>
                  <div className="text-sm text-slate-500 mt-2">システム信頼性</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="text-center border-0 shadow-lg bg-emerald-100 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">55%</div>
                  <div className="text-slate-600">平均効率向上</div>
                  <div className="text-sm text-slate-500 mt-2">プロセス改善</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              デジタル変革を始める準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              私たちの実証済みの問題→提案→結果の手法で、同様の成果を達成するお手伝いをします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-8 py-4 ">
                <Link href="/contact">プロジェクトを開始</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 "
              >
                <Link href="/technology">技術を見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div>
      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
        <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
          <div className={`relative h-64 lg:h-auto ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>

            {/* Project Stats Overlay */}
            <div className="absolute top-4 left-4 space-y-2">
              <Badge className={`${project.status === "完了" ? "bg-emerald-600" : "bg-blue-600"} text-white`}>
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
                  <div className="text-white/80">プロジェクト予算</div>
                </div>
                <div>
                  <div className="font-bold">{project.impact}</div>
                  <div className="text-white/80">影響を受けた市民</div>
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
            <p className="text-slate-600 mb-6">クライアント: {project.client}</p>

            <div className="space-y-6">
              {/* Problem */}
              <div className="border-l-4 border-slate-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-800">問題</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
              </div>

              {/* Proposal */}
              <div className="border-l-4 border-slate-300 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-slate-700" />
                  <h4 className="font-semibold text-slate-800">提案</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.proposal}</p>
              </div>

              {/* Result */}
              <div className="border-l-4 border-emerald-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-semibold text-slate-800">結果</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Users className="h-4 w-4" />
                  <span>チーム: {project.team.join(", ")}</span>
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
                ケーススタディを見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}