"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Play,
  Download,
  ExternalLink,
  FileText,
  LinkIcon,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

export default function CourseReview() {
  const [rejectionReason, setRejectionReason] = useState("")
  const [showRejectionForm, setShowRejectionForm] = useState(false)

  const courseData = {
    id: 1,
    title: "Microeconomía I",
    instructor: "Ana García",
    instructorAvatar: "/prof7.jpg?height=40&width=40",
    submissionDate: "28 Feb 2024",
    category: "Economia",
    duration: "4 semanas",
    description:
      "Curso introductorio a los principios de microeconomía, incluyendo oferta y demanda, elasticidad, teoría del consumidor y teoría de la empresa.",
    videoUrl: "https://www.youtube.com/watch?v=MMFSdbc1-fI",
    totalLessons: 16,
  }

  const resources = [
    {
      id: 1,
      name: "Guía de técnicas de microeconomía.pdf",
      type: "pdf",
      size: "3.2 MB",
    },
    {
      id: 2,
      name: "Plantillas de Contenido",
      type: "link",
      url: "https://example.com",
    },
    {
      id: 3,
      name: "Calendario Editorial.xlsx",
      type: "document",
      size: "1.5 MB",
    },
    {
      id: 4,
      name: "Herramientas Recomendadas",
      type: "link",
      url: "https://example.com",
    },
  ]

  const handleApprove = () => {
    // Simulate course approval
    console.log("Course approved:", courseData.id)
    // Redirect to admin dashboard
  }

  const handleReject = () => {
    if (rejectionReason.trim()) {
      // Simulate course rejection
      console.log("Course rejected:", courseData.id, "Reason:", rejectionReason)
      // Redirect to admin dashboard
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed Action Bar */}
      <div className="fixed top-0 w-full bg-white border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Revisión de Curso</h1>
                <p className="text-sm text-slate-600">{courseData.title}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setShowRejectionForm(true)}
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Rechazar
              </Button>
              <Button onClick={handleApprove} className="bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle className="h-4 w-4 mr-2" />
                Aprobar y Publicar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Course Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Información del Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{courseData.title}</h2>
                  <p className="text-slate-600">{courseData.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Categoría</p>
                    <Badge variant="secondary">{courseData.category}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Duración</p>
                    <p className="text-sm text-slate-900">{courseData.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Total de Lecciones</p>
                    <p className="text-sm text-slate-900">{courseData.totalLessons}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Fecha de Envío</p>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-900">{courseData.submissionDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información del Docente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={courseData.instructorAvatar || "/placeholder.svg"} alt={courseData.instructor} />
                    <AvatarFallback>{courseData.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900">{courseData.instructor}</p>
                    <p className="text-sm text-slate-600">Instructor</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Video Preview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Vista Previa del Contenido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
                <img
                  src="/vistaPrevia1.png?height=400&width=700"
                  alt="Video preview"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recursos del Curso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      {resource.type === "pdf" && <FileText className="h-5 w-5 text-red-500" />}
                      {resource.type === "document" && <FileText className="h-5 w-5 text-blue-500" />}
                      {resource.type === "link" && <LinkIcon className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{resource.name}</p>
                      {resource.size && <p className="text-xs text-slate-500">{resource.size}</p>}
                    </div>
                    <div className="flex-shrink-0">
                      {resource.type === "link" ? (
                        <ExternalLink className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Download className="h-4 w-4 text-slate-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rejection Form Modal */}
          {showRejectionForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="w-full max-w-md mx-4">
                <CardHeader>
                  <CardTitle className="text-red-600">Rechazar Curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">
                    ¿Estás seguro de que quieres rechazar este curso? Proporciona un motivo para ayudar al instructor a
                    mejorar.
                  </p>
                  <Textarea
                    placeholder="Motivo del rechazo (opcional)"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    rows={4}
                  />
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={() => setShowRejectionForm(false)} className="flex-1">
                      Cancelar
                    </Button>
                    <Button onClick={handleReject} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      Confirmar Rechazo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
