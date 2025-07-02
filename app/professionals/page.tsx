"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, User, Settings, LogOut, Star, MessageCircle, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ProfessionalsPage() {
  const [activeTab, setActiveTab] = useState("profesionales")

  const professionals = [
    {
      id: 1,
      name: "Dr. Alejandro Vargas",
      specialty: "Experto en Econometría",
      description:
        "Especialista en econometría aplicada con más de 10 años de experiencia en análisis de datos económicos y modelado estadístico.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "10+ años",
      rating: 4.9,
      students: 2500,
      courses: 5,
      expertise: ["Econometría", "Stata", "Análisis de Datos"],
    },
    {
      id: 2,
      name: "Msc. Lucía Mendoza",
      specialty: "Especialista en Finanzas",
      description:
        "Magíster en Finanzas con experiencia en mercados financieros, valoración de empresas y gestión de riesgos financieros.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "15+ años",
      rating: 4.9,
      students: 1800,
      courses: 3,
      expertise: ["Finanzas Corporativas", "Valoración", "Mercados Financieros"],
    },
    {
      id: 3,
      name: "Dra. Elena Ríos",
      specialty: "Investigadora en Teoría de Juegos",
      description:
        "Doctora en Economía especializada en teoría de juegos, estrategia empresarial y economía experimental.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "8+ años",
      rating: 4.8,
      students: 3200,
      courses: 7,
      expertise: ["Teoría de Juegos", "Estrategia", "Economía Experimental"],
    },
    {
      id: 4,
      name: "Dr. Roberto Silva",
      specialty: "Director Financiero y Consultor",
      description:
        "CFO con experiencia en finanzas corporativas, análisis de inversiones y gestión de riesgos financieros.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "12+ años",
      rating: 4.7,
      students: 1500,
      courses: 4,
      expertise: ["Finanzas Corporativas", "Análisis de Inversiones", "Gestión de Riesgos"],
    },
    {
      id: 5,
      name: "Dr. Carlos Herrera",
      specialty: "Especialista en Macroeconomía",
      description: "Doctor en Economía con especialización en macroeconomía dinámica y política económica.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "9+ años",
      rating: 4.8,
      students: 2100,
      courses: 6,
      expertise: ["Macroeconomía", "Política Económica", "Modelos DSGE"],
    },
    {
      id: 6,
      name: "Dra. Ana Morales",
      specialty: "Investigadora en Economía Conductual",
      description: "Doctora especializada en economía del comportamiento y psicología económica aplicada.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "11+ años",
      rating: 4.6,
      students: 1900,
      courses: 5,
      expertise: ["Economía Conductual", "Psicología Económica", "Experimentos"],
    },
    {
      id: 7,
      name: "Dr. Miguel Fernández",
      specialty: "Historiador del Pensamiento Económico",
      description: "Especialista en historia del pensamiento económico y evolución de las teorías económicas.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "7+ años",
      rating: 4.9,
      students: 1200,
      courses: 3,
      expertise: ["Historia Económica", "Pensamiento Económico", "Teorías Clásicas"],
    },
    {
      id: 8,
      name: "Msc. Patricia Vega",
      specialty: "Especialista en Series de Tiempo",
      description: "Magíster en Economía con especialización en análisis de series de tiempo y pronósticos económicos.",
      image: "/placeholder.svg?height=150&width=150",
      experience: "6+ años",
      rating: 4.8,
      students: 2800,
      courses: 4,
      expertise: ["Series de Tiempo", "Pronósticos", "Análisis Cuantitativo"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Piensa+
              </h1>
            </Link>

            {/* Navigation Tabs */}
            <div className="flex space-x-8">
              <Link href="/dashboard">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
                  Mis Cursos
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
                  Más Cursos
                </button>
              </Link>
              <button
                onClick={() => setActiveTab("profesionales")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "profesionales"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                Profesionales
              </button>
              <Link href="/chat">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors relative">
                  Mensajes
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Usuario" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-gray-300" align="end" forceMount>
                  <DropdownMenuItem className="hover:bg-gray-700">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conoce a Nuestros{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Profesionales
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conecta con expertos de la industria y acelera tu crecimiento profesional con mentorías personalizadas
            </p>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {professionals.map((professional) => (
              <Link key={professional.id} href={`/professionals/${professional.id}`}>
                <Card className="group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-orange-500 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto border-4 border-gray-600 group-hover:border-orange-500 transition-colors">
                        <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                        <AvatarFallback className="text-2xl">{professional.name[0]}</AvatarFallback>
                      </Avatar>
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        {professional.experience}
                      </Badge>
                    </div>

                    {/* Professional Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{professional.name}</h3>
                      <p className="text-orange-400 font-semibold mb-3">{professional.specialty}</p>
                      <p className="text-sm text-gray-400 line-clamp-3 mb-4">{professional.description}</p>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {professional.expertise.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                      {professional.expertise.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                          +{professional.expertise.length - 2}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 fill-orange-500 text-orange-500 mr-1" />
                          <span className="text-sm font-semibold text-white">{professional.rating}</span>
                        </div>
                        <p className="text-xs text-gray-400">Rating</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <GraduationCap className="h-4 w-4 text-orange-500 mr-1" />
                          <span className="text-sm font-semibold text-white">{professional.students}</span>
                        </div>
                        <p className="text-xs text-gray-400">Estudiantes</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-1">
                          <Briefcase className="h-4 w-4 text-orange-500 mr-1" />
                          <span className="text-sm font-semibold text-white">{professional.courses}</span>
                        </div>
                        <p className="text-xs text-gray-400">Cursos</p>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/chat/${professional.id}`
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Iniciar Chat
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
