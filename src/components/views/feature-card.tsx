import { ReactElement, useState } from "react";
import { 
  ArrowUpRight,
  CheckCircle,
  Users,
  Database,
} from "lucide-react";
import { services } from "@/lib/data";

const gradients = {
  "Ciudadano": "from-blue-500 to-cyan-500",
  "Seguridad": "from-red-500 to-pink-500",
  "Productividad": "from-green-500 to-teal-500",
  "API": "from-orange-500 to-yellow-500",
};

const backgroundPatterns = {
  "Ciudadano": "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-transparent dark:from-blue-950 dark:via-blue-900 dark:to-transparent",
  "Seguridad": "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100 via-red-50 to-transparent dark:from-red-950 dark:via-red-900 dark:to-transparent",
  "Productividad": "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-green-50 to-transparent dark:from-green-950 dark:via-green-900 dark:to-transparent",
  "API": "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-orange-50 to-transparent dark:from-orange-950 dark:via-orange-900 dark:to-transparent",
};

const additionalInfo = {
  "Mesa de partes digital": {
    benefits: ["Reduce tiempo 70%", "Elimina papel", "24/7 disponible"],
    users: "15,000+ ciudadanos"
  },
  "Verificación de documentos": {
    benefits: ["Validación de firma digital", "Intuitiva", "Seguridad garantizada"],
    users: "5,000+ documentos"
  },
  "Seguimiento de trámites": {
    benefits: ["Reporte detallado", "Facilidad de uso", "Seguridad garantizada"],
    users: "10,000+ documentos"
  },
  "Interoperabilidad": {
    benefits: ["PIDE", "Integración RENIEC", "Integración SUNAT"],
    users: "4+ sistemas"
  },
};

export function FeatureCard({
  icon,
  label,
  description,
  badge,
  href
}: {
  icon: ReactElement;
  label: string;
  description: string;
  badge?: string;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = badge ? gradients[badge as keyof typeof gradients] : "from-gray-500 to-gray-600";
  const bgPattern = badge ? backgroundPatterns[badge as keyof typeof backgroundPatterns] : "";
  const info = additionalInfo[label as keyof typeof additionalInfo];

  return (
    <article 
      className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${bgPattern}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-xl`}></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
            {icon}
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-50 blur-md transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`}></div>
          </div>
          
          {badge && (
            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${gradient} text-white shadow-sm`}>
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
          {label}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Benefits List */}
      {info && (
        <div className={`relative z-10 space-y-2 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {info.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {info && (
        <div className={`relative z-10 flex items-center gap-4 mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-70'}`}>
          <Users className="h-5 w-5 text-slate-500" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{info.users}</span>
        </div>
      )}

      {/* Action Button */}
      <div className="relative z-10 flex items-center justify-between">
        <a href={href} className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
          isHovered 
            ? `bg-gradient-to-r ${gradient} text-white shadow-lg transform scale-105` 
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}>
          <span>Explorar</span>
          <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
        </a>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-500">Activo</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
      
      {/* Border Glow */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
        isHovered ? `shadow-2xl shadow-${badge?.toLowerCase()}-500/20` : ''
      }`}></div>
    </article>
  );
}

// Main Features Section Component
export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 text-chart-2 text-sm font-medium mb-4">
            <Database className="h-4 w-4" />
            Características Principales
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Todo lo que necesitas en
            <span className="bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent"> un solo lugar</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Moderniza tu gestión documental con herramientas inteligentes, 
            seguridad avanzada y experiencia de usuario excepcional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((feature, index) => (
            <div 
              key={feature.label}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fadeInUp"
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}