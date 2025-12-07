import { FileText } from "lucide-react";

export const resources = {
  manuales: [
    {
      title: "Manual de Usuario - SGD",
      description:
        "Guía completa para el Sistema de Gestión Documental con instrucciones paso a paso",
      url: "https://sisadm.onpe.gob.pe/recursos/Manual_SGD.pdf",
      type: "PDF",
      size: "13.0 MB",
      pages: "157 páginas",
      lastUpdated: "Mayo 2025",
      category: "Usuario",
      difficulty: "Básico",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500",
      downloadCount: "1,200+",
    },
  ],
  videos: [
    {
      id: "",
      title: "Cómo iniciar sesión en el SGD",
      description:
        "Conoce el paso a paso para acceder de forma segura al Sistema de Gestión Documental",
      duration: "2:32",
      views: "5,4k+",
      category: "Inicio",
      difficulty: "Básico",
      thumbnail: "",
      publishedAt: "Diciembre 2025",
    },
  ],
};

export const faqs = [
  {
    question: "¿Cómo puedo obtener mi certificado de firma digital?",
    answer:
      "Puedes obtener tu certificado digital debe enviar el formulario llenado, una declaración jurada y comunicarse con el equipo de soporte técnico para la instalación de su certificado digital.",
    category: "Firma Digital",
  },
  {
    question: "¿Qué navegadores son compatibles con el sistema?",
    answer:
      "El SGD es compatible con Chrome, Firefox, Edge y Zen en sus versiones más recientes. Recomendamos mantener el navegador actualizado para mejor rendimiento.",
    category: "Técnico",
  },
  {
    question: "¿Puedo acceder al sistema desde mi móvil?",
    answer:
      "No, aunque el sistema tiene diseño responsivo y puede usarse desde dispositivos móviles, la firma digital y el componente de trámite documentario solo funcionan en escritorio y sistema operativo Windows.",
    category: "Acceso",
  },
  {
    question: "¿Cómo puedo recuperar mi contraseña?",
    answer:
      "Aún no existe una forma directa de que el usuario pueda recuperar su contraseña. Comunicarse con el equipo de soporte técnico para actualizar su contraseña.",
    category: "Acceso",
  },
];
