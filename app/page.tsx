"use client"

import { ArrowRight, Shield, Users, Zap, Award, Calendar, Sparkles, Play, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ZigzagProcess from "@/components/zigzag-process"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function HomePage() {
  const controls = useAnimation()
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Text animation variants
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Split text for animation
  const titleText = "Building Trust Through Digital Excellence"
  const titleLetters = titleText.split("")

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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-emerald-200/20 rounded-full blur-3xl"
        />

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
      <section ref={heroRef} className="relative py-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* Left Content */}
            <div>
              <motion.div variants={itemVariants}>
                <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-emerald-800 hover:bg-white/90 border border-emerald-200/50 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  METI Certified Government Partner
                </Badge>
              </motion.div>

              {/* Animated title */}
              <div className="mb-8 overflow-hidden">
                <motion.h1 className="flex flex-wrap text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                  {titleLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate={controls}
                      className={letter === " " ? "mr-2" : ""}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="mb-8 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed"
              >
                Aegis LLP Group delivers comprehensive digital transformation solutions for government agencies and
                municipalities with 24/7 support, proven expertise, and METI-certified partnership structure.
              </motion.p>

              {/* Services */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="mb-4 text-sm font-medium text-slate-700">Our Specializations</div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { icon: Shield, name: "Security & Compliance" },
                    { icon: Layers, name: "Digital Infrastructure" },
                    { icon: Users, name: "Citizen Engagement" },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="rounded-xl border border-emerald-200/50 bg-white/80 backdrop-blur-sm p-4 transition-all hover:shadow-lg"
                    >
                      <service.icon className="mb-2 h-5 w-5 text-emerald-600" />
                      <div className="text-sm font-medium text-slate-800">{service.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Link href="/projects">Explore Our Services</Link>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="flex items-center gap-3 rounded-2xl border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-6 font-medium text-slate-700 transition-all hover:bg-white/90 shadow-lg hover:shadow-xl text-lg"
                  >
                    <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600">
                      <Play className="h-3 w-3 fill-white text-white" />

                      {/* Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-emerald-400"
                        animate={
                          isHovering
                            ? {
                                scale: [1, 1.5],
                                opacity: [1, 0],
                              }
                            : {}
                        }
                        transition={{
                          repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                          duration: 1.5,
                        }}
                      />
                    </div>
                    <Link href="/about">Watch Overview</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Enhanced with real company image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative mx-auto h-[600px] max-w-lg"
              >
                {/* Main Company Showcase Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%287%29-fcdhf3NWqlr6vKoI0tEMnDdIbG0FUY.jpeg"
                    alt="Aegis Group Company Overview"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-6 inline-block rounded-full bg-emerald-600/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-emerald-300 border border-emerald-400/30">
                      Government Partnership Excellence
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Aegis LLP Group</h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      Comprehensive public service solutions through our specialized member companies, delivering
                      excellence in government partnerships since 2006.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-emerald-400 mb-1">8+</div>
                        <div className="text-white/80">Member Companies</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400 mb-1">18+</div>
                        <div className="text-white/80">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                        <div className="text-white/80">System Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-amber-400 mb-1">24/7</div>
                        <div className="text-white/80">Support Available</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -left-16 top-10 z-40 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-800">METI Certified</div>
                      <div className="text-slate-600">Government-grade standards</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="absolute -right-12 bottom-20 z-40 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-lg border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-slate-800">LLP Structure</div>
                      <div className="text-slate-600">Unified expertise</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-slate-500"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <div>Scroll to explore our process</div>
            <ArrowRight className="mx-auto mt-2 h-4 w-4 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Zigzag Process Section */}
      <ZigzagProcess />

      {/* Key Strengths Cards */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Government Agencies Choose Us
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our competitive advantages that set us apart in the public sector
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support ensuring continuous operations for critical government systems",
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50",
              },
              {
                icon: Users,
                title: "LLP Structure",
                description:
                  "Unique Limited Liability Partnership combining expertise from multiple specialized companies",
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description:
                  "Extensive portfolio of successful government and municipal digital transformation projects",
                gradient: "from-amber-500 to-orange-600",
                bgGradient: "from-amber-50 to-orange-50",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-slate-800 text-xl mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member Companies Preview */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-emerald-50/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Member Companies
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise across multiple domains working together as one
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} variants={cardVariants} whileHover={{ y: -10 }}>
                <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                    >
                      <Shield className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-slate-800 mb-3 text-lg">Company {i}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Specialized in digital solutions and government services
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-2xl"
              >
                <Link href="/companies">
                  View All Companies <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Latest Updates
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-600">
                Stay informed about our recent developments and achievements
              </motion.p>
            </div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <Link href="/news">View All News</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={cardVariants} whileHover={{ y: -5 }}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Dec {i + 10}, 2024</span>
                      <Badge variant="secondary" className="ml-auto">
                        News
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors text-lg">
                      Major Digital Transformation Project Completed
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Successfully delivered comprehensive DX solution for municipal government, improving efficiency by
                      60% and citizen satisfaction...
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-emerald-600 mt-4 text-sm font-medium"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Ready to Transform Your Digital Infrastructure?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-emerald-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Partner with Aegis LLP Group for reliable, innovative solutions tailored to government and municipal
              needs.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">Start a Project</Link>
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

      {/* New Section for Home Page */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="relative flex place-items-center mb-8">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg"></div>
              <svg
                className="w-16 h-16 text-emerald-600 relative z-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Aegis LLP Group</h1>

          <p className="text-xl text-center mb-8 max-w-2xl">
            Building trust through digital excellence for government and municipal partners. Our LLP structure combines
            specialized expertise to deliver comprehensive solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
            {[
              { title: "About LLP", description: "Learn about our unique LLP structure", href: "/about" },
              { title: "Our Companies", description: "Meet our specialized member companies", href: "/companies" },
              { title: "Projects", description: "Explore our government partnerships", href: "/projects" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <Link href={item.href} className="text-emerald-600 font-medium hover:text-emerald-700">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
