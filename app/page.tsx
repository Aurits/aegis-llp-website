"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ZigzagProcess from "@/components/zigzag-process"
import { ArrowRight, Award, Calendar, Layers, Play, Shield, Sparkles, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [isHovering, setIsHovering] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [counters, setCounters] = useState<Record<string, number>>({})
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Text for title
  const titleText = "デジタル革新による信頼構築"

  // Counter animation function
  const animateCounter = useCallback((target: number, key: string) => {
    const duration = 2000
    const start = 0
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (target - start) * easeOutQuart)
      
      setCounters(prev => ({ ...prev, [key]: current }))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id')
          if (sectionId) {
            setVisibleSections((prev) => new Set([...prev, sectionId]))
            
            // Trigger counter animations for stats sections
            if (sectionId === 'companies') {
              animateCounter(8, 'memberCompanies')
              animateCounter(150, 'teamMembers')
              animateCounter(50, 'govProjects')
              animateCounter(18, 'yearsExp')
            }
          }
        }
      })
    }, observerOptions)

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [animateCounter])

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-japanese">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 min-h-screen flex items-center" 
        role="banner"
        aria-label="Hero section with company introduction"
      >
        <div className="container mx-auto relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  経済産業省認定 政府パートナー
                </Badge>
              </div>

              {/* Title - with optional vertical text on large screens */}
              <div className="mb-8 overflow-hidden">
                <div className="flex items-center gap-6">
                  {/* Main horizontal title for mobile/tablet */}
                  <h1 className="flex-1 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl leading-tight mobile-horizontal">
                    {titleText}
                  </h1>
                  
                  {/* Vertical accent text for large screens */}
                  <div className="hidden xl:block">
                    <div className="text-vertical-upright text-lg font-medium text-emerald-600 vertical-text-spacing">
                      革新
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-8 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
                イージス有限責任事業組合は、24時間365日のサポート、実績のある専門知識、経済産業省認定のパートナーシップ構造により、政府機関や自治体向けの包括的なデジタル変革ソリューションを提供しています。
              </p>

              {/* Services - Mobile Optimized */}
              <div className="mb-8">
                <div className="mb-4 text-sm font-medium text-slate-700">私たちの専門分野</div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  {[
                    { icon: Shield, name: "セキュリティ・コンプライアンス" },
                    { icon: Layers, name: "デジタルインフラ" },
                    { icon: Users, name: "市民エンゲージメント" },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-emerald-200/50 bg-white/80 backdrop-blur-sm p-3 sm:p-4 transition-all hover:shadow-lg"
                    >
                      <service.icon className="mb-2 h-5 w-5 text-emerald-600" />
                      <div className="text-sm font-medium text-slate-800 leading-snug">{service.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div>
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                    aria-label="Explore our services and projects"
                  >
                    <Link href="/projects" aria-label="Navigate to services page">サービスを見る</Link>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </div>

                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="flex items-center gap-3 rounded-2xl border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-6 font-medium text-slate-700 transition-all hover:bg-white/90 hover:scale-105 shadow-lg hover:shadow-xl text-lg transform"
                    aria-label="Watch company overview video"
                  >
                    <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600" role="img" aria-label="Play button">
                      <Play className="h-3 w-3 fill-white text-white" aria-hidden="true" />

                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-full border border-emerald-400" aria-hidden="true" />
                    </div>
                    <Link href="/about" aria-label="Navigate to about page with overview video">概要動画を見る</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced with real company image */}
            <div className="relative">
              <div className="relative mx-auto h-[600px] max-w-lg">
                {/* Main Company Showcase Card */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                    alt="Professional team meeting at Aegis LLP Group headquarters showcasing collaborative work environment and government partnership excellence"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-slate-900/60" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-6 inline-block rounded-full bg-emerald-600/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-emerald-300 border border-emerald-400/30">
                      政府パートナーシップの卓越性
                    </div>

                    <h3 className="text-3xl font-bold mb-4">イージス有限責任事業組合</h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      専門的なメンバー企業を通じて、2006年以来政府パートナーシップにおける卓越性を提供し、包括的な公共サービスソリューションを提供しています。
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-emerald-400 mb-1">8+</div>
                        <div className="text-white/80">メンバー企業</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400 mb-1">18+</div>
                        <div className="text-white/80">年間の実績</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                        <div className="text-white/80">システム稼働率</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-400 mb-1">24/7</div>
                        <div className="text-white/80">サポート対応</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -left-16 top-10 z-40 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-800">経済産業省認定</div>
                      <div className="text-slate-600">政府品質基準</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-12 bottom-20 z-40 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-800">LLP構造</div>
                      <div className="text-slate-600">統合された専門知識</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-slate-500">
          <div>
            <div>スクロールしてプロセスを見る</div>
            <ArrowRight className="mx-auto mt-2 h-4 w-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Zigzag Process Section */}
      <ZigzagProcess />

      {/* Key Strengths - Infographic Style */}
      <section 
        ref={(el) => (sectionRefs.current['strengths'] = el)}
        data-section-id="strengths"
        className={`py-20 px-4 relative transition-all duration-1000 ${
          visibleSections.has('strengths') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              政府機関が私たちを選ぶ理由
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              公共部門において私たちを差別化する競争優位性
            </p>
          </div>

          {/* Enhanced infographic-style layout */}
          <div className="max-w-6xl mx-auto">
            {/* 24/7 Support - Prominent Banner - Mobile Optimized */}
            <div className="mb-12 md:mb-16 relative">
              <div className="bg-emerald-600 p-6 md:p-12 text-white relative overflow-hidden">
                <div className="absolute right-4 md:right-8 top-4 md:top-8 opacity-10 md:opacity-20">
                  <Zap className="h-16 w-16 md:h-24 md:w-24" />
                </div>
                <div className="relative z-10 max-w-4xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">24時間365日サポート保証</h3>
                      <p className="text-emerald-100 text-base md:text-lg">重要なシステムは眠らない、私たちも眠らない</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div className="bg-white/10 p-4 md:p-6 backdrop-blur-sm">
                      <div className="text-2xl md:text-3xl font-bold mb-2">&lt; 15 min</div>
                      <div className="text-emerald-100 text-sm md:text-base">緊急対応</div>
                    </div>
                    <div className="bg-white/10 p-4 md:p-6 backdrop-blur-sm">
                      <div className="text-2xl md:text-3xl font-bold mb-2">99.9%</div>
                      <div className="text-emerald-100 text-sm md:text-base">システム稼働率</div>
                    </div>
                    <div className="bg-white/10 p-4 md:p-6 backdrop-blur-sm">
                      <div className="text-2xl md:text-3xl font-bold mb-2">365日</div>
                      <div className="text-emerald-100 text-sm md:text-base">年中無休対応</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LLP Structure & Track Record - Side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* LLP Structure */}
              <div className="bg-white/90 backdrop-blur-sm p-8 shadow-lg border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">LLP構造</h3>
                    <p className="text-blue-600 font-medium">経済産業省認定パートナーシップ</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  私たちのユニークな有限責任事業組合構造は、複数の企業の専門知識を組み合わせ、政府機関に求められる法的透明性と説明責任を維持しながら、包括的なソリューションを提供します。
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-slate-500">メンバー企業数</span>
                  <span className="text-2xl font-bold text-blue-600">8+</span>
                </div>
              </div>

              {/* Proven Track Record */}
              <div className="bg-white/90 backdrop-blur-sm p-8 shadow-lg border border-amber-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-600 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">実績ある経歴</h3>
                    <p className="text-amber-600 font-medium">2006年以来の政府パートナーシップ</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  政府や自治体のデジタル変革プロジェクトにおける豊富な成功事例のポートフォリオを持ち、効率性、市民満足度、運用コスト削減において測定可能な改善を実現しています。
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-slate-500">年間の経験</span>
                  <span className="text-2xl font-bold text-amber-600">18+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Companies - Grid Layout */}
      <section 
        ref={(el) => (sectionRefs.current['companies'] = el)}
        data-section-id="companies"
        className={`py-20 px-4 relative transition-all duration-1000 ${
          visibleSections.has('companies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              私たちのメンバー企業
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              複数の分野の専門知識が一つとして連携し活動しています
            </p>
          </div>

          {/* Clean grid layout with better spacing */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { name: "テックソリューション株式会社", specialty: "クラウドインフラ・DevOps", icon: Shield },
                { name: "データシステムズ株式会社", specialty: "データ分析・AIソリューション", icon: Layers },
                { name: "セキュリティエキスパーツ株式会社", specialty: "サイバーセキュリティ・コンプライアンス", icon: Shield },
                { name: "デジタルサービス株式会社", specialty: "市民エンゲージメントプラットフォーム", icon: Users },
              ].map((company, i) => (
                <div key={i} className="bg-white/90 backdrop-blur-sm p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <company.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2 text-lg">{company.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{company.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="bg-white/90 backdrop-blur-sm p-8 shadow-lg border border-slate-200 mb-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{counters.memberCompanies || 0}+</div>
                  <div className="text-slate-600">専門企業数</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{counters.teamMembers || 0}+</div>
                  <div className="text-slate-600">統合チーム</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{counters.govProjects || 0}+</div>
                  <div className="text-slate-600">政府プロジェクト</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{counters.yearsExp || 0}+</div>
                  <div className="text-slate-600">統合経験年数</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-2xl"
              >
                <Link href="/companies">
                  全企業を見る <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators & Compliance */}
      <section 
        ref={(el) => (sectionRefs.current['compliance'] = el)}
        data-section-id="compliance"
        className={`py-16 px-4 relative transition-all duration-1000 ${
          visibleSections.has('compliance') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 bg-slate-100" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              政府機関に信頼される企業
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              私たちの認証とコンプライアンス基準は、公共部門のパートナーシップにおいて最高レベルのセキュリティと信頼性を保証します
            </p>
          </div>

          {/* Compliance Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {[
              { name: "経済産業省認定", desc: "政府パートナーシップ", icon: Shield },
              { name: "ISO 27001", desc: "情報セキュリティ", icon: Shield },
              { name: "SOC 2 Type II", desc: "サービス組織統制", icon: Shield },
              { name: "GDPR準拠", desc: "データ保護", icon: Shield },
              { name: "WCAG 2.1 AA", desc: "アクセシビリティ基準", icon: Users },
              { name: "PCI DSS", desc: "決済セキュリティ", icon: Shield },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-4 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <cert.icon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-sm font-bold text-slate-800 mb-1">{cert.name}</div>
                <div className="text-xs text-slate-500">{cert.desc}</div>
              </div>
            ))}
          </div>

          {/* Security Stats */}
          <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-slate-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">256-bit</div>
                <div className="text-slate-600 font-medium">SSL暗号化</div>
                <div className="text-xs text-slate-500 mt-1">銀行レベルセキュリティ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                <div className="text-slate-600 font-medium">データ整合性</div>
                <div className="text-xs text-slate-500 mt-1">データ損失ゼロ保証</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600 font-medium">セキュリティ監視</div>
                <div className="text-xs text-slate-500 mt-1">リアルタイム脅威検出</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">&lt; 4時間</div>
                <div className="text-slate-600 font-medium">インシデント対応</div>
                <div className="text-xs text-slate-500 mt-1">平均解決時間</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                最新情報
              </h2>
              <p className="text-xl text-slate-600">
                私たちの最近の開発と成果について最新情報をお届けします
              </p>
            </div>
            <div>
              <Button
                asChild
                variant="outline"
                className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <Link href="/news">全ニュースを見る</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>2024年12月{i + 10}日</span>
                      <Badge variant="secondary" className="ml-auto">
                        ニュース
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors text-lg">
                      大規模デジタル変革プロジェクト完了
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      自治体向けの包括的なDXソリューションを成功裏に提供し、効率性を60%向上させ、市民満足度も大幅に改善...
                    </p>
                    <div className="flex items-center text-emerald-600 mt-4 text-sm font-medium">
                      もっと読む <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
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

        <div className="container mx-auto text-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              デジタルインフラを変革する準備はできていますか？
            </h2>
            <p className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              政府や自治体のニーズに合わせた信頼性が高く革新的なソリューションのために、イージス有限責任事業組合とパートナーシップを組みましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">プロジェクトを開始</Link>
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