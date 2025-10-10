import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Monitor, Maximize2, X, Minus, Circle } from "lucide-react";
import appConfig from "@/lib/config";

export function DocumentDashboardMockup() {
  const [currentView, setCurrentView] = useState(0);
  
  const dashboardViews = [
    {
      title: "Panel Principal",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5b2t6MWZpbWE4eXYxaXNydjFkMnF6eWJseTJkdnA4OWJhcWk4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
      description: "Vista general de todos los expedientes"
    },
    {
      title: "Flujo de Trabajo",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVkdWVyYW1uMGc5aWFwbWc5cDFxb2g3YzBsMzQ4ZzVpOGwyNnJobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Cy1rHbQ92uuLXa/giphy.gif",
      description: "Automatización de procesos documentales"
    },
    {
      title: "Reportes",
      image: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1bmRvOGd6YjkwdGFzaGc4Ynp4dGI4aGZmZ3UzcjJzZGVmNzRxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif",
      description: "Análisis y métricas en tiempo real"
    }
  ];

  // Auto-cycle through views
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % dashboardViews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dashboardViews.length]);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Floating elements background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-green-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main container - Browser mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Browser header */}
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-3">
          {/* Traffic light buttons */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Address bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="bg-slate-600 rounded-lg px-3 py-1 text-sm text-slate-300 flex items-center gap-2">
              <Circle className="w-3 h-3 text-green-400 fill-current" />
              {appConfig.services.mesaPartes.url}
            </div>
          </div>
          
          {/* Window controls */}
          <div className="flex gap-2">
            <Minus className="w-4 h-4 text-slate-400" />
            <Maximize2 className="w-4 h-4 text-slate-400" />
            <X className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Browser content area */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 min-h-96">
          
          {/* Navigation tabs */}
          <div className="flex gap-1 mb-6">
            {dashboardViews.map((view, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-white/70 text-slate-600 hover:bg-white'
                }`}
              >
                {view.title}
              </button>
            ))}
          </div>

          {/* Dashboard content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            
            {/* Dashboard header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {dashboardViews[currentView].title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {dashboardViews[currentView].description}
                  </p>
                </div>
                <Monitor className="w-8 h-8 opacity-70" />
              </div>
            </div>

            {/* Main content area */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Stats cards */}
                {['17,4k', '89%', '24/7'].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 text-center border border-slate-200"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{stat}</div>
                    <div className="text-xs text-slate-600">
                      {index === 0 && 'Documentos procesados'}
                      {index === 1 && 'Eficiencia'}
                      {index === 2 && 'Disponibilidad'}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Main visualization area */}
              <div className="bg-slate-50 rounded-lg flex items-center justify-center min-h-64 relative overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>

                {/* Main GIF display */}
                <motion.div
                  key={currentView}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full"
                >
                  <img
                    src={dashboardViews[currentView].image}
                    alt={dashboardViews[currentView].title}
                    className="w-full h-60 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {dashboardViews.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentView ? 'w-8 bg-primary' : 'w-2 bg-slate-400'
            }`}
            animate={{ scale: index === currentView ? 1.1 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}