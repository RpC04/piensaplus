"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Bell,
  User,
  Settings,
  LogOut,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Dr. Alejandro Vargas",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Perfecto, nos vemos en la sesión de mañana",
      time: "10:30 AM",
      unread: 2,
      online: true,
      type: "professional",
    },
    {
      id: 2,
      name: "Msc. Lucía Mendoza",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Te envío el material adicional sobre valoración",
      time: "9:15 AM",
      unread: 0,
      online: false,
      type: "professional",
    },
    {
      id: 3,
      name: "Grupo: Econometría Aplicada",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "María: ¿Alguien puede ayudarme con el ejercicio 3?",
      time: "Ayer",
      unread: 5,
      online: false,
      type: "group",
    },
    {
      id: 4,
      name: "Dra. Elena Ríos",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Excelente trabajo en tu último ensayo",
      time: "Ayer",
      unread: 0,
      online: true,
      type: "professional",
    },
    {
      id: 5,
      name: "Soporte Técnico",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Tu problema ha sido resuelto",
      time: "2 días",
      unread: 0,
      online: false,
      type: "support",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Dr. Alejandro Vargas",
      content: "Hola! Vi que tienes dudas sobre el análisis de regresión múltiple. ¿En qué puedo ayudarte?",
      time: "10:00 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      sender: "Tú",
      content:
        "Hola Doctor! Sí, tengo problemas para interpretar los coeficientes cuando hay variables categóricas en el modelo.",
      time: "10:05 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Dr. Alejandro Vargas",
      content:
        "Perfecto, es una duda muy común. Las variables categóricas se interpretan como el cambio en la variable dependiente respecto a la categoría de referencia.",
      time: "10:07 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      sender: "Dr. Alejandro Vargas",
      content:
        "Te voy a enviar un ejemplo práctico que te ayudará a entenderlo mejor. ¿Te parece si lo revisamos en una sesión mañana?",
      time: "10:08 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      sender: "Tú",
      content: "¡Perfecto! Me parece excelente. ¿A qué hora te viene bien?",
      time: "10:25 AM",
      isOwn: true,
    },
    {
      id: 6,
      sender: "Dr. Alejandro Vargas",
      content: "Perfecto, nos vemos en la sesión de mañana",
      time: "10:30 AM",
      isOwn: false,
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const currentChat = conversations.find((conv) => conv.id === selectedChat)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

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
              <Link href="/professionals">
                <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
                  Profesionales
                </button>
              </Link>
              <button className="px-4 py-2 text-sm font-medium text-orange-500 border-b-2 border-orange-500 relative">
                Mensajes
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
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
      <main className="pt-16 h-screen">
        <div className="h-full flex">
          {/* Conversations Sidebar */}
          <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Search Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar conversaciones..."
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors ${
                    selectedChat === conversation.id ? "bg-gray-700 border-l-4 border-l-orange-500" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-white truncate">{conversation.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">{conversation.time}</span>
                          {conversation.unread > 0 && (
                            <Badge className="bg-orange-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                      <div className="flex items-center mt-1">
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            conversation.type === "professional"
                              ? "bg-blue-500/20 text-blue-400"
                              : conversation.type === "group"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {conversation.type === "professional"
                            ? "Profesional"
                            : conversation.type === "group"
                              ? "Grupo"
                              : "Soporte"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <div className="bg-gray-800 border-b border-gray-700 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={currentChat.avatar || "/placeholder.svg"} alt={currentChat.name} />
                          <AvatarFallback>{currentChat.name[0]}</AvatarFallback>
                        </Avatar>
                        {currentChat.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="font-semibold text-white">{currentChat.name}</h2>
                        <p className="text-sm text-gray-400">{currentChat.online ? "En línea" : "Desconectado"}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Video className="h-5 w-5" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-800 border-gray-700 text-gray-300">
                          <DropdownMenuItem className="hover:bg-gray-700">Ver perfil</DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-gray-700">Silenciar notificaciones</DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-gray-700">Eliminar conversación</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        {!msg.isOwn && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.sender} />
                            <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`px-4 py-2 rounded-lg ${
                            msg.isOwn
                              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                              : "bg-gray-700 text-white"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-1 ${msg.isOwn ? "text-orange-100" : "text-gray-400"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-gray-800 border-t border-gray-700 p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Escribe tu mensaje..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 pr-12"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-800">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Selecciona una conversación</h3>
                  <p className="text-gray-500">Elige una conversación para comenzar a chatear</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
