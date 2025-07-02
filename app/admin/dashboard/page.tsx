"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, Eye, Calendar, BookOpen, Users, TrendingUp, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("revisiones-pendientes")

  const pendingCourses = [
    {
      id: 1,
      title: "Estrategias de Redes Sociales",
      instructor: "Ana García",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      submissionDate: "28 Feb 2024",
      category: "Marketing",
      duration: "4 semanas",
    },
    {
      id: 2,
      title: "Desarrollo de Apps Móviles",
      instructor: "Carlos Mendoza",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      submissionDate: "25 Feb 2024",
      category: "Tecnología",
      duration: "6 semanas",
    },
    {
      id: 3,
      title: "Gestión de Proyectos Ágiles",
      instructor: "María López",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      submissionDate: "22 Feb 2024",
      category: "Gestión",
      duration: "3 semanas",
    },
    {
      id: 4,
      title: "Diseño UX/UI Avanzado",
      instructor: "Roberto Silva",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      submissionDate: "20 Feb 2024",
      category: "Diseño",
      duration: "5 semanas",
    },
  ]

  const stats = [
    {
      title: "Cursos Pendientes",
      value: "4",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Cursos Publicados",
      value: "127",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Usuarios",
      value: "15,420",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Ingresos del Mes",
      value: "$45,200",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Piensa+ Admin
              </h1>
            </Link>

            {/* Navigation Tabs */}
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("revisiones-pendientes")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "revisiones-pendientes"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                Revisiones Pendientes
              </button>
              <button
                onClick={() => setActiveTab("usuarios")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "usuarios"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                Usuarios
              </button>
              <button
                onClick={() => setActiveTab("cursos-publicados")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "cursos-publicados"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                Cursos Publicados
              </button>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-300">Admin</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100 mb-2">Panel de Administración</h1>
            <p className="text-gray-400">Gestiona cursos, usuarios y contenido de la plataforma</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
                    </div>
                    <div className={`h-12 w-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pending Reviews Alert */}
          {pendingCourses.length > 0 && (
            <Card className="mb-6 border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-yellow-800">
                      Tienes {pendingCourses.length} cursos pendientes de revisión
                    </p>
                    <p className="text-sm text-yellow-700">
                      Revisa y aprueba los cursos para que estén disponibles para los estudiantes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pending Courses Table */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-100">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Cursos Pendientes de Revisión</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-300">Título del Curso</TableHead>
                    <TableHead className="text-gray-300">Nombre del Docente</TableHead>
                    <TableHead className="text-gray-300">Fecha de Envío</TableHead>
                    <TableHead className="text-gray-300">Categoría</TableHead>
                    <TableHead className="text-gray-300">Duración</TableHead>
                    <TableHead className="text-right text-gray-300">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium text-gray-200">{course.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} alt={course.instructor} />
                            <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-gray-400">{course.instructor}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-400">{course.submissionDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{course.category}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-400">{course.duration}</TableCell>
                      <TableCell className="text-right">
                        <Link href={`/admin/review/${course.id}`}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Revisar
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {pendingCourses.length === 0 && (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-100 mb-2">¡Todo al día!</h3>
                  <p className="text-gray-400">No hay cursos pendientes de revisión en este momento.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
