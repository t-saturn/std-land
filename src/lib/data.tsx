import { Clock, FileText, Home, Info, Shield, Zap } from "lucide-react";
import { Facebook, Instagram, Twitter } from "@/components/icons/brand-icons";
import systemConfig from "./config";

export const entidad = {
  razonSocial: systemConfig.entity.name,
  siglas: systemConfig.entity.acronym,
  address: systemConfig.contact.address.full,
  phone: systemConfig.contact.phone.main,
  email: systemConfig.contact.email.main,
  businessHours: systemConfig.entity.businessHours,
};

export const socialNetworks = [
  {
    Icon: Facebook,
    href: systemConfig.socialMedia.facebook.url,
    label: "Facebook",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
  {
    Icon: Twitter,
    href: systemConfig.socialMedia.x.url,
    label: "X",
    color: "hover:text-sky-400 hover:bg-sky-400/10",
  },
  {
    Icon: Instagram,
    href: systemConfig.socialMedia.instagram.url,
    label: "Instagram",
    color: "hover:text-pink-400 hover:bg-pink-400/10",
  },
];

export const moduleDetail = {
  name: systemConfig.system.shortName,
};

export const navigationLinks = [
  {
    label: "Inicio",
    href: "/",
    icon: <Home className="w-4 h-4" />,
    description: "Página principal del SGD",
  },
  {
    label: "Módulos",
    href: "/modulos",
    icon: <FileText className="w-4 h-4" />,
    description: "Gestión documental y trámites",
  },
  {
    label: "Información",
    href: "/info",
    icon: <Info className="w-4 h-4" />,
    description: "Documentación y ayuda",
  },
];

export const services = [
  {
    label: systemConfig.services.mesaPartes.name,
    href: systemConfig.services.mesaPartes.url,
    icon: <FileText className="w-4 h-4" />,
    description: systemConfig.services.mesaPartes.description,
    badge: "Ciudadano",
  },
  {
    label: systemConfig.services.seguimiento.name,
    href: systemConfig.services.seguimiento.url,
    icon: <Clock className="w-4 h-4" />,
    description: systemConfig.services.seguimiento.description,
    badge: "Productividad",
  },
  {
    label: systemConfig.services.verifica.name,
    href: systemConfig.services.verifica.url,
    icon: <Shield className="w-4 h-4" />,
    description: systemConfig.services.verifica.description,
    badge: "Seguridad",
  },
  {
    label: systemConfig.services.mpvio.name,
    href: systemConfig.services.mpvio.url,
    icon: <Zap className="w-4 h-4" />,
    description: systemConfig.services.mpvio.description,
    badge: "API",
  },
];
