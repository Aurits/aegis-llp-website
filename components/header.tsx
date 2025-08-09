"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, Phone, Shield, X, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/about", label: "LLPについて" },
    {
      href: "/companies",
      label: "企業一覧",
      dropdown: [
        { href: "/companies", label: "全企業" },
        { href: "/companies/1", label: "テックフローソリューション" },
        { href: "/companies/2", label: "データコアシステム" },
        { href: "/companies/3", label: "ウェブクラフトデジタル" },
        { href: "/companies/4", label: "モバイルファーストテック" },
      ],
    },
    { href: "/projects", label: "プロジェクト" },
    { href: "/technology", label: "技術・DX" },
    {
      href: "/news",
      label: "最新情報",
      dropdown: [
        { href: "/news", label: "最新ニュース" },
        { href: "/blog", label: "ブログ・更新情報" },
      ],
    },
    { href: "/careers", label: "採用情報" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* 24/7 Support Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="font-medium">24時間365日政府サポート</span>
              <span className="hidden sm:inline text-emerald-200">• 緊急対応 &lt; 15分</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">緊急時: +81-3-1234-5678</span>
              </div>
              <Button
                size="sm" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-xs py-1 px-3"
              >
                サポートに連絡
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <nav
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg group-hover:bg-emerald-400/30 transition-colors" />
                  <Shield className="h-10 w-10 text-emerald-600 relative z-10 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors font-sans">
                    イージス LLP
                  </span>
                  <span className="text-xs text-slate-500 -mt-1 font-medium">デジタル革新</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group relative ${isActive(item.href)
                          ? "text-emerald-600 bg-emerald-50/80"
                          : "text-slate-600 hover:text-emerald-600 hover:bg-white/60"
                        }`}
                    >
                      <span className="relative z-10 font-sans">{item.label}</span>
                      {item.dropdown && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      )}
                      {isActive(item.href) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-xl" />
                      )}
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-colors rounded-lg mx-2 font-sans"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div>
                <Button
                  asChild
                  className="ml-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                >
                  <Link href="/contact">
                    <span className="relative z-10">お問い合わせ</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <div>
                  <X className="h-6 w-6" />
                </div>
              ) : (
                <div>
                  <Menu className="h-6 w-6" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors font-sans ${isActive(item.href)
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 font-sans"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    お問い合わせ
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-28" />
    </>
  )
}