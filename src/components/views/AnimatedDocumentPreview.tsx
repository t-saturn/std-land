import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedDocumentPreview() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Container with glass effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-xl animate-pulse" />
        
        {/* Main content */}
        <div className="relative z-10">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="w-96 h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl animate-pulse flex items-center justify-center">
              <div className="text-slate-500 text-sm">Cargando animación...</div>
            </div>
          )}
          
          {/* GIF Image */}
          <motion.img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5b2t6MWZpbWE4eXYxaXNydjFkMnF6eWJseTJkdnA4OWJhcWk4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif"
            alt="Document Flow Animation"
            className={`w-96 h-64 object-contain rounded-xl transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: imageLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Floating elements for extra visual appeal */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400/30 rounded-full blur-sm"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground/90 mb-2">
            Gestión Automatizada
          </h3>
          <p className="text-sm text-foreground/70">
            Visualiza el flujo de documentos en tiempo real
          </p>
        </motion.div>
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}