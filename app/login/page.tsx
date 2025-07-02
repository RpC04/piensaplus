"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Settings } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const roles = [
    {
      id: "student",
      title: "Soy Estudiante",
      description: "Accede a cursos y conecta con profesionales",
      icon: GraduationCap,
      href: "/dashboard",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: "professional",
      title: "Soy Profesional",
      description: "Comparte tu conocimiento y enseña",
      icon: Briefcase,
      href: "/teacher/dashboard",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: "admin",
      title: "Soy Administrador",
      description: "Gestiona la plataforma y usuarios",
      icon: Settings,
      href: "/admin/dashboard",
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bienvenido a{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Piensa+
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Selecciona tu rol para acceder a la plataforma</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <Link key={role.id} href={role.href}>
              <Card
                className={`group cursor-pointer transition-all duration-300 bg-gray-800 border-gray-700 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 ${
                  hoveredCard === role.id ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(role.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <role.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{role.description}</p>
                  <div className="mt-6">
                    <div
                      className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${role.gradient} text-white font-semibold group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300`}
                    >
                      Acceder
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            ¿Primera vez en Piensa+?{" "}
            <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              Conoce más sobre nosotros
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
