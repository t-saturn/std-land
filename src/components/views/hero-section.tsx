import { useState, useEffect } from "react";
import { ArrowRight, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { DocumentFlowAnimation } from "./document-animation";
import systemConfig from "@/lib/config";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Background */}
      <AnimatedBackdrop />

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-10 lg:pt-0">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">
                Operación continua 24/7
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-foreground/70 bg-clip-text text-transparent">
                  Sistema de
                </span>
                <br />
                <span className="bg-primary bg-clip-text text-transparent">
                  Gestión Documental
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Transformamos la gestión pública con tecnología de vanguardia. 
              Centraliza expedientes, automatiza flujos y garantiza trazabilidad.
            </p>

            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <a target="_blank" href={'/sgd/login.do'} className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Ingresar al SGD
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a href={systemConfig.services.mesaPartes.url} target="_blank" className="px-8 py-4 backdrop-blur-sm border text-accent-foreground font-semibold rounded-2xl hover:bg-card/80 transition-all duration-300">
                Mesa de partes
              </a>

              <a href={systemConfig.services.seguimiento.url} target="_blank" className="px-8 py-4 backdrop-blur-sm border text-accent-foreground font-semibold rounded-2xl hover:bg-card/80 transition-all duration-300">
                Seguimiento SGD
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Certificado ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <DocumentFlowAnimation />
        </div>
      </div>

      {mounted && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
}

const AnimatedBackdrop: React.FC = () => (
  <div className="-z-10 absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15, 138, 15, 0.06),transparent_60%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(23, 196, 46, 0.06),transparent)]" />
    <motion.div
      className="-top-24 -left-24 absolute bg-primary/20 blur-3xl rounded-full w-72 h-72"
      animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0], rotate: [0, 15, -10, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="right-0 bottom-0 absolute bg-primary/10 blur-3xl rounded-full w-80 h-80"
      animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
      <div className="bg-[radial-gradient(#000_1px,transparent_1px)] w-full h-full [background-size:12px_12px]" />
    </div>
  </div>
);