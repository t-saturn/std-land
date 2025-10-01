import { useState, useEffect } from "react";
import {
  Shield, 
  CheckCircle,
  Cpu,
  Activity
} from "lucide-react";
import { HeroSection } from "@/components/views/hero-section";
import { FeaturesSection } from "@/components/views/feature-card";


export default function Inicio() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const securityFeatures = [
    "Autenticación robusta",
    "Trazabilidad completa de expedientes",
    "Backups automáticos diarios",
    "Monitoreo 24/7",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />

      {/* Security Section */}
      <section className="py-20 border-y">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Seguridad por Diseño
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Máxima seguridad para
                <span className="bg-primary bg-clip-text text-transparent"> tus documentos</span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Implementamos los más altos estándares de seguridad con tecnologías de vanguardia 
                para proteger la información crítica del gobierno regional.
              </p>

              <div className="space-y-4 mb-8">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Wazuh SIEM", description: "Detección de intrusos", color: "from-blue-500 to-cyan-500" },
                { name: "Grafana", description: "Monitoreo visual", color: "from-orange-500 to-red-500" },
                { name: "Prometheus", description: "Métricas tiempo real", color: "from-orange-500 to-yellow-500" },
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} mb-4 flex items-center justify-center`}>
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 text-chart-3 text-sm font-medium mb-4">
              <Cpu className="h-4 w-4" />
              Tecnología
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Construido con
              <span className="bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent"> tecnología moderna</span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Utilizamos las mejores herramientas y frameworks para garantizar 
              rendimiento, escalabilidad y mantenibilidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}