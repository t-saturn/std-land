import { useState, useEffect } from "react";
import { Shield, CheckCircle, Cpu, Activity } from "lucide-react";
import { HeroSection } from "@/components/views/hero-section";
import { FeaturesSection } from "@/components/views/feature-card";

export default function Inicio() {
  const [_activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const securityFeatures = ["Autenticación robusta", "Trazabilidad completa de expedientes", "Backups automáticos diarios", "Monitoreo 24/7"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />

      {/* Security Section */}
      <section className="py-20 border-y">
        <div className="mx-auto px-6 container">
          <div className="items-center gap-16 grid lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 mb-6 px-4 py-2 rounded-full font-medium text-red-600 dark:text-red-400 text-sm">
                <Shield className="w-4 h-4" />
                Seguridad por Diseño
              </div>

              <h2 className="mb-6 font-bold text-slate-900 dark:text-white text-4xl">
                Máxima seguridad para
                <span className="bg-primary bg-clip-text text-transparent"> tus documentos</span>
              </h2>

              <p className="mb-8 text-slate-600 dark:text-slate-300 text-xl">
                Implementamos los más altos estándares de seguridad con tecnologías de vanguardia para proteger la información crítica del gobierno regional.
              </p>

              <div className="space-y-4 mb-8">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gap-4 grid grid-cols-2">
              {[
                { name: "Wazuh SIEM", description: "Detección de intrusos", color: "from-blue-500 to-cyan-500" },
                { name: "Grafana", description: "Monitoreo visual", color: "from-orange-500 to-red-500" },
                { name: "Prometheus", description: "Métricas tiempo real", color: "from-orange-500 to-yellow-500" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl p-6 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all hover:-translate-y-1 duration-300 transform"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} mb-4 flex items-center justify-center`}>
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{tool.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 border-y">
        <div className="mx-auto px-6 container">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-chart-3/10 mb-4 px-4 py-2 rounded-full font-medium text-chart-3 text-sm">
              <Cpu className="w-4 h-4" />
              Tecnología
            </div>

            <h2 className="mb-4 font-bold text-slate-900 dark:text-white text-4xl lg:text-5xl">
              Construido con
              <span className="bg-clip-text bg-gradient-to-r from-chart-2 to-chart-3 text-transparent"> tecnología moderna</span>
            </h2>

            <p className="mx-auto max-w-3xl text-slate-600 dark:text-slate-300 text-xl">
              Utilizamos las mejores herramientas y frameworks para garantizar rendimiento, escalabilidad y mantenibilidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
