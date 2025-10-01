import { entidad, moduleDetail, navigationLinks, services, socialNetworks } from "@/lib/data";
import {
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  ExternalLink,
  ArrowUp,
  Globe,
  Zap
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const certifications = [
    { name: "ISO 27001", description: "Seguridad de la Información" },
    { name: "ISO 9001", description: "Gestión de Calidad" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <img
                    src="/images/logo.png"
                    alt="GORE Ayacucho"
                    className="w-12 h-12 rounded-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground">{moduleDetail.name}</h3>
                  <p className="text-sm text-muted-foreground">{entidad.razonSocial}</p>
                </div>
              </div>
              
              <p className="text-primary-foreground mb-6 leading-relaxed">
                Sistema de Gestión Documental con firma digital e interoperabilidad 
                para modernizar la administración pública del {entidad.razonSocial}.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary-foreground mb-3">Certificaciones</h4>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl border border-border/10">
                    <Award className="h-5 w-5 text-chart-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-primary-foreground">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Globe className="h-5 w-5 text-chart-2" />
                Navegación
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary-foreground transition-all duration-300 py-2"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-chart-1" />
                Servicios Principales
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group flex items-center gap-3 p-3 bg-slate-800/30 hover:bg-slate-700/50 rounded-xl transition-all duration-300 border border-transparent hover:border-slate-600"
                    >
                      <div className="p-2 bg-muted-foreground group-hover:bg-primary rounded-lg transition-colors duration-300">
                        {service.icon}
                      </div>
                      <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors duration-300">
                        {service.label}
                      </span>
                      <ExternalLink className="h-3 w-3 group-hover:text-primary-foreground ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Phone className="h-5 w-5 text-chart-5" />
                Contacto
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <MapPin className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Dirección</div>
                    <div className="text-primary-foreground/70 text-sm">
                      {entidad.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Teléfono</div>
                    <a
                      href="tel:+51987654321"
                      className="text-primary-foreground/70 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {entidad.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <a
                      href={`mailto:${entidad.email}`}
                      className="text-primary-foreground/70 hover:text-blue-400 transition-colors duration-300 text-sm break-all"
                    >
                      {entidad.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl">
                  <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Horario de Atención</div>
                    <div className="text-primary-foreground/70 text-sm">
                      {entidad.businessHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Media */}
              <div className="flex items-center gap-6">
                <h4 className="text-sm font-semibold text-primary-foreground/70">Síguenos en:</h4>
                <div className="flex gap-4">
                  {socialNetworks.map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800 rounded-xl text-slate-400 transition-all duration-300 transform hover:scale-110 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-primary rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:cursor-pointer"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-sm font-medium">Ir arriba</span>
              </button>
            </div>

            {/* Copyright & Legal */}
            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>
                    © {currentYear} {entidad.razonSocial}. 
                    Todos los derechos reservados.
                  </span>
                </div>
              </div>
              
              {/* Security Badge */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs border border-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Conexión SSL Segura</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs border border-blue-500/20">
                  <Shield className="h-3 w-3" />
                  <span>Datos Protegidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      </div>
    </footer>
  );
}