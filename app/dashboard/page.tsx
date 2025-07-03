"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, User, Settings, LogOut, Play, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("mis-cursos")

  const enrolledCourses = [
    {
      id: 1,
      title: "Microeconomía I",
      instructor: "Dra. Ana Morales",
      image: "/micro1.jpg?height=200&width=300",
      progress: 75,
      lastAccessed: "Hace 2 días",
      totalLessons: 32,
      completedLessons: 24,
    },
    {
      id: 2,
      title: "Econometría I",
      instructor: "Dr. Alejandro Vargas",
      image: "/econometria.png?height=200&width=300",
      progress: 45,
      lastAccessed: "Hace 1 semana",
      totalLessons: 32,
      completedLessons: 14,
    },
    {
      id: 3,
      title: "Matemática para Economistas I",
      instructor: "Msc. Javier Torres",
      image: "/analisiMat.jpg?height=200&width=300",
      progress: 90,
      lastAccessed: "Ayer",
      totalLessons: 32,
      completedLessons: 29,
    },
    {
      id: 4,
      title: "Macroeconomía I",
      instructor: "Dr. Carlos Herrera",
      image: "/economiaGeneral.jpg?height=200&width=300",
      progress: 30,
      lastAccessed: "Hace 3 días",
      totalLessons: 32,
      completedLessons: 10,
    },
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
              <button
                onClick={() => setActiveTab("mis-cursos")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "mis-cursos"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-100"
                  }`}
              >
                Mis Cursos
              </button>
              <Link href="/courses">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
                  Más Cursos
                </button>
              </Link>
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
              <Button variant="ghost" size="icon" className="relative">
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
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
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
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Mis Cursos Activos</h1>
            <p className="text-gray-400">Continúa tu aprendizaje donde lo dejaste</p>
          </div>

          {/* Course Grid */}
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:border-orange-500"
                style={{
                  backgroundColor: "#1E1E1E",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: "16px" }}>
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{course.title}</h3>

                  {/* Instructor */}
                  <p className="text-gray-400 mb-4">{course.instructor}</p>

                  {/* Progress Section */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progreso</span>
                      <span className="text-sm font-semibold text-orange-500">{course.progress}% Completado</span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{
                        backgroundColor: "#333333",
                        borderRadius: "99px",
                      }}
                    >
                      <div
                        className="h-full transition-all duration-500 ease-out"
                        style={{
                          backgroundColor: "#FF6B00",
                          width: `${course.progress}%`,
                          borderRadius: "99px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-3 w-3" />
                      <span>
                        {course.completedLessons}/{course.totalLessons} lecciones
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.lastAccessed}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/course/${course.id}`}>
                    <button
                      className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                      style={{
                        backgroundColor: "#FF6B00",
                      }}
                    >
                      Continuar Aprendiendo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State if no courses */}
          {enrolledCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-100 mb-2">No tienes cursos inscritos</h3>
              <p className="text-gray-400 mb-6">Explora nuestro catálogo y comienza tu aprendizaje</p>
              <Link href="/courses">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-700 hover:to-orange-700">
                  Explorar Cursos
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
