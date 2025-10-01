import { useState, useEffect } from "react";
import { FileText, Shield, Globe, Clock } from "lucide-react";

export function DocumentFlowAnimation() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mesa de Partes Digital",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      description: "Gestión electrónica"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Firma Digital Certificada",
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-500/10",
      description: "Validación segura"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Interoperabilidad PIDE",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10", 
      description: "Conexión integrada"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Trazabilidad 24/7",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      description: "Seguimiento continuo"
    },
  ];

  return (
    <div className="relative hidden lg:block">
      {/* Container principal */}
      <div className="relative bg-card backdrop-blur-xl rounded-3xl shadow-2xl border p-8 overflow-hidden">
        
        {/* Header con indicador activo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-500 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600">Sistema Operativo</span>
          </div>
          <h3 className="text-xl font-bold">Tecnologías Integradas</h3>
        </div>

        {/* Grid de capacidades */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-500 transform ${
                activeFeature === index
                  ? `${feature.bgColor} scale-105 shadow-lg`
                  : 'bg-secondary/50 border border-border hover:bg-secondary/70'
              }`}
            >
              {/* Ícono animado */}
              <div className={`inline-flex p-4 rounded-xl transition-all duration-500 ${
                activeFeature === index
                  ? `bg-gradient-to-br ${feature.color} text-white shadow-lg`
                  : 'bg-muted text-muted-foreground'
              }`}>
                {feature.icon}
              </div>

              {/* Contenido */}
              <div className="mt-4">
                <h4 className={`font-semibold text-sm transition-colors ${
                  activeFeature === index ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {feature.title}
                </h4>
                <p className={`text-xs mt-1 transition-colors ${
                  activeFeature === index ? 'text-foreground/70' : 'text-muted-foreground/60'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Indicador de actividad */}
              {activeFeature === index && (
                <>
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-current rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl animate-pulse opacity-30"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Indicadores de estado */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Conectado</span>
          </div>
          <div className="space-y-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto animate-bounce"></div>
            <span className="text-xs text-muted-foreground">Procesando</span>
          </div>
          <div className="space-y-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-xs text-muted-foreground">Sincronizado</span>
          </div>
        </div>

        {/* Efectos de fondo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}