"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, Plus, Edit, Eye, Calendar, Users, BookOpen, TrendingUp, Bell, Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("mis-cursos")

  const teacherCourses = [
    {
      id: 1,
      title: "Microeconomía Intermedia",
      createdDate: "15 Mar 2025",
      status: "published",
      students: 1250,
      rating: 4.9,
      revenue: "S/.3,200",
    },
    {
      id: 2,
      title: "Econometría I",
      createdDate: "28 Feb 2025",
      status: "review",
      students: 0,
      rating: 0,
      revenue: "S/.0",
    },
    {
      id: 3,
      title: "Ciclo 0 - Nivelación",
      createdDate: "10 Feb 2025",
      status: "draft",
      students: 0,
      rating: 0,
      revenue: "S/.0",
    },
    {
      id: 4,
      title: "Matemática para Economistas II",
      createdDate: "05 Jan 2025",
      status: "published",
      students: 890,
      rating: 4.7,
      revenue: "S/.2,100",
    },
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      published: { backgroundColor: "#28a745", color: "white" },
      review: { backgroundColor: "#ffc107", color: "black" },
      draft: { backgroundColor: "#6c757d", color: "white" },
    }

    const labels = {
      published: "Publicado",
      review: "En Revisión",
      draft: "Borrador",
    }

    return (
      <span className="px-3 py-1 text-xs font-medium rounded-full" style={styles[status as keyof typeof styles]}>
        {labels[status as keyof typeof labels]}
      </span>
    )
  }

  const stats = [
    {
      title: "Total Estudiantes",
      value: "2,140",
      icon: Users,
      change: "+12%",
      changeType: "positive",
    },
    {
      title: "Cursos Publicados",
      value: "2",
      icon: BookOpen,
      change: "+1",
      changeType: "positive",
    },
    {
      title: "Ingresos del Mes",
      value: "S/.5,300",
      icon: TrendingUp,
      change: "+8%",
      changeType: "positive",
    },
    {
      title: "Rating Promedio",
      value: "4.8",
      icon: TrendingUp,
      change: "+0.2",
      changeType: "positive",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo de Piensa+" width={60} height={60} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Piensa+
              </h1>
            </Link>

            {/* Navigation Tabs */}
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("mis-cursos")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "mis-cursos"
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-gray-400 hover:text-gray-100"
                  }`}
              >
                Mis Cursos
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
              <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-gray-100">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profesor" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-gray-800 border border-gray-700 text-gray-400"
                  align="end"
                  forceMount
                >
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
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
          <div
            className="mb-8"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-gray-100 mb-2">Gestión de Cursos</h1>
                <p className="text-gray-400">Administra tus cursos y estudiantes</p>
              </div>
            </div>
            <Link href="/teacher/course/create">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-200">
                <Plus className="h-5 w-5 mr-2" />Crear Nuevo Curso
              </Button>
            </Link>
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
                    <div className="h-12 w-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span
                      className={`text-sm font-medium ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">vs mes anterior</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Courses Table - Full Width */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Mis Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Nombre del Curso</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Fecha de Creación</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Estado</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Estudiantes</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Ingresos</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacherCourses.map((course) => (
                      <tr key={course.id} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-100">{course.title}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>{course.createdDate}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">{getStatusBadge(course.status)}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Users className="h-4 w-4" />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {course.rating > 0 ? (
                            <div className="flex items-center space-x-1">
                              <span className="font-medium text-gray-100">{course.rating}</span>
                              <span className="text-yellow-400">★</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-green-600">{course.revenue}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-all duration-200"
                              title="Previsualizar"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg transition-all duration-200"
                              title="Editar"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
