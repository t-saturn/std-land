/* AUTO-GENERATED FILE — DO NOT EDIT
   Valores de EJEMPLO (sin entidad). En producción se reemplaza en el build:
   uv run sgd build <entidad>  (entities/<entidad>/entity.yml)
*/
export const appConfig = {
  system: {
    name: "Sistema de Gestión Documental",
    shortName: "SGD",
    version: "1.0.0",
    description: "Sistema de Gestión Documental",
    timezone: "America/Lima",
    locale: "es-PE",
    charset: "UTF-8",
  },
  entity: {
    name: "Municipalidad Distrital de Ejemplo",
    shortName: "MDE",
    acronym: "MDE",
    legalName: "Municipalidad Distrital de Ejemplo",
    ruc: "20000000000",
    founded: "1990",
    description: "ACTIVIDADES DE LA ADMINISTRACIÓN PÚBLICA EN GENERAL",
    businessHours: "Lunes a Viernes 8:00am - 5:00pm",
  },
  contact: {
    address: {
      street: "Av. Principal 123",
      district: "Distrito",
      city: "Lima",
      state: "Lima",
      country: "Perú",
      postalCode: "150101",
      full: "Av. Principal 123 - Distrito - Lima - Lima - Perú",
    },
    phone: {
      main: "01-0000000",
      mobile: "",
      whatsapp: "",
    },
    email: {
      main: "contacto@ejemplo.gob.pe",
      support: "soporte@ejemplo.gob.pe",
    },
    website: {
      main: "https://ejemplo.gob.pe",
    },
  },
  socialMedia: {
    facebook: {
      url: "",
      username: "",
    },
    x: {
      url: "",
      username: "",
    },
    instagram: {
      url: "",
      username: "",
    },
    linkedin: {
      url: "",
      username: "",
    },
    youtube: {
      url: "",
      username: "",
    },
    tiktok: {
      url: "",
      username: "",
    },
  },
  app: {
    title: "MUNICIPALIDAD DISTRITAL DE EJEMPLO - ACTIVIDADES DE LA ADMINISTRACIÓN PÚBLICA EN GENERAL",
    shortTitle: "MDE",
    description: "ACTIVIDADES DE LA ADMINISTRACIÓN PÚBLICA EN GENERAL",
    keywords: ["gestión documental", "trámite documentario", "MDE"],
    author: "MUNICIPALIDAD DISTRITAL DE EJEMPLO",
  },
  services: {
    mesaPartes: {
      name: "Mesa de partes digital",
      description: "Registro de documentos y notificaciones en tiempo real.",
      url: "https://mpd.ejemplo.gob.pe/",
    },
    seguimiento: {
      name: "Seguimiento de trámites",
      description: "Consulta el estado de tus documentos.",
      url: "https://consulta.ejemplo.gob.pe/",
    },
    verifica: {
      name: "Verificación de documentos",
      description: "Valida la autenticidad de documentos internos y profesionales",
      url: "https://verifica.ejemplo.gob.pe/",
    },
    mpvio: {
      name: "Interoperabilidad",
      description: "Módulo de interoperabilidad con otras entidades.",
      url: "",
    },
  },
} as const;

export default appConfig;
