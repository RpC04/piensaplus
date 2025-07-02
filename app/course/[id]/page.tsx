"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  LinkIcon,
  Send,
  Play,
  Pause,
  Volume2,
  Settings,
  Maximize,
  ChevronDown,
  ChevronRight,
  Reply,
  User,
} from "lucide-react"
import Link from "next/link"

export default function CourseView() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["guides"])

  const courseData = {
    title: "Microeconomía Intermedia",
    instructor: "Dr. Alejandro Vargas",
    description:
      "Aprende los fundamentos avanzados de la microeconomía y su aplicación en el análisis económico moderno",
  }

  const resourceCategories = [
    {
      id: "guides",
      title: "Guías y Manuales",
      resources: [
        {
          id: 1,
          name: "Guía de Marketing Digital 2024.pdf",
          type: "pdf",
          size: "2.5 MB",
        },
        {
          id: 2,
          name: "Manual de Estrategias.docx",
          type: "document",
          size: "1.8 MB",
        },
      ],
    },
    {
      id: "templates",
      title: "Plantillas y Herramientas",
      resources: [
        {
          id: 3,
          name: "Plantillas de Redes Sociales",
          type: "link",
          url: "https://example.com",
        },
        {
          id: 4,
          name: "Calendario Editorial.xlsx",
          type: "document",
          size: "1.5 MB",
        },
      ],
    },
    {
      id: "links",
      title: "Enlaces de Interés",
      resources: [
        {
          id: 5,
          name: "Herramientas Recomendadas",
          type: "link",
          url: "https://example.com",
        },
        {
          id: 6,
          name: "Recursos Adicionales",
          type: "link",
          url: "https://example.com",
        },
      ],
    },
  ]

  const forumThreads = [
    {
      id: 1,
      user: "María González",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "Hace 2 horas",
      content:
        "¿Alguien puede explicar mejor el concepto de funnel de conversión? Me quedé un poco perdida en esa parte.",
      replies: [
        {
          id: 11,
          user: "Carlos Ruiz",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "Hace 1 hora",
          content:
            "¡Hola María! El funnel de conversión es básicamente el camino que sigue un usuario desde que conoce tu marca hasta que realiza una compra.",
        },
        {
          id: 12,
          user: "Ana Martín",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "Hace 30 min",
          content: "Exacto, y cada etapa tiene métricas específicas que debes medir para optimizar el proceso.",
        },
      ],
    },
    {
      id: 2,
      user: "Carlos Ruiz",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "Hace 5 horas",
      content:
        "Excelente clase! Los ejemplos prácticos fueron muy útiles. ¿Habrá más casos de estudio en las próximas lecciones?",
      replies: [
        {
          id: 21,
          user: "Prof. Ana García",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "Hace 3 horas",
          content:
            "¡Gracias Carlos! Sí, en la próxima lección veremos 3 casos de estudio reales de empresas que han implementado estas estrategias.",
        },
      ],
    },
  ]

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  const handleSubmitReply = (threadId: number) => {
    if (replyText.trim()) {
      console.log("Reply to thread:", threadId, "Reply:", replyText)
      setReplyText("")
      setReplyTo(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-white">{courseData.title}</h1>
              <p className="text-sm text-gray-400">{courseData.instructor}</p>
            </div>
          </div>
          <Badge className="bg-green-600 text-white">En Progreso</Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Video Player - 75% width */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <div className="relative bg-black aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=400&width=700"
                      alt="Video placeholder"
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-orange-500/20 hover:bg-orange-500/30 text-white rounded-full p-4"
                      >
                        {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                      </Button>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Volume2 className="h-4 w-4" />
                        <span className="text-sm">15:32 / 45:20</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-white mb-2">{courseData.title}</h2>
              <Link
                href="/professionals/1"
                className="inline-flex items-center space-x-2 text-lg text-orange-500 hover:text-orange-400 hover:underline transition-colors"
              >
                <User className="h-4 w-4" />
                <span>{courseData.instructor}</span>
              </Link>
              <p className="text-gray-400 mt-2">{courseData.description}</p>
            </div>
          </div>

          {/* Sidebar - 25% width */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <Tabs defaultValue="recursos" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-700">
                    <TabsTrigger
                      value="recursos"
                      className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                    >
                      Recursos
                    </TabsTrigger>
                    <TabsTrigger
                      value="foro"
                      className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                    >
                      Foro
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="recursos" className="mt-4 space-y-3">
                    {resourceCategories.map((category) => (
                      <Collapsible
                        key={category.id}
                        open={expandedCategories.includes(category.id)}
                        onOpenChange={() => toggleCategory(category.id)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-white">
                          <span className="font-medium">{category.title}</span>
                          {expandedCategories.includes(category.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 space-y-2">
                          {category.resources.map((resource) => (
                            <div
                              key={resource.id}
                              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors cursor-pointer ml-4"
                            >
                              <div className="flex-shrink-0">
                                {resource.type === "pdf" && <FileText className="h-5 w-5 text-red-400" />}
                                {resource.type === "document" && <FileText className="h-5 w-5 text-blue-400" />}
                                {resource.type === "link" && <LinkIcon className="h-5 w-5 text-green-400" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">{resource.name}</p>
                                {resource.size && <p className="text-xs text-gray-400">{resource.size}</p>}
                              </div>
                              <div className="flex-shrink-0">
                                {resource.type === "link" ? (
                                  <ExternalLink className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Download className="h-4 w-4 text-gray-400" />
                                )}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </TabsContent>

                  <TabsContent value="foro" className="mt-4">
                    <div className="space-y-6 max-h-96 overflow-y-auto">
                      {forumThreads.map((thread) => (
                        <div key={thread.id} className="border-b border-gray-600 pb-4 last:border-b-0">
                          {/* Main Thread */}
                          <div className="flex items-start space-x-3 mb-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={thread.avatar || "/placeholder.svg"} alt={thread.user} />
                              <AvatarFallback>{thread.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <p className="text-sm font-medium text-white">{thread.user}</p>
                                <p className="text-xs text-gray-400">{thread.time}</p>
                              </div>
                              <p className="text-sm text-gray-300 mb-2">{thread.content}</p>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setReplyTo(replyTo === thread.id ? null : thread.id)}
                                className="text-orange-500 hover:text-orange-400 hover:bg-gray-700 p-0 h-auto"
                              >
                                <Reply className="h-3 w-3 mr-1" />
                                Responder
                              </Button>
                            </div>
                          </div>

                          {/* Replies */}
                          {thread.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start space-x-3 ml-6 mb-3">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.user} />
                                <AvatarFallback className="text-xs">{reply.user[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <p className="text-xs font-medium text-white">{reply.user}</p>
                                  <p className="text-xs text-gray-400">{reply.time}</p>
                                </div>
                                <p className="text-xs text-gray-300">{reply.content}</p>
                              </div>
                            </div>
                          ))}

                          {/* Reply Form */}
                          {replyTo === thread.id && (
                            <div className="ml-6 mt-3">
                              <Textarea
                                placeholder="Escribe tu respuesta..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="mb-2 resize-none bg-gray-700 border-gray-600 text-white"
                                rows={2}
                              />
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleSubmitReply(thread.id)}
                                  className="bg-orange-500 hover:bg-orange-600 text-white"
                                  disabled={!replyText.trim()}
                                >
                                  Responder
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => setReplyTo(null)}
                                  className="text-gray-400 hover:text-white"
                                >
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* New Comment Input */}
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <Textarea
                        placeholder="Escribe tu pregunta o comentario..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3 resize-none bg-gray-700 border-gray-600 text-white"
                        rows={3}
                      />
                      <Button
                        onClick={handleSubmitComment}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                        disabled={!newComment.trim()}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Enviar
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
