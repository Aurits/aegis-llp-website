"use client"

import { CheckCircle, Cloud, Cog, Database, FileText, MessageSquare, Rocket, Shield, Users } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We begin with comprehensive stakeholder meetings to understand your government agency's specific needs, compliance requirements, and digital transformation goals.",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "emerald",
  },
  {
    id: 2,
    title: "Strategic Planning",
    description:
      "Our LLP team creates detailed project roadmaps with security protocols, compliance frameworks, and resource allocation tailored for public sector requirements.",
    icon: <FileText className="h-6 w-6" />,
    color: "blue",
  },
  {
    id: 3,
    title: "Security & Compliance",
    description:
      "We implement robust security measures and ensure full compliance with government regulations, data protection laws, and industry standards.",
    icon: <Shield className="h-6 w-6" />,
    color: "purple",
  },
  {
    id: 4,
    title: "Development & Testing",
    description:
      "Our specialized companies collaborate to develop, integrate, and rigorously test solutions with 24/7 monitoring and quality assurance.",
    icon: <Cog className="h-6 w-6" />,
    color: "amber",
  },
  {
    id: 5,
    title: "Deployment & Support",
    description:
      "We ensure seamless deployment with comprehensive training, documentation, and ongoing 24/7 technical support for continuous operations.",
    icon: <Rocket className="h-6 w-6" />,
    color: "rose",
  },
]

const ZigzagProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-br from-emerald-50 to-blue-50 opacity-70" />

        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/3 rounded-full bg-gradient-to-tr from-purple-50 to-emerald-50 opacity-70" />

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

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
            Our Government Partnership Process
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            A proven methodology designed specifically for government agencies and municipal organizations, ensuring
            compliance, security, and operational excellence at every step.
          </p>
        </div>

        <div className="relative">
          {/* ZigZag path for medium screens and up */}
          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
            <svg
              className="h-full"
              width="50"
              viewBox="0 0 50 2000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                d="M25 0V400L45 500L25 600V1000L5 1100L25 1200V1600L45 1700L25 1800V2000"
                stroke="url(#gradient-path)"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
              <defs>
                <linearGradient
                  id="gradient-path"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="2000"
                  gradientUnits="userSpaceOnUse"
                  className="h-full"
                >
                  <stop offset="0" stopColor="#10B981" />
                  <stop offset="0.2" stopColor="#3B82F6" />
                  <stop offset="0.4" stopColor="#8B5CF6" />
                  <stop offset="0.6" stopColor="#F59E0B" />
                  <stop offset="0.8" stopColor="#EF4444" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={step.id}
                className={`flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} mb-8 last:mb-0 md:mb-32`}
              >
                {/* Step card */}
                <div className={`w-full md:w-5/12 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="group">
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 blur-sm transition duration-500 group-hover:opacity-100 ${step.color === "emerald"
                            ? "from-emerald-400 to-teal-400"
                            : step.color === "blue"
                              ? "from-blue-400 to-cyan-400"
                              : step.color === "purple"
                                ? "from-purple-400 to-violet-400"
                                : step.color === "amber"
                                  ? "from-amber-400 to-yellow-400"
                                  : "from-rose-400 to-pink-400"
                          }`}
                      />
                      <div className="relative rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div
                          className={`mb-6 inline-flex items-center justify-center rounded-xl p-4 ${step.color === "emerald"
                              ? "bg-emerald-100 text-emerald-600"
                              : step.color === "blue"
                                ? "bg-blue-100 text-blue-600"
                                : step.color === "purple"
                                  ? "bg-purple-100 text-purple-600"
                                  : step.color === "amber"
                                    ? "bg-amber-100 text-amber-600"
                                    : "bg-rose-100 text-rose-600"
                            }`}
                        >
                          {step.icon}
                        </div>

                        <h3 className="mb-4 text-2xl font-bold text-slate-800">{step.title}</h3>

                        <p className="text-slate-600 leading-relaxed">{step.description}</p>

                        {/* Additional features for government focus */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {index === 0 && (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                <Users className="h-3 w-3" />
                                Stakeholder Alignment
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                <Shield className="h-3 w-3" />
                                Compliance Review
                              </span>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                <Database className="h-3 w-3" />
                                Data Architecture
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                                <Cloud className="h-3 w-3" />
                                Infrastructure Planning
                              </span>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                                <Shield className="h-3 w-3" />
                                Security Audit
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                <CheckCircle className="h-3 w-3" />
                                METI Compliance
                              </span>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                                <Cog className="h-3 w-3" />
                                Quality Assurance
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                <Users className="h-3 w-3" />
                                LLP Collaboration
                              </span>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
                                <Rocket className="h-3 w-3" />
                                Go-Live Support
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                <CheckCircle className="h-3 w-3" />
                                24/7 Monitoring
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center step indicator */}
                <div className="z-10 hidden md:absolute md:left-1/2 md:block md:-translate-x-1/2">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-xl ${step.color === "emerald"
                        ? "border-emerald-400"
                        : step.color === "blue"
                          ? "border-blue-400"
                          : step.color === "purple"
                            ? "border-purple-400"
                            : step.color === "amber"
                              ? "border-amber-400"
                              : "border-rose-400"
                      }`}
                  >
                    <span
                      className={`text-xl font-bold ${step.color === "emerald"
                          ? "text-emerald-600"
                          : step.color === "blue"
                            ? "text-blue-600"
                            : step.color === "purple"
                              ? "text-purple-600"
                              : step.color === "amber"
                                ? "text-amber-600"
                                : "text-rose-600"
                        }`}
                    >
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden w-5/12 md:block" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ZigzagProcess