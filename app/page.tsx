"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Play, Users, BookOpen, MessageCircle, Star, Check, Rocket, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animatedStats, setAnimatedStats] = useState({ professionals: 0, students: 0, courses: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateStats()
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateStats = () => {
    const targets = { professionals: 50, students: 1000, courses: 200 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedStats({
        professionals: Math.floor(targets.professionals * easeOut),
        students: Math.floor(targets.students * easeOut),
        courses: Math.floor(targets.courses * easeOut),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
  }

  const featuredCourses = [
    {
      id: 1,
      title: "Microeconomía Intermedia",
      instructor: "Dr. Alejandro Vargas",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 1250,
    },
    {
      id: 2,
      title: "Econometría Aplicada con Stata",
      instructor: "Msc. Lucía Mendoza",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      students: 980,
    },
    {
      id: 3,
      title: "Teoría de Juegos y Estrategia",
      instructor: "Dra. Elena Ríos",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      students: 750,
    },
    {
      id: 4,
      title: "Finanzas Corporativas y Valoración",
      instructor: "Dr. Roberto Silva",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      students: 650,
    },
  ]

  const professionals = [
    {
      name: "Dr. Alejandro Vargas",
      specialty: "Experto en Econometría",
      image: "/placeholder.svg?height=150&width=150",
      experience: "10+ años",
    },
    {
      name: "Msc. Lucía Mendoza",
      specialty: "Especialista en Finanzas",
      image: "/placeholder.svg?height=150&width=150",
      experience: "15+ años",
    },
    {
      name: "Dra. Elena Ríos",
      specialty: "Investigadora en Teoría de Juegos",
      image: "/placeholder.svg?height=150&width=150",
      experience: "8+ años",
    },
    {
      name: "Dr. Roberto Silva",
      specialty: "Director Financiero y Consultor",
      image: "/placeholder.svg?height=150&width=150",
      experience: "12+ años",
    },
  ]

  const pricingPlans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      popular: false,
      features: ["Acceso a 50+ cursos", "Certificados de finalización", "Soporte por email", "Acceso móvil"],
    },
    {
      name: "Pro",
      price: "$59",
      period: "/mes",
      popular: true,
      features: [
        "Acceso ilimitado a cursos",
        "Mentorías 1:1 con profesionales",
        "Certificados verificados",
        "Soporte prioritario",
        "Proyectos prácticos",
        "Networking exclusivo",
      ],
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/mes",
      popular: false,
      features: ["Todo lo de Pro", "Cursos personalizados", "Dashboard de equipo", "API access", "Soporte dedicado"],
    },
  ]

  // Constellation points for background animation
  const constellationPoints = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.3 + 0.1,
  }))

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Constellation Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Pulsing Radial Gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 0.02}% ${50 + mousePosition.y * 0.02}%, #4d2000 0%, #000000 70%)`,
            animationName: "breathe",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />

        {/* Constellation Points */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {constellationPoints.map((point) => (
            <circle
              key={point.id}
              cx={`${point.x}%`}
              cy={`${point.y}%`}
              r={point.size}
              fill="#FF6B00"
              opacity="0.6"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${3 + point.speed * 4}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${Math.sin(point.id) * 10},${Math.cos(point.id) * 10}; 0,0`}
                dur={`${8 + point.speed * 5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* Connection Lines */}
          {constellationPoints.slice(0, 15).map((point, index) => {
            const nextPoint = constellationPoints[(index + 1) % 15]
            return (
              <line
                key={`line-${index}`}
                x1={`${point.x}%`}
                y1={`${point.y}%`}
                x2={`${nextPoint.x}%`}
                y2={`${nextPoint.y}%`}
                stroke="#FF6B00"
                strokeWidth="0.5"
                opacity="0.2"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur={`${4 + Math.random() * 3}s`}
                  repeatCount="indefinite"
                />
              </line>
            )
          })}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Piensa+
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-pulse">Potencia</span>{" "}
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                tu
              </span>{" "}
              <span className="inline-block animate-pulse">Futuro</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              Aprende con los mejores. Cursos y mentorías diseñadas por profesionales para estudiantes como tú.
            </p>
            <Link href="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 hover:brightness-110"
              >
                Explorar Cursos
                <ChevronRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Por qué Piensa+?</h2>
            <p className="text-xl text-gray-300">Tres pilares que transformarán tu carrera</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Crecimiento Acelerado",
                description:
                  "Aprende de forma estructurada y eficiente con metodologías probadas que aceleran tu desarrollo profesional.",
              },
              {
                icon: Brain,
                title: "Conocimiento de Vanguardia",
                description:
                  "Accede a contenido actualizado y técnicas innovadoras directamente de expertos de la industria.",
              },
              {
                icon: Zap,
                title: "Mentorías 1 a 1",
                description:
                  "Conecta directamente con profesionales para recibir orientación personalizada y resolver dudas específicas.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:shadow-orange-500/50">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestra Comunidad</h2>
            <p className="text-xl text-gray-300">Números que hablan por sí solos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                +{animatedStats.professionals}
              </div>
              <p className="text-xl text-gray-300 font-semibold">Profesionales de Élite</p>
              <p className="text-gray-400 mt-2">Expertos verificados de la industria</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                +{animatedStats.students}
              </div>
              <p className="text-xl text-gray-300 font-semibold">Estudiantes Activos</p>
              <p className="text-gray-400 mt-2">Transformando sus carreras diariamente</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                +{animatedStats.courses}
              </div>
              <p className="text-xl text-gray-300 font-semibold">Cursos Especializados</p>
              <p className="text-gray-400 mt-2">Contenido curado y actualizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cursos Destacados</h2>
            <p className="text-xl text-gray-300">Los cursos más populares de nuestra plataforma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-4 bg-gray-800/80 backdrop-blur-sm border-gray-600 hover:border-orange-500 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform:
                    hoveredCourse === course.id
                      ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white animate-pulse" />
                    </div>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-t-lg shadow-inner group-hover:shadow-orange-500/50"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                        <span className="text-sm font-medium text-white">{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{course.students}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-300">Tres pasos simples para transformar tu aprendizaje</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Explora", desc: "Encuentra cursos y profesionales en tu área de interés" },
              { icon: Play, title: "Aprende", desc: "Accede a videos y materiales de alta calidad" },
              {
                icon: MessageCircle,
                title: "Conecta",
                desc: "Contacta a los profesionales para tutorías personalizadas",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg group-hover:shadow-orange-500/50 hover:brightness-110">
                  <step.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Profesionales Destacados</h2>
            <p className="text-xl text-gray-300">Aprende de expertos con experiencia real en la industria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionals.map((professional, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <img
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-600 group-hover:border-orange-500 shadow-xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 hover:brightness-110"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                    {professional.experience}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {professional.name}
                </h3>
                <p className="text-sm text-gray-400">{professional.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Elige tu Plan</h2>
            <p className="text-xl text-gray-300">Encuentra el plan perfecto para tu crecimiento profesional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-500 hover:scale-110 animate-fade-in-up ${
                  plan.popular
                    ? "bg-gray-800/90 border-orange-500 border-2 shadow-2xl shadow-orange-500/30 backdrop-blur-sm"
                    : "bg-gray-800/80 border-gray-700 hover:border-orange-500 backdrop-blur-sm"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 text-sm font-semibold animate-pulse">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2 text-lg">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-orange-500/50 hover:scale-105 hover:brightness-110"
                        : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-orange-500 hover:brightness-110"
                    }`}
                  >
                    Comenzar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Professional Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo and Tagline */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Piensa+
              </h2>
              <p className="text-gray-400 text-lg">Potenciando tu futuro profesional</p>
            </div>

            {/* Column 2: Platform */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Plataforma</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/professionals" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Profesionales
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">© 2024 Piensa+. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}
