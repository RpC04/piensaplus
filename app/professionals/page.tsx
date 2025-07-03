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
        "Doctor en Economía con especialización en modelos econométricos. Guía a los estudiantes a través de los cursos de Econometría I y II, desde los fundamentos de la regresión hasta técnicas avanzadas.",
      image: "/prof1.jpg?height=150&width=150",
      experience: "12+ años",
      rating: 4.9,
      students: 1740,
      courses: 2,
      expertise: ["Econometría", "Regresión Lineal", "Series de Tiempo", "Stata"],
    },
    {
      id: 2,
      name: "Dra. Ana Morales",
      specialty: "Especialista en Microeconomía",
      description:
        "Investigadora y docente apasionada por la teoría microeconómica. Imparte Microeconomía I y II, cubriendo desde la teoría del consumidor hasta las complejidades de la teoría de juegos.",
      image: "/prof4.jpg?height=150&width=150",
      experience: "9+ años",
      rating: 4.8,
      students: 1870,
      courses: 2,
      expertise: ["Teoría del Consumidor", "Estructuras de Mercado", "Teoría de Juegos"],
    },
    {
      id: 3,
      name: "Dr. Carlos Herrera",
      specialty: "Especialista en Macroeconomía",
      description:
        "Experto en política monetaria y modelos macroeconómicos. Enseña Macroeconomía I y II, explorando el modelo IS-LM, economías abiertas y los fundamentos de los modelos dinámicos.",
      image: "/prof2.jpg?height=150&width=150",
      experience: "15+ años",
      rating: 4.8,
      students: 1730,
      courses: 2,
      expertise: ["Modelos IS-LM", "Política Monetaria", "Economía Abierta", "Modelos DSGE"],
    },
    {
      id: 4,
      name: "Msc. Javier Torres",
      specialty: "Experto en Métodos Cuantitativos",
      description:
        "Magíster en Economía Cuantitativa. Su especialidad es hacer que las matemáticas sean accesibles, enseñando Análisis Matemático y Matemática para Economistas I y II.",
      image: "/prof3.jpg?height=150&width=150",
      experience: "8+ años",
      rating: 4.7,
      students: 1610,
      courses: 3,
      expertise: ["Cálculo Multivariado", "Álgebra Lineal", "Optimización Dinámica"],
    },
    {
      id: 5,
      name: "Msc. Patricia Vega",
      specialty: "Especialista en Estadística Aplicada",
      description:
        "Apasionada por los datos, Patricia enseña Estadística Descriptiva y Aplicada, enfocándose en la inferencia, pruebas de hipótesis y la aplicación práctica en la investigación económica.",
      image: "/prof5.jpg?height=150&width=150",
      experience: "10+ años",
      rating: 4.9,
      students: 2450,
      courses: 2,
      expertise: ["Inferencia Estadística", "Pruebas de Hipótesis", "Análisis de Datos"],
    },
    {
      id: 6,
      name: "Dr. Roberto Silva",
      specialty: "Profesor de Fundamentos Económicos",
      description:
        "Con una vasta experiencia en docencia, el Dr. Silva introduce a los nuevos estudiantes al fascinante mundo de la economía a través del curso de Economía General.",
      image: "/prof6.jpg?height=150&width=150",
      experience: "20+ años",
      rating: 4.9,
      students: 1850,
      courses: 1,
      expertise: ["Principios de Economía", "Historia Económica", "Microeconomía Básica"],
    },
    {
      id: 7,
      name: "Lic. Sofia Reyes",
      specialty: "Coordinadora de Nivelación Académica",
      description:
        "Especialista en técnicas de estudio y refuerzo de conocimientos. Lidera el 'Ciclo 0' para asegurar que todos los estudiantes tengan una base sólida para empezar su carrera.",
      image: "/prof7.jpg?height=150&width=150",
      experience: "7+ años",
      rating: 4.8,
      students: 1500,
      courses: 1,
      expertise: ["Nivelación Académica", "Matemática Básica", "Técnicas de Estudio"],
    },
    {
      id: 8,
      name: "Ing. Laura Fernández",
      specialty: "Profesional de Proyectos Económicos",
      description:
        "Ingeniera con experiencia en proyectos económicos y sociales. Imparte cursos prácticos sobre la aplicación de la economía en proyectos reales.",
      image: "/prof8.jpg?height=150&width=150",
      experience: "6+ años",
      rating: 4.6,
      students: 1200,
      courses: 1,
      expertise: ["Proyectos Económicos", "Análisis de Costos", "Evaluación de Impacto"],
    }
  ];

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
