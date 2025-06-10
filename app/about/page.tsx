"use client"

import { motion } from "framer-motion"
import { Shield, Users, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutConcept from "@/components/about-concept"
import CompanyTimeline from "@/components/company-timeline"
import CompanyValues from "@/components/company-values"
import Image from "next/image"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
              <motion.div variants={itemVariants}>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Scale className="w-4 h-4 mr-2" />
                  METI Certified LLP Structure
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight"
              >
                Understanding Our
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 block"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  LLP Structure
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl leading-relaxed"
              >
                Aegis LLP Group operates as a Limited Liability Partnership, combining the expertise of multiple
                specialized companies under one unified structure, as recognized by Japan's Ministry of Economy, Trade
                and Industry (METI).
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/companies">Meet Our Companies</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-lg px-8 py-6"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Logo and info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
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
                    <h3 className="text-xl font-bold text-slate-800">Aegis Group</h3>
                    <p className="text-slate-600">Limited Liability Partnership</p>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-left">
                          <p className="font-medium text-slate-700">Headquarters</p>
                          <p className="text-slate-600">Mie Prefecture, Japan</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">Established</p>
                          <p className="text-slate-600">2006</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">Member Companies</p>
                          <p className="text-slate-600">8 Specialized Firms</p>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-700">Certification</p>
                          <p className="text-slate-600">METI Certified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -left-10 top-10 z-10 rounded-lg bg-white shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">Government Partner</div>
                      <div className="text-slate-600">Since 2006</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="absolute -right-10 bottom-10 z-10 rounded-lg bg-white shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-slate-800">LLP Structure</div>
                      <div className="text-slate-600">Specialized expertise</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
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
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-3xl"
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Experience the LLP Advantage?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Discover how our unique partnership structure can benefit your organization's digital transformation
              journey.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/companies">Meet Our Companies</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
