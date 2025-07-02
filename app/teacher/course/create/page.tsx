"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  ArrowLeft,
  Plus,
  X,
  FileText,
  LinkIcon,
  ImageIcon,
  Bell,
  User,
  Settings,
  LogOut,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

interface Resource {
  id: number
  name: string
  url: string
  category: string
  type: "file" | "link"
}

export default function CreateCoursePage() {
  const [activeTab, setActiveTab] = useState("mis-cursos")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    videoUrl: "",
    coverImage: null as File | null,
  })
  const [resources, setResources] = useState<Resource[]>([])
  const [newResource, setNewResource] = useState({
    name: "",
    url: "",
    category: "guide",
    type: "link" as "file" | "link",
  })
  const [showResourceForm, setShowResourceForm] = useState(false)

  const categories = ["Marketing", "Tecnología", "IA & Data", "Finanzas", "Diseño", "Gestión", "Arte", "Idiomas"]

  const resourceCategories = [
    { value: "guide", label: "Guía" },
    { value: "template", label: "Plantilla" },
    { value: "external", label: "Enlace Externo" },
    { value: "exercise", label: "Ejercicio" },
    { value: "reading", label: "Lectura" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setCourseData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setCourseData((prev) => ({ ...prev, coverImage: file }))
    }
  }

  const addResource = () => {
    if (newResource.name && newResource.url) {
      const resource: Resource = {
        id: Date.now(),
        name: newResource.name,
        url: newResource.url,
        category: newResource.category,
        type: newResource.type,
      }
      setResources((prev) => [...prev, resource])
      setNewResource({ name: "", url: "", category: "guide", type: "link" })
      setShowResourceForm(false)
    }
  }

  const removeResource = (id: number) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id))
  }

  const handleSaveDraft = () => {
    console.log("Saving as draft:", { courseData, resources })
    // Simulate save
  }

  const handleSubmitForReview = () => {
    console.log("Submitting for review:", { courseData, resources })
    // Show success modal instead of immediate redirect
    setShowSuccessModal(true)
  }

  const handleModalClose = () => {
    setShowSuccessModal(false)
    // Redirect to teacher dashboard
    window.location.href = "/teacher/dashboard"
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 border-b border-gray-700 z-50">
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
              <Link href="/teacher/dashboard">
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "mis-cursos"
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  Mis Cursos
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

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white mb-2">¡Curso Enviado!</DialogTitle>
            <p className="text-gray-300 mb-6">
              Tu curso ha sido enviado para revisión. Te notificaremos cuando sea aprobado.
            </p>
            <Button
              onClick={handleModalClose}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3"
            >
              Entendido
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/teacher/dashboard">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Crear un Nuevo Curso</h1>
              <p className="text-gray-400">Comparte tu conocimiento con estudiantes de todo el mundo</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Section 1: Basic Information */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </span>
                  <span>Información Básica</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-gray-300 mb-2 block">
                    Título del Curso *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Ej: Marketing Digital para Principiantes"
                    value={courseData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-gray-300 mb-2 block">
                    Descripción del Curso *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe qué aprenderán los estudiantes en tu curso..."
                    value={courseData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-gray-300 mb-2 block">
                    Categoría Principal *
                  </Label>
                  <Select value={courseData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Multimedia Content */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </span>
                  <span>Contenido Multimedia</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="videoUrl" className="text-gray-300 mb-2 block">
                    URL del Video Principal (YouTube/Vimeo) *
                  </Label>
                  <Input
                    id="videoUrl"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={courseData.videoUrl}
                    onChange={(e) => handleInputChange("videoUrl", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="coverImage" className="text-gray-300 mb-2 block">
                    Imagen de Portada del Curso
                  </Label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                    <input
                      type="file"
                      id="coverImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="coverImage" className="cursor-pointer">
                      <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">
                        {courseData.coverImage ? courseData.coverImage.name : "Haz clic para subir una imagen"}
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG hasta 10MB</p>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Resources */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </span>
                    <span>Materiales y Recursos</span>
                  </div>
                  <Button
                    onClick={() => setShowResourceForm(true)}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Añadir Recurso
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Resource Form */}
                {showResourceForm && (
                  <Card className="bg-gray-700 border-gray-600 mb-6">
                    <CardContent className="p-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-gray-300 mb-2 block">Nombre del Recurso</Label>
                          <Input
                            placeholder="Ej: Guía de Marketing Digital"
                            value={newResource.name}
                            onChange={(e) => setNewResource((prev) => ({ ...prev, name: e.target.value }))}
                            className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300 mb-2 block">Categoría del Recurso</Label>
                          <Select
                            value={newResource.category}
                            onValueChange={(value) => setNewResource((prev) => ({ ...prev, category: value }))}
                          >
                            <SelectTrigger className="bg-gray-600 border-gray-500 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              {resourceCategories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value} className="text-white hover:bg-gray-600">
                                  {cat.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label className="text-gray-300 mb-2 block">URL del Recurso</Label>
                        <Input
                          placeholder="https://... o sube un archivo"
                          value={newResource.url}
                          onChange={(e) => setNewResource((prev) => ({ ...prev, url: e.target.value }))}
                          className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="flex space-x-3">
                        <Button onClick={addResource} className="bg-orange-500 hover:bg-orange-600">
                          Añadir
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowResourceForm(false)}
                          className="border-gray-500 text-gray-300 hover:bg-gray-700"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Resources List */}
                <div className="space-y-3">
                  {resources.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No has añadido recursos aún</p>
                      <p className="text-sm">Los recursos ayudan a los estudiantes a profundizar en el tema</p>
                    </div>
                  ) : (
                    resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg border border-gray-600"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {resource.type === "file" ? (
                              <FileText className="h-5 w-5 text-blue-400" />
                            ) : (
                              <LinkIcon className="h-5 w-5 text-green-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-white">{resource.name}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary" className="text-xs">
                                {resourceCategories.find((cat) => cat.value === resource.category)?.label}
                              </Badge>
                              <span className="text-xs text-gray-400">{resource.type}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeResource(resource.id)}
                          className="text-gray-400 hover:text-red-400 hover:bg-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 bg-transparent"
              >
                Guardar como Borrador
              </Button>
              <Button
                onClick={handleSubmitForReview}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 font-semibold"
              >
                Enviar a Revisión
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
