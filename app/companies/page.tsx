"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import ServiceShowcase from "@/components/service-showcase"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Building2, CheckCircle as QualityIcon, Cloud, Square, Database, Square as MobileIcon, Users, ArrowRight as SpeedIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "テックフロー・ソリューション",
      specialization: "デジタルインフラ",
      description: "政府のデジタルインフラとクラウド移行サービスを専門としています",
      icon: Cloud,
      bgGradient: "from-emerald-50/80 to-teal-50/80",
      services: ["クラウド移行", "インフラ設計", "システム統合"],
      established: "2018",
    },
    {
      id: 2,
      name: "データコア・システムズ",
      specialization: "データ管理",
      description: "自治体向けの専門的なデータ管理と分析ソリューション",
      icon: Database,
      bgGradient: "from-slate-50/80 to-slate-50/80",
      services: ["データ分析", "データベース設計", "ビジネスインテリジェンス"],
      established: "2016",
    },
    {
      id: 3,
      name: "ウェブクラフト・デジタル",
      specialization: "ウェブ開発",
      description: "公共部門組織向けの最新ウェブアプリケーションとデジタルプラットフォーム",
      icon: Square,
      bgGradient: "from-slate-50/80 to-slate-50/80",
      services: ["ウェブ開発", "UI/UXデザイン", "デジタルプラットフォーム"],
      established: "2019",
    },
    {
      id: 4,
      name: "モバイルファースト・テック",
      specialization: "モバイルソリューション",
      description: "市民参加のためのモバイルアプリケーションとレスポンシブソリューション",
      icon: MobileIcon,
      bgGradient: "from-slate-50/80 to-slate-50/80",
      services: ["モバイルアプリ", "レスポンシブデザイン", "市民ポータル"],
      established: "2020",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Building2 className="w-4 h-4 mr-2" />8つの専門企業、1つのビジョン
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                私たちの
                <span className="text-emerald-600 block">
                  メンバー企業
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                各メンバー企業は独自の専門知識と特化した知識を持ち寄り、イージスLLP構造の下で協力して包括的なデジタルソリューションを提供します。
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/projects">私たちの実績を見る</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-lg px-8 py-6"
                >
                  <Link href="/contact">プロジェクトを開始</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Company overview with real image */}
            <div>
              <div className="relative">
                <div className="bg-white shadow-2xl overflow-hidden border border-slate-100">
                  <div className="relative h-64">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                      alt="Aegis Group Company Overview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">グループ企業</h3>
                      <p className="text-white/90">複数ドメインにわたる専門知識</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">総企業数</p>
                        <p className="text-2xl font-bold text-emerald-600">8</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">サービス領域</p>
                        <p className="text-2xl font-bold text-slate-600">15+</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">年間経験</p>
                        <p className="text-2xl font-bold text-slate-600">18+</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">完了プロジェクト</p>
                        <p className="text-2xl font-bold text-slate-600">200+</p>
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
                      <div className="font-medium text-slate-800">統一チーム</div>
                      <div className="text-slate-600">1つのビジョン</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-10 bottom-10 z-10 rounded-lg bg-white shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <QualityIcon className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">品質保証</div>
                      <div className="text-slate-600">認定された卓越性</div>
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
              メンバー企業
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              1つの統一チームとして協力する専門知識
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div key={company.id}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div
                    className="absolute inset-0 bg-emerald-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardHeader className="relative z-10 pb-8">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-20 h-20 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg"
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
                      <h4 className="font-semibold text-slate-800 mb-3">主要サービス</h4>
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
                            詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
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
        <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              企業間連携
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              メンバー企業が連携して包括的なソリューションを提供する実際の事例
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Cloud className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                      連携プロジェクト
                    </Badge>
                  </div>
                  <CardTitle className="text-slate-800 text-xl">自治体データプラットフォーム</CardTitle>
                  <CardDescription className="leading-relaxed">
                    テックフローソリューションがクラウドインフラを提供し、データコアシステムズがデータアーキテクチャと分析を担当した包括的な自治体データプラットフォーム。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "部門間でのシームレスなデータ統合",
                      "リアルタイム分析とレポート",
                      "スケーラブルなクラウドインフラ",
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
                      <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Square className="h-5 w-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <MobileIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                      連携プロジェクト
                    </Badge>
                  </div>
                  <CardTitle className="text-slate-800 text-xl">市民エンゲージメントポータル</CardTitle>
                  <CardDescription className="leading-relaxed">
                    ウェブクラフトデジタルがウェブプラットフォームを作成し、モバイルファーストテックが市民エンゲージメント向上のための付随モバイルアプリを開発。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "プラットフォーム間での統一されたユーザー体験",
                      "モバイルファーストのレスポンシブデザイン",
                      "市民参加の向上",
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
              なぜ私たちとパートナーシップを？
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              私たちの統一されたLLP構造で働くことの利点
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "統一チーム",
                description: "あなたの成功に向けて働く、多様な専門知識を持つ1つの協調チーム",
                color: "emerald",
              },
              {
                icon: QualityIcon,
                title: "品質保証",
                description: "すべてのメンバー企業で維持される一貫した品質基準",
                color: "emerald",
              },
              {
                icon: SpeedIcon,
                title: "迅速な展開",
                description: "協調された専門知識とリソースによる迅速なプロジェクト実行",
                color: "slate",
                        },
            ].map((item, index) => (
              <div key={index}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg text-center bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-8">
                    <div
                      className={`w-20 h-20 bg-${item.color === 'slate' ? 'slate-600' : item.color + '-600'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
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
        <div className="absolute inset-0 bg-emerald-600" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-emerald-400/20 blur-3xl" />

        <div className="container mx-auto text-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              私たちの専門チームと協力する準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              メンバー企業とのつながりを築き、私たちの協調的なアプローチがプロジェクトにどのような利益をもたらすかをご発見ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/projects">私たちの実績を見る</Link>
                </Button>
              </div>
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">プロジェクトを開始</Link>
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