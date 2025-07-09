"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Send, Bell, User, Settings, LogOut, Search } from "lucide-react"
import Link from "next/link"

export default function ChatWithProfessional() {
  const [activeTab, setActiveTab] = useState("mensajes")
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  // This would normally come from the URL params and database
  const professionalId = 1

  const conversations = [
    {
      id: 1,
      name: "Dr. Alejandro Vargas",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Perfecto, nos vemos mañana para la tutoría de econometría.",
      timestamp: "Hace 5 min",
      unread: true,
    },
    {
      id: 2,
      name: "Msc. Lucía Mendoza",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Te envié los materiales adicionales sobre valoración de empresas.",
      timestamp: "Hace 2 horas",
      unread: false,
    },
    {
      id: 3,
      name: "Dra. Elena Ríos",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Excelente pregunta sobre el equilibrio de Nash. Te explico...",
      timestamp: "Ayer",
      unread: true,
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: "Dr. Alejandro Vargas",
      content: "¡Hola! Gracias por contactarme. Vi que estás interesado en econometría. ¿En qué puedo ayudarte?",
      timestamp: "Ahora",
      isOwn: false,
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const selectedConversationData = conversations.find((conv) => conv.id === professionalId) || conversations[0]

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
              <button
                onClick={() => setActiveTab("mensajes")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "mensajes"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                Mensajes
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
      <main className="pt-16 h-screen flex">
        {/* Left Panel - Conversations List */}
        <div className="w-1/3 bg-gray-800 border-r border-gray-700 flex flex-col">
          {/* Search Header */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Mensajes</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-700 cursor-pointer transition-colors hover:bg-gray-700 ${
                  selectedConversation === conversation.id ? "bg-gray-700" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.unread && (
                      <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium truncate ${conversation.unread ? "text-white" : "text-gray-300"}`}>
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                    </div>
                    <p className={`text-sm truncate ${conversation.unread ? "text-gray-300" : "text-gray-400"}`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Active Chat */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-700 bg-gray-800">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={selectedConversationData.avatar || "/placeholder.svg"}
                  alt={selectedConversationData.name}
                />
                <AvatarFallback>{selectedConversationData.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-white">{selectedConversationData.name}</h3>
                <p className="text-sm text-green-400">En línea</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn ? "bg-orange-500 text-white" : "bg-gray-700 text-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isOwn ? "text-orange-100" : "text-gray-400"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex items-center space-x-3">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-orange-500 hover:bg-orange-600 text-white p-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
