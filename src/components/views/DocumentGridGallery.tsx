import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Zap, BarChart3, Shield, FileText } from "lucide-react";

export function DocumentGridGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: FileText,
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5b2t6MWZpbWE4eXYxaXNydjFkMnF6eWJseTJkdnA4OWJhcWk4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
      title: "Gestión Documental",
      description: "Administra expedientes con facilidad",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVkdWVyYW1uMGc5aWFwbWc5cDFxb2g3YzBsMzQ4ZzVpOGwyNnJobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Cy1rHbQ92uuLXa/giphy.gif",
      title: "Automatización",
      description: "Flujos de trabajo inteligentes",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1bmRvOGd6YjkwdGFzaGc4Ynp4dGI4aGZmZ3UzcjJzZGVmNzRxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif",
      title: "Análisis",
      description: "Reportes en tiempo real",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Shield,
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTNqNjI4cWJxZnR1OGdieXZ0azR0aXdlbjI4YWJ2NzFkMDd4a2t3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif",
      title: "Seguridad",
      description: "Protección de datos avanzada",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
        <p className="text-foreground/70">Descubre las capacidades de nuestro sistema</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl h-64 cursor-pointer">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon and title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>

                  {/* Image container */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                        rotateY: hoveredIndex === index ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-32 h-24 object-contain rounded-lg shadow-lg"
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 text-center">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-xl`}
                />
              </div>

              {/* Floating particles */}
              {hoveredIndex === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0, 1, 0],
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full blur-sm`}
                      style={{
                        top: `${20 + i * 20}%`,
                        right: `${-5 + i * 2}%`,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
      >
        <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform shadow-lg">
          Explorar Todas las Características
        </button>
      </motion.div>
    </div>
  );
}