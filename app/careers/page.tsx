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
      title: "シニア政府ソリューションアーキテクト",
      department: "テックフローソリューション",
      location: "東京都",
      type: "正社員",
      level: "シニア",
      description:
        "政府機関向けデジタルインフラソリューションの設計・実装をリードします。自治体パートナーと直接連携し、公共サービスの変革に取り組みます。",
      requirements: [
        "エンタープライズアーキテクチャでの5年以上の経験",
        "政府部門での業務経験",
        "クラウドプラットフォームの専門知識",
        "日本語ビジネスレベル",
      ],
      benefits: ["競争力のある給与", "政府プロジェクトへの参画", "専門能力開発", "健康保険"],
    },
    {
      id: 2,
      title: "データ分析スペシャリスト",
      department: "データコアシステムズ",
      location: "大阪府",
      type: "正社員",
      level: "中級",
      description:
        "自治体データプラットフォーム向けの分析ソリューションを開発します。政策決定を促進し、市民サービスを向上させるインサイトを創出します。",
      requirements: [
        "データ分析での3年以上の経験",
        "Python/Rの習熟",
        "公共部門の理解",
        "統計モデリングの経験",
      ],
      benefits: ["柔軟な働き方", "研修予算", "社会貢献性の高い仕事", "チーム連携"],
    },
    {
      id: 3,
      title: "UX/UIデザイナー - 公共サービス",
      department: "ウェブクラフト・デジタル",
      location: "リモート/ハイブリッド",
      type: "正社員",
      level: "ミドルレベル",
      description:
        "市民向け政府アプリケーションの直感的なインターフェースをデザインします。多様な人口統計のアクセシビリティとユーザーエクスペリエンスに焦点を当てます。",
      requirements: [
        "UX/UIデザインで4年以上",
        "アクセシビリティ標準の知識",
        "政府アプリ経験",
        "デザインシステムの専門知識",
      ],
      benefits: ["リモート柔軟性", "クリエイティブな自由", "ユーザーへの影響", "デザインカンファレンス"],
    },
    {
      id: 4,
      title: "モバイル開発エンジニア",
      department: "モバイルファースト・テック",
      location: "日本、京都",
      type: "正社員",
      level: "シニア",
      description:
        "市民と政府サービスを結ぶモバイルアプリケーションを構築します。セキュリティとパフォーマンスに焦点を当てたクロスプラットフォームソリューションを開発します。",
      requirements: [
        "React Native/Flutter",
        "モバイル開発5年以上",
        "セキュリティベストプラクティス",
        "政府コンプライアンス知識",
      ],
      benefits: ["技術的成長", "イノベーション時間", "カンファレンス参加", "メンタリングの機会"],
    },
    {
      id: 5,
      title: "プロジェクトマネージャー - デジタル変革",
      department: "イージスLLPグループ",
      location: "三重県",
      type: "正社員",
      level: "シニア",
      description:
        "政府クライアント向けの大規模デジタル変革プロジェクトを管理します。複数のメンバー企業とステークホルダーグループ間で調整します。",
      requirements: [
        "PMP認定資格優遇",
        "政府プロジェクト経験",
        "ステークホルダー管理",
        "アジャイル手法",
      ],
      benefits: ["リーダーシップ開発", "クロスカンパニー経験", "戦略的関与", "経営メンタリング"],
    },
    {
      id: 6,
      title: "サイバーセキュリティアナリスト",
      department: "セキュリティ部門",
      location: "日本、東京",
      type: "正社員",
      level: "ミドルレベル",
      description:
        "政府システムのセキュリティコンプライアンスを保証します。セキュリティ評価を実施し、機密な公共データの保護対策を実装します。",
      requirements: [
        "セキュリティ認定資格",
        "政府セキュリティ標準",
        "インシデント対応経験",
        "リスク評価スキル",
      ],
      benefits: ["セキュリティ研修", "認定資格サポート", "重要インフラ業務", "エキスパートメンタリング"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "意味のある仕事",
      description: "市民の生活と政府の効率を直接改善するプロジェクトに貢献します",
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: "キャリア成長",
      description: "最先端の政府技術プロジェクトへの関与でキャリアを発展させます",
      color: "blue",
    },
    {
      icon: Users,
      title: "協力的文化",
      description: "独特のLLP構造内の複数の専門会社で連携します",
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "継続的学習",
      description: "研修、認定資格、専門能力開発の機会へのアクセス",
      color: "amber",
    },
    {
      icon: Shield,
      title: "雇用保障",
      description: "政府契約と長期パートナーシップによる安定した雇用",
      color: "rose",
    },
    {
      icon: Award,
      title: "表彰",
      description: "METIや業界リーダーに認められた受賞プロジェクトの一員になります",
      color: "indigo",
    },
  ]

  const companyValues = [
    {
      title: "公共サービスの卓越性",
      description: "私たちは公共サービスの代理人として、すべての運用において公平性と透明性を保証します。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg",
    },
    {
      title: "ユーザー焦点のイノベーション",
      description: "私たちは市民の視点からサービスの卓越性をたゆまなく追求します。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
    },
    {
      title: "意味のある作業環境",
      description: "私たちはチームメンバーが成長と充実感を経験できる職場を育成します。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 font-japanese">
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
                  私たちのミッションに参加
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight mobile-horizontal">
                未来の
                <span className="text-emerald-600 block">公共サービスを構築</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                イージス有限責任事業組合に参加し、数百万人の市民のための政府サービス変革の一員になりましょう。社会に真の変化をもたらす意義あるプロジェクトに取り組みます。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 ">
                  求人情報を見る <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className=" bg-white/80 backdrop-blur-sm">
                  企業文化について
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative  overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                  alt="Aegis LLP Group Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">私たちのチームに参加</h3>
                  <p className="text-white/90">8 specialized companies, one unified mission</p>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-8 -right-8 bg-white  shadow-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-slate-600">チームメンバー</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white  shadow-xl p-4 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">18+</div>
                  <div className="text-sm text-slate-600">年間経験</div>
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
              私たちの価値観と文化
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              イージスLLPグループでは、公共の利益に貢献する意義ある仕事の創造を信念としています
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
              なぜ私たちと一緒に働くのですか？
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              日本をリードする政府技術パートナーシップに参加する利点をご発見ください
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card className="text-center p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-400 to-${benefit.color}-600  flex items-center justify-center mx-auto mb-6 shadow-lg`}
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
              現在の求人
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              私たちのチームに参加し、日本の政府技術の未来を形作るお手伝いをしてください
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
                        <Button className="bg-emerald-600 hover:bg-emerald-700 ">
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
              変化をもたらす準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              イージスLLPグループに参加し、日本のデジタル変革の旅の一員になりましょう。あなたのスキルが数百万人の生活を改善するお手伝いができます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-50 ">
                すべてのポジションを見る
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 "
              >
                人事チームに連絡
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}