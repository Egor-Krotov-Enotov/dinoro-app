export interface LenderDetail {
  slug: string;
  recommended?: boolean;
  tagline: string;
  description: string;
  minAmount: number;
  pros: string[];
  contras: string[];
  idealFor: string;
}

export const lenderDetails: Record<string, LenderDetail> = {
  cozmo: {
    slug: "cozmo",
    recommended: true,
    tagline: "Pagos quincenales con opción de extender plazo hasta 6 veces",
    description:
      "Cozmo destaca por su flexibilidad de pago: puedes pagar quincenalmente y solicitar hasta 6 extensiones de plazo si lo necesitas. Con una tasa de aprobación del 30% y proceso 100% digital, es ideal para quienes reciben sueldo quincenal. Está supervisado por CONDUSEF y CNBV, lo que garantiza transparencia en sus condiciones.",
    minAmount: 1000,
    pros: [
      "Aprobación en 5–10 minutos",
      "Pagos quincenales adaptados a tu nómina",
      "Extensión de plazo hasta 6 veces sin trámites adicionales",
      "Regulado por CONDUSEF y CNBV",
      "Depósito vía SPEI o pago en OXXO",
    ],
    contras: [
      "Monto máximo de $20,000 MXN",
      "Consulta buró de forma flexible pero sí lo revisa",
    ],
    idealFor:
      "Personas que reciben sueldo quincenal y necesitan entre $2,000 y $20,000 MXN con un plazo cómodo de 2 a 3 meses.",
  },

  kueski: {
    slug: "kueski",
    recommended: false,
    tagline: "Líder del mercado con más de 10 años de operación en México",
    description:
      "Kueski es el prestamista digital más antiguo y reconocido de México. Con más de una década en el mercado, ha perfeccionado su proceso de aprobación y construido una de las apps mejor calificadas del segmento. Su modelo progresivo permite aumentar el límite disponible con cada pago puntual.",
    minAmount: 1000,
    pros: [
      "Sin comisiones por apertura",
      "App con alta calificación en App Store y Google Play",
      "Límite de crédito aumenta automáticamente con pagos puntuales",
      "Regulado por CONDUSEF y CNBV",
      "Más de 10 años de operación ininterrumpida en México",
    ],
    contras: [
      "CAT elevado en comparación con préstamos bancarios",
      "Primer préstamo limitado a $400–$2,000 MXN",
      "Aprobación puede tardar hasta 1 hora",
    ],
    idealFor:
      "Personas que solicitan un microcrédito por primera vez y quieren construir un límite progresivo con un prestamista consolidado.",
  },

  moneyman: {
    slug: "moneyman",
    recommended: false,
    tagline: "Límites progresivos — cuanto más puntual seas, menor tasa pagas",
    description:
      "Moneyman premia la puntualidad: cada pago a tiempo desbloquea un mayor límite y puede reducir tu tasa de interés en futuros préstamos. Con aprobación en 15 minutos y sin consulta de buró, es una opción sólida para quienes quieren construir historial crediticio de cero.",
    minAmount: 500,
    pros: [
      "Aprobación en solo 15 minutos",
      "Tasa de interés decrece con pagos puntuales",
      "Sin consulta al buró de crédito",
      "Proceso 100% en línea sin papeleos",
    ],
    contras: [
      "Plazos máximos de 30 días",
      "Primer monto aprobado suele ser bajo ($500–$2,000)",
    ],
    idealFor:
      "Personas sin historial crediticio que quieren comenzar a construir su límite de forma progresiva y disciplinada.",
  },

  avafin: {
    slug: "avafin",
    recommended: false,
    tagline: "Mayor monto disponible del segmento — hasta $80,000 MXN sin buró",
    description:
      "AvaFin (antes Avío) es la opción que ofrece el mayor monto del segmento de préstamos sin buró en México: hasta $80,000 MXN. Opera en 5 países y tiene respaldo internacional, lo que le permite ofrecer condiciones competitivas para montos altos. El depósito llega el mismo día de la aprobación.",
    minAmount: 500,
    pros: [
      "Monto máximo de $80,000 MXN — el más alto sin buró",
      "Depósito el mismo día de aprobación",
      "Opera en 5 países con respaldo internacional",
      "Sin consulta de buró para la mayoría de solicitudes",
    ],
    contras: [
      "Comisión por apertura del 4% sobre el monto",
      "Primer monto aprobado suele ser bajo hasta ganar historial con ellos",
    ],
    idealFor:
      "Personas que necesitan un monto alto (más de $20,000 MXN) y tienen historial básico positivo o pueden justificar sus ingresos.",
  },

  tala: {
    slug: "tala",
    recommended: false,
    tagline: "Plazos de hasta 120 días — los más largos del segmento sin buró",
    description:
      "Tala es una fintech con presencia en más de 5 países y más de 13 millones de usuarios. Su mayor diferenciador en México son los plazos: hasta 120 días, significativamente más largos que el promedio del segmento. Para un pago único no cobra comisiones adicionales.",
    minAmount: 300,
    pros: [
      "Plazos hasta 120 días — los más largos sin buró",
      "Sin comisiones adicionales para pagos en una sola exhibición",
      "Más de 13 millones de usuarios globales",
      "Sin consulta al buró de crédito",
    ],
    contras: [
      "Requiere acceso a permisos del celular para evaluar el perfil",
      "Comisión del 2.99% al pagar en mensualidades",
    ],
    idealFor:
      "Personas que necesitan plazo más largo para pagar cómodamente sin presión de fechas muy cercanas.",
  },

  baubap: {
    slug: "baubap",
    recommended: false,
    tagline: "El proceso más rápido del mercado — menos de 10 minutos de inicio a fin",
    description:
      "Baubap está diseñado para la velocidad absoluta: proceso ultrasimplificado que va del registro al depósito en menos de 10 minutos. Con una calificación de 4.4 estrellas en Google Play es una de las apps mejor valoradas del segmento. Ideal cuando cada minuto cuenta.",
    minAmount: 500,
    pros: [
      "Proceso completo en menos de 10 minutos",
      "Ultrasimplificado: mínimos datos requeridos",
      "4.4 estrellas en Google Play",
      "Sin consulta al buró de crédito",
    ],
    contras: [
      "Monto máximo de $10,000 MXN",
      "Plazos muy cortos (7–28 días)",
    ],
    idealFor:
      "Personas con emergencias pequeñas y urgentes que necesitan el dinero en menos de 15 minutos.",
  },

  credilikeme: {
    slug: "credilikeme",
    recommended: false,
    tagline: "Acepta historial crediticio muy dañado — la opción cuando otras apps dicen no",
    description:
      "Credilikeme se especializa en perfiles rechazados por otras plataformas. Su algoritmo acepta historiales en buró muy dañados donde la mayoría de prestamistas niegan. Además ofrece un bono de $100 MXN para nuevos usuarios. Registrado ante CONDUSEF.",
    minAmount: 500,
    pros: [
      "Acepta historial crediticio muy dañado",
      "Registrado ante CONDUSEF",
      "Bono de $100 MXN para nuevos usuarios",
      "Sin consulta estricta de buró",
    ],
    contras: [
      "Monto máximo de $12,000 MXN",
      "Aprobación más lenta (hasta 1 hora)",
    ],
    idealFor:
      "Personas con buró muy dañado que han sido rechazadas en otras plataformas y necesitan una segunda oportunidad.",
  },

  creditea: {
    slug: "creditea",
    recommended: false,
    tagline: "Línea de crédito reutilizable de hasta $70,000 MXN con la TAE más baja del catálogo",
    description:
      "Creditea ofrece una línea de crédito revolvente: una vez aprobada, puedes usar y reponer el saldo sin solicitar nuevamente. Con TAE desde 64% (la más baja del catálogo) y plazos hasta 36 meses, es la opción más parecida a un préstamo bancario pero con aprobación digital.",
    minAmount: 2000,
    pros: [
      "Línea de crédito reutilizable — no necesitas solicitar de nuevo",
      "Plazos hasta 36 meses",
      "TAE desde 64% — la más baja del catálogo",
      "Montos hasta $70,000 MXN",
    ],
    contras: [
      "Requiere buen historial en el buró de crédito",
      "Ingresos mínimos de $10,000 MXN mensuales",
    ],
    idealFor:
      "Personas con buen historial crediticio que necesitan un monto alto con plazo cómodo y la tasa más baja posible.",
  },

  vivus: {
    slug: "vivus",
    recommended: false,
    tagline: "Primer préstamo sin intereses — ideal para probar sin riesgo",
    description:
      "Vivus ofrece una propuesta única: el primer préstamo es sin intereses (bajo condiciones promocionales). Es una forma de probar el servicio sin costo adicional. Proceso 100% digital y sin consulta de buró. A partir del segundo préstamo aplican tasas regulares del segmento.",
    minAmount: 1000,
    pros: [
      "Primer préstamo sin intereses (promocional)",
      "Sin consulta al buró de crédito",
      "Proceso 100% digital",
      "Aprobación en aproximadamente 1 hora",
    ],
    contras: [
      "Plazos cortos (7–30 días)",
      "Tasa alta a partir del segundo préstamo",
    ],
    idealFor:
      "Personas que prueban los microcréditos en línea por primera vez y quieren hacerlo sin pagar intereses en el primer crédito.",
  },

  credito365: {
    slug: "credito365",
    recommended: false,
    tagline: "La aprobación más rápida del mercado — respuesta en 3 minutos",
    description:
      "Credito365 ostenta el tiempo de aprobación más rápido del catálogo: solo 3 minutos desde la solicitud hasta la respuesta. Ideal para emergencias donde el tiempo es crítico. Sin consulta de buró y con montos hasta $20,000 MXN con depósito el mismo día.",
    minAmount: 1000,
    pros: [
      "Respuesta de aprobación en 3 minutos",
      "Sin consulta al buró de crédito",
      "Montos hasta $20,000 MXN",
      "Depósito el mismo día",
    ],
    contras: [
      "Plazos cortos (7–30 días)",
      "Tasa de interés elevada",
    ],
    idealFor:
      "Personas en situaciones de emergencia donde cada minuto cuenta y necesitan respuesta inmediata.",
  },
};
