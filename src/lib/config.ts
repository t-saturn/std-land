/* AUTO-GENERATED FILE — DO NOT EDIT
   Source: scripts/config/conf-std-land.yml
   Command: python apply_config_ts.py --schema scripts/config/conf-std-land.yml --out std-land/src/lib/config.ts
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
    name: "REDORANGE",
    shortName: "REDORANGE",
    acronym: "RO",
    legalName: "REDORANGE E.I.R.L.",
    ruc: "20611656891",
    founded: "2025",
    description: "CONSULTORÍA DE INFORMÁTICA Y GESTIÓN DE INSTALACIONES INFORMÁTICAS",
    businessHours: "Lunes a Viernes 8:00am - 1:00pm 2:30pm - 4:30pm",
  },
  contact: {
    address: {
      street: "CAL.LOS GERANIOS MZA. A LOTE. 9A C.P. LAS ORQUIDEAS DE BELLO HORIZONTE",
      district: "CARABAYLLO",
      city: "LIMA",
      state: "LIMA",
      country: "PERÚ",
      postalCode: "15036",
      full: "CAL.LOS GERANIOS MZA. A LOTE. 9A C.P. LAS ORQUIDEAS DE BELLO HORIZONTE LIMA - LIMA - CARABAYLLO",
    },
    phone: {
      main: "+51 987 370 699",
      mobile: "+51 987 370 699",
      whatsapp: "+51987370699",
      formatted: "(51) 987370699",
    },
    email: {
      main: "contacto@redorange.net.pe",
      support: "soporte@redorange.net.pe",
      sales: "ventas@redorange.net.pe",
      info: "info@redorange.net.pe",
    },
    website: {
      main: "https://www.redorange.net.pe",
    },
  },
  socialMedia: {
    facebook: {
      url: "https://facebook.com/redorange",
      username: "@redorange",
      id: "redorange",
    },
    x: {
      url: "https://x.com/redorange",
      username: "@redorange",
      handle: "redorange",
    },
    instagram: {
      url: "https://instagram.com/redorange",
      username: "@redorange",
    },
    linkedin: {
      url: "https://linkedin.com/company/redorange",
      company: "redorange",
    },
    youtube: {
      url: "https://youtube.com/@redorange",
      channel: "redorange",
    },
    tiktok: {
      url: "https://tiktok.com/@redorange",
      username: "@redorange",
    },
  },
  app: {
    title: "REDORANGE - CONSULTORÍA DE INFORMÁTICA Y GESTIÓN DE INSTALACIONES INFORMÁTICAS",
    shortTitle: "REDORANGE",
    description: "Empresa líder en soluciones tecnológicas innovadoras",
    keywords: ["tecnología", "desarrollo", "soluciones", "innovación"],
    author: "REDORANGE E.I.R.L.",
  },
  services: {
    mesaPartes: {
      name: "Mesa de partes digital",
      description: "Registro de documentos y notificaciones en tiempo real.",
      url: "https://mesadepartes.redorange.net.pe/",
    },
    seguimiento: {
      name: "Seguimiento de trámites",
      description: "Consulta el estado de tus documentos.",
      url: "https://seguimiento.redorange.net.pe/consulta",
    },
  },
} as const;

export default appConfig;
