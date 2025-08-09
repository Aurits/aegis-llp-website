"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, Square, Square as LinkedinIcon, Mail, MapPin, Phone, Shield, Square as TwitterIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    company: [
      { href: "/about", label: "LLPについて" },
      { href: "/companies", label: "メンバー企業" },
      { href: "/careers", label: "採用情報" },
      { href: "/contact", label: "お問い合わせ" },
    ],
    services: [
      { href: "/projects", label: "プロジェクト" },
      { href: "/technology", label: "技術・DX" },
      { href: "/consulting", label: "コンサルティング" },
      { href: "/support", label: "24/7サポート" },
    ],
    resources: [
      { href: "/news", label: "最新ニュース" },
      { href: "/blog", label: "ブログ・更新情報" },
      { href: "/case-studies", label: "導入事例" },
      { href: "/documentation", label: "資料・文書" },
    ],
    legal: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
      { href: "/compliance", label: "コンプライアンス" },
      { href: "/security", label: "セキュリティ" },
    ],
  }

  const socialLinks = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: Square, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-emerald-900/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.png')]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg" />
                  <Shield className="h-10 w-10 text-emerald-400 relative z-10" />
                </div>
                <div>
                  <span className="text-2xl font-bold">イージス LLP</span>
                  <p className="text-emerald-400 text-sm">デジタル革新</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                政府と自治体パートナーのためのデジタル革新を通じて信頼を構築しています。私たちのLLP構造は専門知識を組み合わせ、包括的なソリューションを提供します。
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>contact@aegisllp.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>+81-3-1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span>東京都</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 border border-slate-700/50"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white">企業情報</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">サービス</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">資料・情報</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">法的事項</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 p-8 bg-emerald-600/10 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold mb-2">最新情報を受信</h3>
              <p className="text-slate-300 mb-6">
                プロジェクト、技術更新、政府パートナーシップに関する最新ニュースを受信できます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-200"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 px-8">
                  登録
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                &copy; 2024 イージスLLP グループ. 全権利留保 | 経済産業省認定パートナーシップ
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-sm">
                  {footerLinks.legal.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-emerald-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-emerald-400 hover:bg-emerald-600/30 transition-all duration-300 border border-emerald-400/20"
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}