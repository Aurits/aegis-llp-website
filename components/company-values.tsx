"use client"

import { Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function CompanyValues() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-900/30 text-emerald-400 rounded-full text-sm font-medium mb-4">
            PASSION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We are driven by a passion to protect communities and provide exceptional public services that make a
            meaningful difference in people's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%288%29-CVlVkWRcnCWzQ7QRBDqipsqeOs4Uh6.jpeg"
                alt="Aegis Group Values"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-2">PASSION</h3>
                <p className="text-white/90 text-lg max-w-md">
                  Dedicated to serving users and communities with excellence and integrity.
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">User-Focused</p>
                  <p className="text-sm text-slate-600">Service with heart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <h3 className="font-bold text-white text-lg">Creating Local Employment</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    We believe public services should be delivered by local communities. We focus on creating
                    sustainable employment opportunities that strengthen the regions we serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <h3 className="font-bold text-white text-lg">User-Focused Service</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    We relentlessly pursue service excellence from the user's perspective, ensuring that every
                    interaction adds value and meets the highest standards of quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 20H7C5.89543 20 5 19.1046 5 18V9.41421C5 9.149 5.10536 8.89464 5.29289 8.70711L9.70711 4.29289C9.89464 4.10536 10.149 4 10.4142 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 4V8C9 8.55228 8.55228 9 8 9H5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12L14 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 16L14 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-purple-900/50 text-purple-400 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <h3 className="font-bold text-white text-lg">Meaningful Work Environment</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    We foster a workplace where team members experience growth, purpose, and fulfillment through their
                    contributions to public service and community well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}