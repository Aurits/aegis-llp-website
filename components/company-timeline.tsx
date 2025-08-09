"use client"

import { Calendar, CheckCircle } from "lucide-react"

export default function CompanyTimeline() {
  const timelineEvents = [
    { year: "2006", event: "イージスグループ設立", highlight: true },
    { year: "2006", event: "イージスグループ有限責任事業組合結成" },
    { year: "2008", event: "イージス株式会社参加（パートナーシップ事業）" },
    { year: "2010", event: "NSK株式会社参加（施設管理）" },
    { year: "2010", event: "NDK株式会社参加（料金徴収・メンテナンス）" },
    { year: "2011", event: "NDK九州株式会社参加" },
    { year: "2012", event: "日本ロテックス株式会社参加（防火・点検）" },
    { year: "2013", event: "セントラルハイウェイ株式会社参加" },
    { year: "2016", event: "愛知県料金道路コンセッション参加", highlight: true },
    { year: "2018", event: "包括的料金道路管理システム積立", highlight: true },
    { year: "2020", event: "マイタウンサービス株式会社参加" },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-white/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">私たちの成長の歩み</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            2006年の設立以来、イージスLLPグループは戦略的パートナーシップと企業統合を通じて継続的に能力を拡大してきました。
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 md:-translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-7 h-7 rounded-full bg-white border-4 border-emerald-400 -translate-x-3 md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`p-6 shadow-lg ${event.highlight ? "bg-emerald-50" : "bg-white"} border border-slate-100`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className={`h-5 w-5 ${event.highlight ? "text-emerald-600" : "text-slate-500"}`} />
                      <span className={`font-bold ${event.highlight ? "text-emerald-700" : "text-slate-700"}`}>
                        {event.year}
                      </span>
                      {event.highlight && (
                        <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <CheckCircle className="w-3 h-3 mr-1" /> 主要マイルストーン
                        </span>
                      )}
                    </div>
                    <p className="text-slate-700">{event.event}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-emerald-50 text-emerald-700 font-medium">
            公共サービスにおける卓越性への使命を継続
          </div>
        </div>
      </div>
    </section>
  )
}