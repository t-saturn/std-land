import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export function DocumentSliderPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJrczl2ajI0dndub2o5dnVnejFmNzhnb2g1ZHZzNmVseWVwemhqaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3RBGJQzIEd4L80PObA/giphy.gif",
      title: "Gestión de Expedientes",
      description: "Organiza y administra todos tus documentos"
    },
    {
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVkdWVyYW1uMGc5aWFwbWc5cDFxb2g3YzBsMzQ4ZzVpOGwyNnJobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Cy1rHbQ92uuLXa/giphy.gif",
      title: "Flujo de Trabajo",
      description: "Automatiza procesos y reduce tiempos"
    },
    {
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJyZjdraHc3NjM1NHBkMDJjbXE4anNtMWxjZ2Z3OXF2eXc0Y3M2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TinIsnGaei6zQetzrc/giphy.gif",
      title: "Reportes en Tiempo Real",
      description: "Visualiza métricas y estadísticas"
    },
    {
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenduM3N6b2N6aGljOTB0Nmdyb3RjMnVjMDczNTQ1YXc4ZGE1Y2J2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eHq86YjshP879vTEHz/giphy.gif",
      title: "Seguridad Avanzada",
      description: "Protección completa de información"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-2xl mx-auto w-full">
      {/* Main slider container */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-700 z-20">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentSlide}
          />
        </div>

        {/* Slides */}
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center "
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <button
            onClick={prevSlide}
            className="p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all hover:cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button
            onClick={nextSlide}
            className="p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all hover:cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Play/Pause button */}
        <div className="absolute z-10 bottom-4 right-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-primary/80 hover:bg-primary rounded-full transition-colors hover:cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <motion.h3
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-white mb-1"
          >
            {slides[currentSlide].title}
          </motion.h3>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-sm"
          >
            {slides[currentSlide].description}
          </motion.p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary scale-110'
                : 'bg-slate-400 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}