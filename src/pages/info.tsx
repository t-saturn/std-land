import { useState, useRef } from "react";
import { 
  FileText, 
  Video, 
  Download, 
  Play, 
  BookOpen, 
  HelpCircle, 
  MessageCircle, 
  Clock,
  CheckCircle,
  Search,
  ExternalLink,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { faqs, resources } from "@/lib/infoData";

const difficultyColors = {
  "Básico": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Intermedio": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", 
  "Avanzado": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
};

const categoryColors = {
  "Usuario": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Técnico": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Seguridad": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Inicio": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Gestión": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Firma Digital": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Acceso": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
};

export default function InfoPage() {
  const [activeTab, setActiveTab] = useState("manuales");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">      
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Centro de Recursos
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Todo lo que necesitas
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                para empezar
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Accede a manuales, videos tutoriales y preguntas frecuentes
              para sacar el máximo provecho del Sistema de Gestión Documental.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: "Manuales", value: "1+", icon: FileText },
              { label: "Videos", value: "8+", icon: Video },
              { label: "FAQs", value: "4+", icon: HelpCircle },
              { label: "Soporte 24/7", value: "✓", icon: MessageCircle }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-2 border border-slate-200 dark:border-slate-700">
              {[
                { id: "manuales", label: "Manuales", icon: FileText },
                { id: "videos", label: "Videos", icon: Video },
                { id: "faqs", label: "Preguntas Frecuentes", icon: HelpCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-700 text-purple-600 shadow-lg"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Manuales Tab */}
          {activeTab === "manuales" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Manuales y Documentación
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Documentación completa para usuarios de todos los niveles
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {resources.manuales.map((manual, index) => {
                  const Icon = manual.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${manual.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${manual.gradient} text-white shadow-lg`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[manual.category as keyof typeof categoryColors]}`}>
                              {manual.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors duration-300">
                            {manual.title}
                          </h3>
                          
                          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {manual.description}
                          </p>
                          
                          {/* Details */}
                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-600 dark:text-slate-400">{manual.pages}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Download className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-600 dark:text-slate-400">{manual.size}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-600 dark:text-slate-400">{manual.lastUpdated}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-slate-600 dark:text-slate-400">{manual.downloadCount}</span>
                            </div>
                          </div>
                          
                          {/* Difficulty Badge */}
                          <div className="flex items-center justify-between mb-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[manual.difficulty as keyof typeof difficultyColors]}`}>
                              {manual.difficulty}
                            </span>
                          </div>
                          
                          {/* Download Button */}
                          <a
                            href={manual.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r ${manual.gradient} text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
                          >
                            <Download className="h-4 w-4" />
                            <span>Descargar PDF</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Tutoriales en Video
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Aprende de forma visual con nuestros tutoriales paso a paso
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {resources.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[video.category as keyof typeof categoryColors]}`}>
                            {video.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyColors[video.difficulty as keyof typeof difficultyColors]}`}>
                            {video.difficulty}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors duration-300">
                          {video.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {video.description}
                        </p>
                        
                        {/* Video Stats */}
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{video.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Play className="h-4 w-4" />
                              <span>{video.views}</span>
                            </div>
                          </div>
                          <span>{video.publishedAt}</span>
                        </div>
                        
                        {/* YouTube Link */}
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors duration-300"
                        >
                          <Youtube className="h-4 w-4" />
                          <span>Ver en YouTube</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQs Tab */}
          {activeTab === "faqs" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Encuentra respuestas rápidas a las consultas más comunes
                </p>
              </div>

              {/* Search Bar */}
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar en preguntas frecuentes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* FAQ List */}
              <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[faq.category as keyof typeof categoryColors]}`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                          expandedFAQ === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}