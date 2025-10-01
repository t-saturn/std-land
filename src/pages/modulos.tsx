import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  FileText, 
  Users, 
  CheckCircle, 
  Footprints,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import systemConfig from "@/lib/config";

const modules = [
  {
    title: "Sistema de Trámite Documentario",
    description: "Gestión eficiente de documentos con firma digital certificada y flujos automatizados",
    url: "/sgd/login.do",
    icon: FileText,
    gradient: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    features: ["Firma Digital", "Flujos Automatizados", "Trazabilidad Completa"],
    status: "Activo",
    users: "2,500+ usuarios",
    category: "Productividad"
  },
  {
    title: "Mesa de Partes Digital",
    description: "Trámites virtuales al alcance de todos los ciudadanos las 24 horas del día",
    url: systemConfig.services.mesaPartes.url,
    icon: Users,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    features: ["Acceso 24/7", "Notificaciones", "Seguimiento en Tiempo Real"],
    status: "Activo",
    users: "15,000+ ciudadanos",
    category: "Ciudadano"
  },
  {
    title: "Seguimiento de Documentos",
    description: "Monitorea el estado y ubicación de tus trámites en tiempo real",
    url: systemConfig.services.seguimiento.url,
    icon: Footprints,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
    features: ["Tiempo Real", "Historial Completo", "Alertas Automáticas"],
    status: "Activo",
    users: "10,000+ consultas",
    category: "Seguimiento"
  },
  {
    title: "Verificación de Documentos",
    description: "Valida la autenticidad de documentos internos y profesionales",
    url: "/verifica/inicio.do",
    icon: CheckCircle,
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20",
    features: ["Validación Instantánea", "Códigos QR", "Certificados Digitales"],
    status: "Activo",
    users: "5,000+ verificaciones",
    category: "Seguridad"
  },
];

const categoryColors = {
  "Productividad": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Ciudadano": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Seguimiento": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Seguridad": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
};

export default function ModulosPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % modules.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ActiveIcon = modules[activeModule].icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Módulos del Sistema
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Herramientas que
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                transforman la gestión
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Descubre módulos diseñados para simplificar procesos, mejorar la eficiencia 
              y brindar una experiencia excepcional tanto a funcionarios como ciudadanos.
            </p>
          </motion.div>

          {/* Featured Module Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${modules[activeModule].bgGradient} border border-slate-200 dark:border-slate-700 shadow-2xl`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${modules[activeModule].gradient} text-white shadow-lg`}>
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[modules[activeModule].category as keyof typeof categoryColors]}`}>
                      {modules[activeModule].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {modules[activeModule].title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {modules[activeModule].description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {modules[activeModule].features.map((feature, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={modules[activeModule].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${modules[activeModule].gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <span>Acceder Ahora</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <ActiveIcon className="h-16 w-16 text-slate-400 mb-4" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Users className="h-4 w-4" />
                          <span>{modules[activeModule].users}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>{modules[activeModule].status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Module Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeModule === index ? 'bg-primary scale-125' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Modules Grid */}
      <section className="py-20 bg-white dark:bg-slate-900" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Todos los Módulos Disponibles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explora todas las herramientas que tenemos para ofrecerte
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {modules.map((module, index) => {
              const Icon = module.icon;
              const isHovered = hoveredModule === index;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  onMouseEnter={() => setHoveredModule(index)}
                  onMouseLeave={() => setHoveredModule(null)}
                  className="group"
                >
                  <div className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2 ${
                    isHovered ? 'shadow-2xl border-primary/20' : 'shadow-lg border-slate-200 dark:border-slate-700'
                  } bg-white dark:bg-slate-800 overflow-hidden`}>
                    
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.bgGradient} opacity-50 transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient} text-white shadow-lg transform transition-transform duration-300 ${
                          isHovered ? 'scale-110 rotate-6' : ''
                        }`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[module.category as keyof typeof categoryColors]}`}>
                          {module.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {module.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      
                      {/* Features */}
                      <div className={`space-y-2 mb-6 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                      }`}>
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className={`flex items-center justify-between mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-80'
                      }`}>
                        <div className="flex items-center gap-2 text-xs">
                          <Users className="h-3 w-3 text-slate-500" />
                          <span className="text-slate-600 dark:text-slate-400">{module.users}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600">{module.status}</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <a
                        href={module.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                          isHovered 
                            ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg transform scale-105` 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        <span>Acceder</span>
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`} />
                      </a>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}