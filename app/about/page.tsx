"use client"

import AboutConcept from "@/components/about-concept"
import CompanyTimeline from "@/components/company-timeline"
import CompanyValues from "@/components/company-values"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden font-japanese">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Scale className="w-4 h-4 mr-2" />
                  経済産業省認定 LLP構造
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight mobile-horizontal">
                私たちの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 block">
                  LLP構造について
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                イージスLLPグループは有限責任事業組合として運営され、経済産業省（METI）に認定された統一構造の下で、複数の専門企業の知識を組み合わせています。
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/companies">企業一覧</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-lg px-8 py-6"
                >
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Logo and info */}
            <div>
              <div className="relative">
                <div className="bg-white shadow-2xl p-8 border border-slate-100">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-64 h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2812%29-QPTAHO18mqKBVdy0YMVD7OpIez10Da.jpeg"
                        alt="Aegis Group Logo and Contact Information"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-bold text-slate-800">イージスグループ</h3>
                    <p className="text-slate-600">有限責任事業組合</p>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-left">
                          <p className="font-medium text-slate-700">本社</p>
                          <p className="text-slate-600">三重県、日本</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">設立</p>
                          <p className="text-slate-600">2006年</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">メンバー企業</p>
                          <p className="text-slate-600">8つの専門企業</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">認証</p>
                          <p className="text-slate-600">経済産業省認定</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -left-10 top-10 z-10 rounded-lg bg-white shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">政府パートナー</div>
                      <div className="text-slate-600">2006年以来</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-10 bottom-10 z-10 rounded-lg bg-white shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">LLP構造</div>
                      <div className="text-slate-600">専門知識</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <AboutConcept />

      {/* Company Values Section */}
      <CompanyValues />

      {/* Timeline Section */}
      <CompanyTimeline />

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-blue-700" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-3xl" />

        <div className="container mx-auto text-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              LLPの優位性を体験する準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              私たちのユニークなパートナーシップ構造が、組織のデジタル変革の旅にどのような利益をもたらすかをご発見ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/companies">企業一覧を見る</Link>
                </Button>
              </div>
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">コンサルテーション予約</Link>
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