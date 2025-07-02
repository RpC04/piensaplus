"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  Star,
  GraduationCap,
  Briefcase,
  MessageCircle,
  MapPin,
  BookOpen,
  Globe,
  Users,
  Clock,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useParams } from 'next/navigation';


export default function ProfessionalProfile() {
  const params = useParams(); 
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const professionalId = Number.parseInt(id || "1");

  // Mock data - would come from API/database based on ID
  const professional = {
    id: professionalId,
    name: "Dr. Alejandro Vargas",
    title: "Experto en Econometría",
    description:
      "Especialista en econometría aplicada con más de 10 años de experiencia en análisis de datos económicos y modelado estadístico. He trabajado con empresas Fortune 500 y organizaciones gubernamentales para desarrollar modelos predictivos y análisis de políticas económicas.",
    image: "/placeholder.svg?height=200&width=200",
    experience: "10+ años",
    rating: 4.9,
    students: 2500,
    courses: 5,
    education: "PhD en Economía - Universidad de Chicago",
    location: "Bogotá, Colombia",
    languages: ["Español", "Inglés", "Francés"],
    availability: "Lunes a Viernes, 9:00 AM - 6:00 PM",
    expertise: ["Econometría", "Stata", "Análisis de Datos", "Modelos de Regresión", "Series de Tiempo"],
    coursesTeaching: [
      {
        id: 1,
        title: "Econometría Aplicada con Stata",
        students: 1250,
        rating: 4.9,
        duration: "12 semanas",
      },
      {
        id: 2,
        title: "Análisis de Regresión Avanzado",
        students: 890,
        rating: 4.8,
        duration: "8 semanas",
      },
      {
        id: 3,
        title: "Series de Tiempo para Pronósticos",
        students: 360,
        rating: 4.9,
        duration: "10 semanas",
      },
    ],
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
                <button className="px-4 py-2 text-sm font-medium text-orange-500 border-b-2 border-orange-500">
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
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/professionals">
              <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Profesionales
              </Button>
            </Link>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Summary (35% width) */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-800 border-gray-700 sticky top-24">
                <CardContent className="p-8 text-center">
                  {/* Profile Photo */}
                  <div className="relative mb-6">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-gray-600">
                      <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                      <AvatarFallback className="text-4xl">{professional.name[0]}</AvatarFallback>
                    </Avatar>
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1">
                      {professional.experience}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h1 className="text-3xl font-bold text-white mb-2">{professional.name}</h1>

                  {/* Short Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{professional.description}</p>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Star className="h-5 w-5 fill-orange-500 text-orange-500 mr-1" />
                        <span className="text-lg font-bold text-white">{professional.rating}</span>
                      </div>
                      <p className="text-sm text-gray-400">Rating</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-orange-500 mr-1" />
                        <span className="text-lg font-bold text-white">{professional.students.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-400">Estudiantes</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <BookOpen className="h-5 w-5 text-orange-500 mr-1" />
                        <span className="text-lg font-bold text-white">{professional.courses}</span>
                      </div>
                      <p className="text-sm text-gray-400">Cursos</p>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <Link href={`/chat/${professional.id}`}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg font-semibold mb-4">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contactar Profesional
                    </Button>
                  </Link>

                  {/* Quick Info */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{professional.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{professional.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Globe className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{professional.languages.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Information (65% width) */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <User className="h-6 w-6 text-orange-500 mr-3" />
                    Sobre el Profesional
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">{professional.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 text-orange-500 mr-2" />
                        Educación
                      </h3>
                      <p className="text-gray-300">{professional.education}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Briefcase className="h-5 w-5 text-orange-500 mr-2" />
                        Experiencia
                      </h3>
                      <p className="text-gray-300">{professional.experience} en la industria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expertise Section */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Star className="h-6 w-6 text-orange-500 mr-3" />
                    Áreas de Especialización
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {professional.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Courses Section */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BookOpen className="h-6 w-6 text-orange-500 mr-3" />
                    Cursos que Imparte
                  </h2>
                  <div className="space-y-4">
                    {professional.coursesTeaching.map((course) => (
                      <div
                        key={course.id}
                        className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                          <Badge className="bg-gray-600 text-gray-300">{course.duration}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-300">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{course.students.toLocaleString()} estudiantes</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-orange-500 text-orange-500 mr-2" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
