"use client"

import { Building2, Scale, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function ServiceShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">私たちのサービス領域</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            イージスLLPグループは、公共サービス提供の卓越性を保証し、複数の分野にわたって包括的なサービスを提供しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Service categories */}
          <div className="space-y-8">
            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">施設管理</h3>
                  <p className="text-slate-600 mb-4">
                    政府施設の包括的な管理とメンテナンスで、最適な操作と長寿命を保証します。
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>建物メンテナンス</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>セキュリティサービス</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>防火サービス</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>設備点検</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">料金道路管理</h3>
                  <p className="text-slate-600 mb-4">
                    料金徴収からメンテナンス、顧客サービスまで、料金道路運営のエンドツーエンド管理。
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>料金徴収</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>道路メンテナンス</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>交通管理</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>システム統合</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">公共サービスコンセッション</h3>
                  <p className="text-slate-600 mb-4">
                    効率性、透明性、市民満足度に焦点を当てた公共サービスコンセッションの管理。
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>コンセッション企画</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>運営管理</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>コンプライアンス監視</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>性能報告</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image grid with overlapping */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden shadow-lg h-64 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg"
                    alt="Toll Road Management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">料金道路運営</span>
                  </div>
                </div>

                <div className="overflow-hidden shadow-lg h-48 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg"
                    alt="Ceremonial Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">儀式サービス</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="overflow-hidden shadow-lg h-48 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg"
                    alt="Facility Management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">施設管理</span>
                  </div>
                </div>

                <div className="overflow-hidden shadow-lg h-64 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg"
                    alt="Specialized Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">専門サービス</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white shadow-xl p-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">24時間365日サポート</p>
                  <p className="text-sm text-slate-600">政府グレードサービス</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}