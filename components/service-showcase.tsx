"use client"

import { motion } from "framer-motion"
import { Building2, Scale, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function ServiceShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Service Areas</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Aegis LLP Group provides comprehensive services across multiple sectors, ensuring excellence in public
            service delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Service categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Facility Management</h3>
                  <p className="text-slate-600 mb-4">
                    Comprehensive management and maintenance of government facilities, ensuring optimal operation and
                    longevity.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Building Maintenance</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Security Services</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Fire Prevention</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Equipment Inspection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Toll Road Management</h3>
                  <p className="text-slate-600 mb-4">
                    End-to-end management of toll road operations, from fee collection to maintenance and customer
                    service.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Fee Collection</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Road Maintenance</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Traffic Management</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>System Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Public Service Concessions</h3>
                  <p className="text-slate-600 mb-4">
                    Management of public service concessions with a focus on efficiency, transparency, and citizen
                    satisfaction.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Concession Planning</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Operations Management</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Compliance Monitoring</span>
                    </div>
                    <div className="text-sm text-slate-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Performance Reporting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image grid with overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29-bmwbVkyWCQIPIRqPQcEdzDBy6lGAYz.jpeg"
                    alt="Toll Road Management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">Toll Road Operations</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-xl overflow-hidden shadow-lg h-48 relative"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2813%29-pQA3PhWWkbXNJ4IBnfULBEE9haSWtv.jpeg"
                    alt="Ceremonial Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">Ceremonial Services</span>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4 mt-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-xl overflow-hidden shadow-lg h-48 relative"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2814%29-twzHcPSG0mo9wN6RUcU9ZtWSoFOhki.jpeg"
                    alt="Facility Management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">Facility Management</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-xl overflow-hidden shadow-lg h-64 relative"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2816%29-komzG8C6TWuA5SMZru3RPUc0nQK9ta.jpeg"
                    alt="Specialized Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-medium">Specialized Services</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-slate-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">24/7 Support</p>
                  <p className="text-sm text-slate-600">Government-grade service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
