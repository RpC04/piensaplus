"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  BookOpen,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedLevel, setSelectedLevel] = useState("Todos")

  const categories = ["Todos", "Econometría", "Microeconomía", "Macroeconomía", "Finanzas", "Historia Económica"]
  const levels = ["Todos", "Principiante", "Intermedio", "Avanzado"]

    const courses = [
    {
      id: 1,
      title: "Ciclo 0: Nivelación Académica",
      instructor: "Equipo de Nivelación Piensa+",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Refuerza tus bases en matemáticas y redacción para iniciar tu carrera universitaria con éxito.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 1500,
      duration: "4 semanas",
      level: "Introductorio",
      price: "$99",
      category: "Nivelación",
      lessons: 20,
      featured: true,
    },
    {
      id: 2,
      title: "Análisis Matemático",
      instructor: "Dra. Elena Ríos",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Estudia los fundamentos del cálculo diferencial e integral, esenciales para la modelización económica.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      students: 1120,
      duration: "16 semanas",
      level: "Principiante",
      price: "$159",
      category: "Matemáticas",
      lessons: 32,
      featured: false,
    },
    {
      id: 3,
      title: "Economía General",
      instructor: "Dr. Roberto Silva",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Una introducción completa a los principios fundamentales de la microeconomía y la macroeconomía.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 1850,
      duration: "16 semanas",
      level: "Principiante",
      price: "$149",
      category: "Introducción",
      lessons: 30,
      featured: true,
    },
    {
      id: 4,
      title: "Macroeconomía I",
      instructor: "Dr. Carlos Herrera",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Analiza los agregados económicos, el modelo IS-LM y las políticas fiscal y monetaria en una economía cerrada.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 950,
      duration: "16 semanas",
      level: "Intermedio",
      price: "$179",
      category: "Macroeconomía",
      lessons: 32,
      featured: false,
    },
    {
      id: 5,
      title: "Macroeconomía II",
      instructor: "Dr. Carlos Herrera",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Explora la economía abierta, tipos de cambio, expectativas y los fundamentos micro de la macroeconomía.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      students: 780,
      duration: "16 semanas",
      level: "Avanzado",
      price: "$199",
      category: "Macroeconomía",
      lessons: 32,
      featured: false,
    },
    {
      id: 6,
      title: "Microeconomía I",
      instructor: "Dra. Ana Morales",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Domina la teoría del consumidor, la teoría de la firma y el equilibrio en mercados competitivos.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 1050,
      duration: "16 semanas",
      level: "Intermedio",
      price: "$179",
      category: "Microeconomía",
      lessons: 32,
      featured: false,
    },
    {
      id: 7,
      title: "Microeconomía II",
      instructor: "Dra. Ana Morales",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Profundiza en monopolio, oligopolio, teoría de juegos y las fallas de mercado.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 820,
      duration: "16 semanas",
      level: "Avanzado",
      price: "$199",
      category: "Microeconomía",
      lessons: 32,
      featured: true,
    },
    {
      id: 8,
      title: "Matemática para Economistas I",
      instructor: "Msc. Javier Torres",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Aplica álgebra lineal y cálculo multivariado para resolver problemas económicos complejos.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      students: 900,
      duration: "16 semanas",
      level: "Intermedio",
      price: "$189",
      category: "Matemáticas",
      lessons: 32,
      featured: false,
    },
    {
      id: 9,
      title: "Matemática para Economistas II",
      instructor: "Msc. Javier Torres",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Introducción a la optimización estática y dinámica, y ecuaciones diferenciales para modelos económicos.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      students: 710,
      duration: "16 semanas",
      level: "Avanzado",
      price: "$209",
      category: "Matemáticas",
      lessons: 32,
      featured: false,
    },
    {
      id: 10,
      title: "Estadística Descriptiva",
      instructor: "Msc. Patricia Vega",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Aprende a organizar, resumir y presentar datos utilizando medidas de tendencia central, dispersión y posición.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 1300,
      duration: "8 semanas",
      level: "Principiante",
      price: "$129",
      category: "Estadística",
      lessons: 16,
      featured: false,
    },
    {
      id: 11,
      title: "Estadística Aplicada",
      instructor: "Msc. Patricia Vega",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Fundamentos de la inferencia estadística, estimación por intervalos y pruebas de hipótesis.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 1150,
      duration: "16 semanas",
      level: "Intermedio",
      price: "$189",
      category: "Estadística",
      lessons: 32,
      featured: false,
    },
    {
      id: 12,
      title: "Econometría I",
      instructor: "Dr. Alejandro Vargas",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Introducción al modelo de regresión lineal simple y múltiple, y sus supuestos fundamentales.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 980,
      duration: "16 semanas",
      level: "Avanzado",
      price: "$219",
      category: "Econometría",
      lessons: 32,
      featured: false,
    },
    {
      id: 13,
      title: "Econometría II",
      instructor: "Dr. Alejandro Vargas",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      description: "Profundiza en la econometría con variables dummies, heterocedasticidad, y modelos de series de tiempo.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 760,
      duration: "16 semanas",
      level: "Experto",
      price: "$249",
      category: "Econometría",
      lessons: 32,
      featured: false,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "Todos" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const featuredCourses = courses.filter((course) => course.featured)

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
              <button className="px-4 py-2 text-sm font-medium text-orange-500 border-b-2 border-orange-500">
                Más Cursos
              </button>
              <Link href="/professionals">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
                  Profesionales
                </button>
              </Link>
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
              Explora Nuestros{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Cursos de Economía
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cursos especializados impartidos por expertos en economía y finanzas
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar cursos o instructores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      {selectedCategory}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700 text-gray-300">
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="hover:bg-gray-700"
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      Nivel: {selectedLevel}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700 text-gray-300">
                    {levels.map((level) => (
                      <DropdownMenuItem
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className="hover:bg-gray-700"
                      >
                        {level}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Featured Courses */}
          {searchTerm === "" && selectedCategory === "Todos" && selectedLevel === "Todos" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Cursos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCourses.map((course) => (
                  <Link key={course.id} href={`/course/${course.id}`}>
                    <Card className="group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-orange-500 cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                              Destacado
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                            <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                              {course.category}
                            </Badge>
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                              {course.level}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                          <div className="flex items-center mb-4">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage
                                src={course.instructorAvatar || "/placeholder.svg"}
                                alt={course.instructor}
                              />
                              <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-300">{course.instructor}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                              {course.rating}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {course.students}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-orange-500">{course.price}</span>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                            >
                              Ver Curso
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Courses */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {searchTerm || selectedCategory !== "Todos" || selectedLevel !== "Todos"
                  ? "Resultados de Búsqueda"
                  : "Todos los Cursos"}
              </h2>
              <span className="text-gray-400">{filteredCourses.length} cursos encontrados</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/course/${course.id}`}>
                  <Card className="group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-orange-500 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={course.thumbnail || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        {course.featured && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs">
                              Destacado
                            </Badge>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                          <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                            {course.category}
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                            {course.level}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                          {course.title}
                        </h3>

                        <div className="flex items-center mb-3">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} alt={course.instructor} />
                            <AvatarFallback className="text-xs">{course.instructor[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-gray-300 truncate">{course.instructor}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-orange-500 text-orange-500" />
                            {course.rating}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {course.students}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-3 w-3 mr-1" />
                            {course.lessons}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-orange-500">{course.price}</span>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs"
                          >
                            Ver Curso
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No se encontraron cursos</h3>
                <p className="text-gray-500">Intenta ajustar tus filtros de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
