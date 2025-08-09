"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Calendar, Mail, MapPin, MessageSquare, Phone, Send, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "電話サポート",
      description: "政府パートナー向けの24時間365日技術サポート",
      contact: "+81-3-1234-5678",
      availability: "24時間365日対応",
      color: "emerald",
    },
    {
      icon: Mail,
      title: "メールでの連絡",
      description: "一般的なお問い合わせとパートナーシップに関する相談",
      contact: "contact@aegisllp.com",
      availability: "24時間以内に回答",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "プロジェクト相談",
      description: "デジタル変革のニーズについてのコンサルテーションを予約",
      contact: "projects@aegisllp.com",
      availability: "コンサルテーション可能",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "緊急サポート",
      description: "政府業務における重要システムのサポート",
      contact: "emergency@aegisllp.com",
      availability: "即座の対応",
      color: "rose",
    },
  ]

  const offices = [
    {
      name: "本社",
      address: "三重県、日本",
      description: "メインオフィスと調整センター",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2812%29-QPTAHO18mqKBVdy0YMVD7OpIez10Da.jpeg",
      departments: ["経営陣", "戦略企画", "LLP調整"],
    },
    {
      name: "東京オフィス",
      address: "東京都市圏",
      description: "政府関係とプロジェクト管理",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg",
      departments: ["政府関係", "プロジェクト管理", "技術サポート"],
    },
    {
      name: "大阪オペレーション",
      address: "大阪府",
      description: "地域業務とクライアントサービス",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg",
      departments: ["地域業務", "クライアントサービス", "実装"],
    },
  ]

  const serviceAreas = [
    {
      icon: Shield,
      title: "政府パートナーシップ",
      description: "自治体および都道府県レベルのデジタル変革プロジェクト",
    },
    {
      icon: Building2,
      title: "インフラソリューション",
      description: "クラウド移行、システム統合、および近代化サービス",
    },
    {
      icon: Users,
      title: "市民サービス",
      description: "市民エンゲージメントとサービス提供を向上させるデジタルプラットフォーム",
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
                  <MessageSquare className="w-4 h-4 mr-2" />
                  お問い合わせ
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight mobile-horizontal">
                あなたの
                <span className="text-emerald-600 block">デジタルな未来を変革</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                政府業務の近代化の準備はできていますか？イージスLLPグループにご連絡いただき、デジタル変革のニーズについて相談し、私たちの専門知識が組織にどのような利益をもたらすかをご発見ください。
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm  shadow-lg">
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-slate-600">サポート</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm  shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-slate-600">政府パートナー</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm  shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-slate-600">稼働率</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Contact Form */}
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">プロジェクトを開始</CardTitle>
                  <CardDescription>
                    デジタル変革のニーズについてお聞かせください。24時間以内にご連絡いたします。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">姓</label>
                      <Input placeholder="姓を入力" className="" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">名</label>
                      <Input placeholder="名を入力" className="" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">メールアドレス</label>
                    <Input type="email" placeholder="your.email@organization.gov.jp" className="" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">組織・機関</label>
                    <Input placeholder="政府機関または自治体名" className="" />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="text-sm font-medium text-slate-700 mb-2 block">プロジェクトタイプ</label>
                    <select
                      id="project-type"
                      className="w-full p-3 border border-slate-200  bg-white"
                    >
                      <option>デジタルインフラ</option>
                      <option>市民サービスプラットフォーム</option>
                      <option>データ分析ソリューション</option>
                      <option>モバイルアプリケーション</option>
                      <option>システム統合</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">メッセージ</label>
                    <Textarea
                      placeholder="プロジェクトの要件と目標を記述してください..."
                      className=" min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700  py-3">
                    <Send className="w-4 h-4 mr-2" />
                    メッセージを送信
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              複数の連絡方法
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              あなたのニーズに最適なコミュニケーション方法をお選びください
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index}>
                <Card className="text-center p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${method.color}-400 to-${method.color}-600  flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <div className="font-medium text-slate-800">{method.contact}</div>
                    <Badge variant="outline" className="text-xs">
                      {method.availability}
                    </Badge>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              私たちがお手伝いできること
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              政府および自治体組織向けの専門サービス
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((service, index) => (
              <div key={index}>
                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm text-center">
                  <div
                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600  flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              私たちの拠点
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              政府パートナーにサービスを提供するための日本全国の戦略的拠点
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
                  <div className="relative h-48">
                    <Image src={office.image || "/placeholder.svg"} alt={office.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{office.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-slate-600 mb-3">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span>{office.address}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{office.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-700">部門：</div>
                      <div className="flex flex-wrap gap-1">
                        {office.departments.map((dept, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {dept}
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

      {/* Emergency Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="container mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              緊急サポート対応可能
            </h2>
            <p className="text-rose-100 text-xl mb-8 max-w-2xl mx-auto">
              重要なシステムの問題がありますか？緊急対応チームが政府パートナーに24時間365日対応しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-slate-50 ">
                <Phone className="w-4 h-4 mr-2" />
                緊急ホットライン
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 "
              >
                <Mail className="w-4 h-4 mr-2" />
                緊急メール
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}