"use client"

import { Calendar, CheckCircle } from "lucide-react"

export default function CompanyTimeline() {
  const timelineEvents = [
    { year: "2006", event: "Aegis Group established", highlight: true },
    { year: "2006", event: "Aegis Group Limited Liability Partnership formed" },
    { year: "2008", event: "Aegis Inc. joined (Partnership business)" },
    { year: "2010", event: "NSK Inc. joined (Facility management)" },
    { year: "2010", event: "NDK Inc. joined (Toll road fee collection & maintenance)" },
    { year: "2011", event: "NDK Kyushu Inc. joined" },
    { year: "2012", event: "Nippon Rotex Inc. joined (Fire prevention & inspection)" },
    { year: "2013", event: "Central Highway Inc. joined" },
    { year: "2016", event: "Participated in Aichi toll road concession", highlight: true },
    { year: "2018", event: "Established comprehensive toll road management system", highlight: true },
    { year: "2020", event: "Mytown Service Inc. joined" },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Growth Journey</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Since our establishment in 2006, Aegis LLP Group has continuously expanded our capabilities through
            strategic partnerships and company integrations.
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
                    className={`p-6 rounded-xl shadow-lg ${event.highlight ? "bg-gradient-to-br from-emerald-50 to-emerald-100/50" : "bg-white"} border border-slate-100`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className={`h-5 w-5 ${event.highlight ? "text-emerald-600" : "text-slate-500"}`} />
                      <span className={`font-bold ${event.highlight ? "text-emerald-700" : "text-slate-700"}`}>
                        {event.year}
                      </span>
                      {event.highlight && (
                        <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <CheckCircle className="w-3 h-3 mr-1" /> Key Milestone
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
          <div className="inline-block px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium">
            Continuing our mission of excellence in public service
          </div>
        </div>
      </div>
    </section>
  )
}