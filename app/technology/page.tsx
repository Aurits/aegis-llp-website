"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowUp,
  CheckCircle,
  Code,
  Cpu,
  Filter,
  Globe,
  Lock,
  Search,
  Shield,
  Square,
  TrendingUp,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TechnologyPage() {
  const technologies = [
    {
      category: "クラウドインフラ",
      icon: Square,
      color: "emerald",
      description: "政府運用のためのスケーラブルで安全なクラウドソリューション",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      useCases: ["データ移行", "災害復旧", "自動スケーリング", "マルチリージョン展開"],
      projects: ["大阪府移行", "東京スマートシティプラットフォーム"],
      certifications: ["AWSソリューションアーキテクト", "Azureエキスパート", "Google Cloudプロフェッショナル"],
    },
    {
      category: "データ分析とAI",
      icon: Square,
      color: "slate",
      description: "政府の洞察のための高度な分析とAIソリューション",
      technologies: ["Apache Spark", "Elasticsearch", "Power BI", "TensorFlow", "Python", "R"],
      useCases: ["予測分析", "リアルタイムダッシュボード", "市民行動分析", "リソース最適化"],
      projects: ["京都医療分析", "広島緊急事態予測"],
      certifications: ["Microsoftデータアナリスト", "Googleデータエンジニア", "AWS機械学習"],
    },
    {
      category: "モバイル開発",
      icon: Square,
      color: "emerald",
      description: "市民参加のためのクロスプラットフォームモバイルソリューション",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Progressive Web Apps", "Ionic"],
      useCases: ["市民ポータル", "緊急アラート", "サービスアプリケーション", "デジタルIDシステム"],
      projects: ["名古屋市民アプリ", "東京緊急対応"],
      certifications: ["Appleデベロッパー", "Google Playコンソール", "React Native認定"],
    },
    {
      category: "ウェブ技術",
      icon: Square,
      color: "slate",
      description: "レスポンシブデザインの最新ウェブアプリケーション",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
      useCases: ["政府ポータル", "管理ダッシュボード", "公共ウェブサイト", "内部ツール"],
      projects: ["大阪デジタルサービス", "京都健康ポータル"],
      certifications: ["Reactデベロッパー", "Node.js認定", "TypeScriptエキスパート"],
    },
    {
      category: "サイバーセキュリティ",
      icon: Lock,
      color: "slate",
      description: "機密な政府データのためのエンタープライズグレードセキュリティ",
      technologies: ["OAuth 2.0", "SAML", "Zero Trust", "Encryption", "VPN", "SIEM"],
      useCases: ["アイデンティティ管理", "データ保護", "監査記録", "コンプライアンス監視"],
      projects: ["政府セキュリティフレームワーク", "マルチ機関SSO"],
      certifications: ["CISSP", "CISM", "ISO 27001主审査員"],
    },
    {
      category: "IoTとエッジコンピューティング",
      icon: Square,
      color: "emerald",
      description: "スマートシティのための接続デバイスとエッジ処理",
      technologies: ["Azure IoT", "AWS IoT Core", "Edge Computing", "5G", "LoRaWAN", "MQTT"],
      useCases: ["スマート交通", "環境監視", "資産追跡", "予知保守"],
      projects: ["東京IoTプラットフォーム", "スマートシティセンサー"],
      certifications: ["IoTソリューションアーキテクト", "エッジコンピューティングスペシャリスト"],
    },
  ]

  const dxCases = [
    {
      title: "AI駆動文書処理",
      challenge: "月間100,000件以上の政府文書の手作業処理が遅延を引き起こしていた",
      solution: "OCRとNLPシステムを自動ワークフロールーティングと共に実装",
      outcome: "処理時間の85%短縮、精度の95%向上、年間5億円の節約",
      technologies: ["コンピュータビジョン", "自然言語処理", "ワークフロー自動化"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      client: "大阪府",
    },
    {
      title: "リアルタイム市民サービスプラットフォーム",
      challenge: "市民は自治体サービスでの3時間以上の待ち時間を経験していた",
      solution: "キュー管理とリアルタイム更新を備えた統一デジタルプラットフォームを構築",
      outcome: "待ち時間を15分に短縮、90%のデジタル採用、70%の満足度向上",
      technologies: ["リアルタイムシステム", "キュー管理", "モバイル統合"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      client: "名古屋市",
    },
    {
      title: "予測緊急対応",
      challenge: "緊急サービスはより良いリソース配分と対応予測が必要でした",
      solution: "天気、交通、過去データを分析するAIシステムを開発",
      outcome: "対応時間の40%短縮、60%のリソース利用效率向上、命の救助",
      technologies: ["機械学習", "予測分析", "リアルタイムデータ"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%289%29-KyNOAU353e0JaATfjoxAMSPbS5Mh6V.jpeg",
      client: "広島県",
    },
  ]

  const innovationAreas = [
    {
      icon: Cpu,
      title: "量子コンピューティング",
      description: "複雑な政府最適化問題のための量子アルゴリズムの探索",
      status: "研究段階",
      timeline: "2025-2027",
    },
    {
      icon: Shield,
      title: "ブロックチェーンガバナンス",
      description: "政府取引のための透明で不変な記録保持",
      status: "パイロットテスト",
      timeline: "2024-2025",
    },
    {
      icon: TrendingUp,
      title: "デジタルツインシティ",
      description: "都市計画と災害シミュレーションのための仮想都市モデル",
      status: "開発中",
      timeline: "2024-2026",
    },
    {
      icon: Zap,
      title: "5Gスマートインフラ",
      description: "リアルタイム都市管理のための超低遅延ネットワーク",
      status: "実装中",
      timeline: "2024-2025",
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
                <Code className="w-4 h-4 mr-2" />
                最先端技術スタック
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight mobile-horizontal">
              技術と<span className="text-emerald-600 block">デジタル変革</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              政府および自治体サービスにおける革新を推進する私たちの包括的な技術能力と成功したデジタル変革イニシアティブをご発見ください。
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="技術を検索..."
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

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              私たちの技術スタック
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              デジタルソリューションを支える現代的な技術とフレームワーク
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${tech.color === "emerald" ? "bg-emerald-500" : "bg-slate-500"} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-slate-800">{tech.category}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">技術</h4>
                        <div className="flex flex-wrap gap-1">
                          {tech.technologies.map((t, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-white/80">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">最近のプロジェクト</h4>
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
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">認定</h4>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DX Case Studies */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              デジタル変革の成功事例
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              政府業務を近代化した実際の例
            </p>
          </div>

          <div className="space-y-8">
            {dxCases.map((dxCase, index) => (
              <div key={index}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={dxCase.image || "/placeholder.svg"}
                        alt={dxCase.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/80" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge className="bg-emerald-600 text-white mb-2">{dxCase.client}</Badge>
                        <h3 className="text-xl font-bold">{dxCase.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Challenge */}
                        <div className="border-l-4 border-slate-200 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                              <span className="text-slate-600 font-bold text-sm">01</span>
                            </div>
                            <h4 className="font-bold text-slate-800">課題</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{dxCase.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="border-l-4 border-slate-300 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                              <span className="text-slate-700 font-bold text-sm">02</span>
                            </div>
                            <h4 className="font-bold text-slate-800">解決策</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{dxCase.solution}</p>
                        </div>

                        {/* Outcome */}
                        <div className="border-l-4 border-emerald-200 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <span className="text-emerald-600 font-bold text-sm">03</span>
                            </div>
                            <h4 className="font-bold text-slate-800">結果</h4>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Future Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              革新と未来技術
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              新しい技術と革新的アプローチで先行し続ける
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((item, index) => (
              <div key={index}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center bg-white/90 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div
                      className="w-16 h-16 bg-emerald-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    >
                      <item.icon className="h-8 w-8 text-emerald-600" />
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              業務を近代化する準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              私たちの技術専門家が、最先端のソリューションであなたのデジタル変革の旅をナビゲートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-8 py-4 ">
                <Link href="/contact">プロジェクトを相談</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4 "
              >
                <Link href="/projects">ケーススタディを見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}