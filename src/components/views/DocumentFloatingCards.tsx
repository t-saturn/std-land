import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { Eye, Download, Share2, Star, TrendingUp, Users, Clock } from "lucide-react";

export function DocumentFloatingCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const cards = [
    {
      id: 1,
      title: "Expedientes Digitales",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5b2t6MWZpbWE4eXYxaXNydjFkMnF6eWJseTJkdnA4OWJhcWk4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
      subtitle: "Gestión Inteligente",
      stats: "1.2K documentos",
      icon: Eye,
      delay: 0,
      parallaxStrength: 1
    },
    {
      id: 2,
      title: "Análisis Avanzado",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1bmRvOGd6YjkwdGFzaGc4Ynp4dGI4aGZmZ3UzcjJzZGVmNzRxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif",
      subtitle: "Reportes en Tiempo Real",
      stats: "98% precisión",
      icon: TrendingUp,
      delay: 0.2,
      parallaxStrength: 0.8
    },
    {
      id: 3,
      title: "Colaboración",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVkdWVyYW1uMGc5aWFwbWc5cDFxb2g3YzBsMzQ4ZzVpOGwyNnJobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Cy1rHbQ92uuLXa/giphy.gif",
      subtitle: "Trabajo en Equipo",
      stats: "500+ usuarios",
      icon: Users,
      delay: 0.4,
      parallaxStrength: 1.2
    },
    {
      id: 4,
      title: "Procesamiento Rápido",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTNqNjI4cWJxZnR1OGdieXZ0azR0aXdlbjI4YWJ2NzFkMDd4a2t3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif",
      subtitle: "Velocidad Optimizada",
      stats: "< 2 seg respuesta",
      icon: Clock,
      delay: 0.6,
      parallaxStrength: 0.9
    }
  ];

  // Create transforms for each card individually
  const card1X = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
  const card1Y = useTransform(mouseYSpring, [-1, 1], [-10, 10]);
  const card2X = useTransform(mouseXSpring, [-1, 1], [-16, 16]);
  const card2Y = useTransform(mouseYSpring, [-1, 1], [-8, 8]);
  const card3X = useTransform(mouseXSpring, [-1, 1], [-24, 24]);
  const card3Y = useTransform(mouseYSpring, [-1, 1], [-12, 12]);
  const card4X = useTransform(mouseXSpring, [-1, 1], [-18, 18]);
  const card4Y = useTransform(mouseYSpring, [-1, 1], [-9, 9]);

  const cardTransforms = [
    { x: card1X, y: card1Y },
    { x: card2X, y: card2Y },
    { x: card3X, y: card3Y },
    { x: card4X, y: card4Y }
  ];

  // Handle mouse movement for parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative max-w-6xl mx-auto py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-1, 1], [-100, 100]),
            y: useTransform(mouseYSpring, [-1, 1], [-100, 100])
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [-1, 1], [50, -50]),
            y: useTransform(mouseYSpring, [-1, 1], [50, -50])
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(210,15,57,0.3)_1px,transparent_0)] [background-size:32px_32px]" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Capacidades del Sistema
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Experimenta las características avanzadas que transforman la gestión documental
          </p>
        </motion.div>

        {/* Floating cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const transforms = cardTransforms[index];
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  x: transforms.x,
                  y: transforms.y,
                }}
                className="group relative"
              >
                {/* Card container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Header with icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                          <p className="text-sm text-foreground/60">{card.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image container */}
                    <div className="relative mb-6 group/image">
                      <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-4 overflow-hidden">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-48 object-contain rounded-xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-4 bg-black/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Stats and rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-foreground/70">5.0</span>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{card.stats}</div>
                        <div className="text-xs text-foreground/60">Este mes</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${
                        card.id % 2 === 0 ? '#d20f39' : '#22c55e'
                      }, transparent)`,
                    }}
                    animate={{ rotate: 360, opacity: 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    whileHover={{ opacity: 0.1 }}
                  />
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/60 rounded-full"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${-2 + i}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: card.delay + i * 0.5
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-full shadow-2xl hover:shadow-3xl transition-shadow"
          >
            Descubrir Más Características
          </motion.button>
        </motion.div>
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}