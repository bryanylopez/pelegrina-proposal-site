export type Locale = "en" | "es";

export const contact = {
  name: "Pamela Felicié",
  phone: "(939) 232-6170",
  phoneHref: "+19392326170",
  email: "info@brandcomposers.com",
};

export const nav = {
  en: [
    { id: "opportunity", label: "Opportunity" },
    { id: "audit", label: "Audit" },
    { id: "today", label: "Today" },
    { id: "gap", label: "The Gap" },
    { id: "capabilities", label: "What's Possible" },
    { id: "proposal", label: "The Proposal" },
    { id: "why", label: "Why This Works" },
    { id: "scope", label: "Scope" },
    { id: "engagement", label: "Engagement" },
    { id: "sample", label: "Sample Campaign" },
    { id: "quickstart", label: "Quick Start" },
    { id: "questions", label: "Key Questions" },
    { id: "next", label: "Next Steps" },
  ],
  es: [
    { id: "opportunity", label: "Oportunidad" },
    { id: "audit", label: "Auditoría" },
    { id: "today", label: "Hoy" },
    { id: "gap", label: "La Brecha" },
    { id: "capabilities", label: "Lo Que Es Posible" },
    { id: "proposal", label: "La Propuesta" },
    { id: "why", label: "Por Qué Funciona" },
    { id: "scope", label: "Alcance" },
    { id: "engagement", label: "Modalidad" },
    { id: "sample", label: "Campaña Ejemplo" },
    { id: "quickstart", label: "Primer Paso" },
    { id: "questions", label: "Preguntas Clave" },
    { id: "next", label: "Próximos Pasos" },
  ],
};

export const ui = {
  en: {
    eyebrow: "Fractional Marketing Leadership",
    badge: "Proposal",
    menuOpen: "Menu",
    menuClose: "Close",
    contactCta: "Contact",
    scrollCta: "Read the proposal",
    footerPrepared: "Prepared by Pamela Felicié, with strategic support from Bryan López, for the leadership team of Pelegrina Medical, Inc.",
    footerTag: "Pelegrina Medical · Fractional Marketing Chief Proposal",
    preparedFor: "Prepared for",
    preparedBy: "Prepared by",
    backToTop: "Back to top",
  },
  es: {
    eyebrow: "Liderazgo de Marketing Fraccional",
    badge: "Propuesta",
    menuOpen: "Menú",
    menuClose: "Cerrar",
    contactCta: "Contacto",
    scrollCta: "Leer la propuesta",
    footerPrepared: "Preparado por Pamela Felicié, con apoyo estratégico de Bryan López, para el equipo directivo de Pelegrina Medical, Inc.",
    footerTag: "Pelegrina Medical · Propuesta de Director de Marketing Fraccional",
    preparedFor: "Preparado para",
    preparedBy: "Preparado por",
    backToTop: "Volver arriba",
  },
};

export const sections = {
  en: {
    hero: {
      kicker: "Fractional Marketing Leadership",
      title: "A Proposal for Pelegrina Medical",
      subtitle:
        "Building the marketing engine for expansion into LATAM, the U.S., and the Caribbean",
      preparedBy: "Prepared by Pamela Felicié, with support from Bryan López",
      preparedFor: "For the leadership team of Pelegrina Medical, Inc.",
    },
    opportunity: {
      label: "The Opportunity",
      title: "45 years built on Puerto Rico. The next chapter is regional.",
      body:
        "Pelegrina has the product catalog, the manufacturer relationships, and the reputation to support hospitals and clinics well beyond Puerto Rico. The strategic goal now is to turn that foundation into active demand across three new regions.",
      regions: [
        { name: "LATAM", detail: "New hospital & distributor demand" },
        { name: "United States", detail: "Mainland procurement & EMS markets" },
        { name: "Caribbean", detail: "Adjacent island healthcare networks" },
      ],
      stats: [
        { number: "45", label: "years in operation" },
        { number: "30+", label: "brands distributed" },
        { number: "3", label: "new regions targeted" },
        { number: "Lean", label: "international sales capacity today" },
      ],
    },
    audit: {
      label: "Audit Highlights",
      title: "What the brand & marketing audit found",
      intro:
        "A desk audit of the website, SEO, social, email, and paid media — done ahead of this conversation.",
      findings: [
        {
          icon: "thumbsUp",
          title: "A Strong Foundation Already in Place",
          items: [
            "A recently rebuilt, mobile-friendly website with consistent branding across all six social channels.",
            "45 years of history and direct manufacturer relationships — credibility new entrants don't have.",
          ],
        },
        {
          icon: "bullhorn",
          title: "Channels Are Either Off or Unmeasured",
          items: [
            "No paid Google, Meta, or LinkedIn campaigns visible today — demand currently relies mostly on organic content and direct outreach.",
            "Email has run on Mailchimp for years, but list size and performance still aren't tracked.",
          ],
        },
      ],
      footnote:
        "The gaps are about reach and structure — not the quality of the work already being done.",
    },
    today: {
      label: "Where Things Stand Today",
      title: "A strong foundation, running on organic effort alone",
      cards: [
        {
          icon: "share",
          big: "6",
          label: "social platforms active",
          sub: "Instagram, Facebook, Pinterest, X, YouTube, LinkedIn",
        },
        {
          icon: "bullhorn",
          big: "Untapped",
          label: "paid channels",
          sub: "No visible Google, Meta, or LinkedIn ads today",
        },
        {
          icon: "users",
          big: "~1,700",
          label: "LinkedIn followers",
          sub: "A real base, under-leveraged for B2B reach",
        },
        {
          icon: "userTie",
          big: "Lean",
          label: "international sales capacity",
          sub: "Outbound for 3 new regions runs on a small team",
        },
      ],
    },
    gap: {
      label: "The Gap",
      title: "Three new markets need someone steering — not just executing",
      body:
        "The in-house team is built for steady-state execution: producing assets, posting content, keeping the website current. That's real, valuable work. What's missing is someone whose job is to set the strategy: which market to enter first, which channels to fund, how to sequence three launches without overwhelming a lean internal team and sales force.",
      calloutTitle: "This isn't a quality problem — it's a capacity problem.",
      calloutBody:
        "Strategy, sequencing, and budget allocation across three new regions naturally sit above day-to-day execution — and right now, no one owns that layer full-time.",
    },
    capabilities: {
      label: "What's Possible",
      title: "Beyond the proposal: the broader marketing toolkit available",
      intro:
        "Before narrowing in on a specific engagement, it's worth seeing the full range of what a modern marketing operation can put to work — much of it well beyond traditional advertising.",
      items: [
        {
          icon: "target",
          title: "Cold Outreach & Lead Generation",
          detail: "Personalized outbound to open doors with new accounts directly.",
        },
        {
          icon: "phone",
          title: "Remarketing & Touchpoints",
          detail: "Staying in front of prospects across the channels they already use.",
        },
        {
          icon: "barChart",
          title: "Analytics & Dashboards",
          detail: "Real-time visibility into what's working, by channel and by region.",
        },
        {
          icon: "zap",
          title: "Automations & Business Processes",
          detail: "Removing manual handoffs from lead routing, follow-up, and reporting.",
        },
        {
          icon: "database",
          title: "CRM Implementation",
          detail: "A single source of truth for leads, accounts, and pipeline.",
        },
        {
          icon: "bot",
          title: "AI Projects & Service Chatbots",
          detail: "From customer-service automation to AI-assisted research and content.",
        },
        {
          icon: "pin",
          title: "Local SEO",
          detail: "Stronger visibility in regional search as new markets open up.",
        },
        {
          icon: "rocket",
          title: "Hablio",
          detail: "Automated instant scheduling that turns inbound leads into booked appointments in minutes.",
        },
      ],
      footnote:
        "Not every capability applies on day one — the point is to choose deliberately from a full menu, not by default from a narrow one.",
    },
    proposal: {
      label: "The Proposal",
      title: "A Fractional Marketing Chief",
      intro:
        "Given that full menu, the proposal below is the focused starting point: senior marketing leadership delivered through defined market-entry campaigns and a quarterly strategic cadence — led by Pamela Felicié (Partner, Solo Agency), with Bryan López providing senior strategic support, so execution doesn't rest on one person's bandwidth alone.",
      rows: [
        {
          icon: "users",
          title: "A Small Team, Not a Solo Operator",
          detail:
            "Pamela Felicié (Partner, Solo Agency) owns strategy, execution, and the day-to-day relationship; Bryan López provides senior strategic support and collaborators round out delivery.",
        },
        {
          icon: "map",
          title: "Market sequencing across LATAM, the U.S. & Caribbean",
          detail:
            "Decides where to launch first and how to pace the rest, based on readiness and opportunity.",
        },
        {
          icon: "bullhorn",
          title: "Ownership of channels currently sitting idle",
          detail:
            "Stands up paid search, paid social, and SEO/content rather than leaving them unmanaged.",
        },
        {
          icon: "handshake",
          title: "A bridge between marketing, sales, and operations",
          detail:
            "Keeps the international sales effort, creative production, and regional realities aligned.",
        },
      ],
    },
    // TODO: pending review/update of Bryan's and Pamela's bios below once finalized.
    why: {
      label: "Why This Works",
      title: "Starting from trust, not a cold introduction",
      items: [
        {
          icon: "users",
          title: "Pamela Felicié — Partner, Solo Agency",
          detail:
            "Leads strategy and day-to-day execution for this engagement. Holds a Master's in Integrated Advertising (Creativity & Strategy) and currently runs multi-country LATAM marketing — across construction, agriculture, and logistics — for Teselta, directly relevant to Pelegrina's regional expansion.",
        },
        {
          icon: "building",
          title: "Bryan López — Senior Strategic Support",
          detail:
            "Former Marketing & IT Coordinator at Pelegrina Medical, with established trust with the President and Operations Manager. Now Outbound & CX Director at WindMar Home, where he led the rollout of an AI-powered appointment-setting platform — advising on strategy without owning day-to-day execution here.",
        },
        {
          icon: "comments",
          title: "A Network of Specialized Collaborators",
          detail:
            "Web development, photography, and videography brought in project by project — execution isn't dependent on one person's bandwidth.",
        },
        {
          icon: "rocket",
          title: "Able to Move From Day One",
          detail:
            "Strategy can start immediately, in parallel with the discovery process most engagements require up front.",
        },
      ],
    },
    scope: {
      label: "Proposed Scope of Engagement",
      title: "Five areas of focus",
      items: [
        {
          icon: "map",
          title: "Market-entry strategy",
          detail: "Sequencing for LATAM, the U.S., and the Caribbean",
        },
        {
          icon: "bullhorn",
          title: "Paid channel activation",
          detail: "Stand up Google, LinkedIn, and Meta advertising",
        },
        {
          icon: "search",
          title: "SEO & content roadmap",
          detail: "Regional landing pages and an organic content engine",
        },
        {
          icon: "userTie",
          title: "Sales enablement",
          detail: "Pipeline and positioning support for international sales",
        },
        {
          icon: "pen",
          title: "Creative workflow support",
          detail: "Prioritization and direction for the in-house team",
        },
      ],
    },
    engagement: {
      label: "How We'd Work Together",
      title: "Embedded in your team, not a report dropped on your desk",
      intro:
        "Before talking pricing tracks, here's what actually changes week to week: who's involved, what gets reviewed, and what access is needed to move.",
      rhythm: [
        {
          icon: "calendar",
          title: "Weekly Touchpoint",
          detail:
            "A standing check-in with leadership and the in-house team to unblock decisions and keep direction tight.",
        },
        {
          icon: "users",
          title: "Shared Execution",
          detail:
            "Pamela leads strategy and hands-on execution; the in-house team keeps day-to-day content and the website running while new channels stand up.",
        },
        {
          icon: "barChart",
          title: "Monthly Reporting",
          detail:
            "A shared dashboard by channel and region, reviewed monthly, so decisions are based on numbers, not guesswork.",
        },
        {
          icon: "database",
          title: "Direct Access",
          detail:
            "Access to ad accounts, CRM, analytics, and the content calendar, so execution doesn't run through a third party.",
        },
      ],
      fit: {
        title: "When a Fractional CMO Makes Sense (and When It Doesn't)",
        yesLabel: "This is a good fit if...",
        yesItems: [
          "There's real traction and a product catalog, but no one owns where to expand next.",
          "The in-house team can execute but isn't set up to define strategy or sequence priorities.",
          "You want measurable results within months, without committing to a full-time hire yet.",
          "You want to test the Marketing Chief function before making it a permanent role.",
        ],
        noLabel: "It's probably not the right time if...",
        noItems: [
          "There's no budget to activate paid channels; strategy without media spend has limits.",
          "What's needed is someone full-time and on-site, managing a large team day to day.",
          "Priorities shift week to week, with no room to hold a quarterly plan.",
          "What's wanted is pure execution, with no one revising or adjusting the strategy.",
        ],
      },
      footnote: "Cadence and hours are scoped to budget and priorities; see the Key Questions below.",
    },
    sample: {
      label: "Getting Started",
      title: "A sample first campaign (one quarter)",
      phases: [
        {
          range: "Days 1–30",
          title: "Align & Audit",
          detail:
            "Confirm priority markets, review current channels and assets, agree on KPIs with leadership.",
        },
        {
          range: "Days 31–60",
          title: "Launch & Localize",
          detail:
            "Stand up first paid channel(s) and regional landing pages; brief the in-house team on new creative needs.",
        },
        {
          range: "Days 61–90",
          title: "Measure & Expand",
          detail:
            "Review early results, double down on what's working, and sequence the next region.",
        },
      ],
    },
    quickStart: {
      label: "Quick Start",
      title: "A First Step You Can See in Weeks: Photography & Video",
      intro:
        "Before the larger campaigns take shape, here's a concrete deliverable that's already quoted and ready to schedule. Drag the slider to estimate pricing for your team.",
      sliderLabel: "Team members needing headshots",
      unitLabel: "people",
      perPersonLabel: "person",
      tierIndividual: "Individual rate",
      tierSmall: "Small-team rate",
      tierFull: "Full-team rate",
      videoLabel: "Add company intro video (60 seconds, bilingual)",
      videoDetail:
        "Script, on-site filming, editing, and narration/subtitles in both English and Spanish.",
      photoLineLabel: "Photography",
      videoLineLabel: "Video",
      totalLabel: "Estimated total",
      ctaLabel: "Let's schedule it",
      footnote:
        "Estimate based on per-person rates from quote QT-000002 (Brand Composers): $200 for 1 person, $150/person up to 5, $50/person from 6 to 20+. Final pricing confirmed in writing before scheduling.",
    },
    keyQuestions: {
      label: "Key Questions",
      title: "Questions Worth Answering Before We Finalize Scope",
      intro:
        "This proposal is a starting point, not a finished plan. These are the questions that will shape it the most.",
      items: [
        {
          icon: "barChart",
          question:
            "What budget range is available for media spend in these 3 regions, separate from the consulting fee?",
        },
        {
          icon: "map",
          question:
            "Which market gets priority first: LATAM, the U.S., or the Caribbean, or is that still open?",
        },
        {
          icon: "handshake",
          question: "Who approves marketing decisions, and how quickly?",
        },
        {
          icon: "users",
          question:
            "How much time can the in-house team realistically give to new initiatives, beyond their current workload?",
        },
        {
          icon: "database",
          question:
            "What access already exists to tools like the CRM, ad accounts, analytics, and Mailchimp?",
        },
        {
          icon: "target",
          question: "How is success measured: leads, distributor meetings, sales, or brand presence?",
        },
        {
          icon: "calendar",
          question: "Is there a date or event driving the timing of this expansion?",
        },
      ],
      footnote: "Answers here directly shape cadence, pricing, and which region comes first.",
    },
    next: {
      label: "Next Steps",
      title: "Next Steps",
      steps: [
        "Use this meeting to pressure-test priorities, timelines, and what success looks like for each region.",
        "Agree on scope and terms for the first market-entry campaign and the quarterly consulting cadence.",
        "Set a start date so the first campaign — and the first quarterly cycle — can begin without delay.",
      ],
      contactLabel: "Let's talk",
    },
  },
  es: {
    hero: {
      kicker: "Liderazgo de Marketing Fraccional",
      title: "Una Propuesta para Pelegrina Medical",
      subtitle: "Construyendo el motor de marketing para la nueva expansión.",
      preparedBy: "Preparado por Pamela Felicié",
      preparedFor: "Para el equipo directivo de Pelegrina Medical, Inc.",
    },
    opportunity: {
      label: "La Oportunidad",
      title: "45 años construidos en Puerto Rico. El próximo capítulo es fuera de la Isla.",
      body:
        "Pelegrina cuenta con el catálogo de productos, las relaciones con manufactureros y la reputación para atender hospitales y clínicas mucho más allá de Puerto Rico. La meta estratégica ahora es convertir esa base en demanda activa en tres nuevas regiones.",
      regions: [
        { name: "LATAM", detail: "Nueva demanda de hospitales y distribuidores" },
        { name: "Estados Unidos", detail: "Mercados de compras y EMS en el territorio continental" },
        { name: "Caribe", detail: "Redes de salud en islas vecinas" },
      ],
      stats: [
        { number: "45", label: "años en operación" },
        { number: "30+", label: "marcas distribuidas" },
        { number: "3", label: "nuevas regiones objetivo" },
        { number: "Escasa", label: "capacidad de ventas internacional hoy" },
      ],
    },
    audit: {
      label: "Hallazgos de la Auditoría",
      title: "Hallazgos de la auditoría de marca y marketing",
      intro:
        "Una auditoría de escritorio de la página web, SEO, redes sociales, correo electrónico y medios pagados, realizada antes de esta conversación.",
      findings: [
        {
          icon: "thumbsUp",
          title: "Una Base Sólida Ya Establecida",
          items: [
            "Una página web recién renovada y adaptada a móviles, con identidad de marca consistente en los seis canales sociales.",
            "45 años de historia y relaciones directas con manufactureros, una credibilidad que los nuevos competidores no tienen.",
          ],
        },
        {
          icon: "bullhorn",
          title: "Canales Inactivos o Sin Medición",
          items: [
            "No se observan campañas pagadas en Google, Meta o LinkedIn hoy: la demanda depende principalmente del contenido orgánico y el contacto directo.",
            "El correo se maneja en Mailchimp desde hace años, pero el tamaño de la lista y su rendimiento aún no se monitorean.",
          ],
        },
      ],
      footnote:
        "Las brechas tienen que ver con alcance y estructura, no con la calidad del trabajo que ya se realiza.",
    },
    today: {
      label: "Dónde Estamos Hoy",
      title: "Una base sólida, sostenida solo con esfuerzo orgánico",
      cards: [
        {
          icon: "share",
          big: "6",
          label: "plataformas sociales activas",
          sub: "Instagram, Facebook, Pinterest, X, YouTube, LinkedIn",
        },
        {
          icon: "bullhorn",
          big: "Sin explotar",
          label: "canales pagados",
          sub: "No se observan anuncios de Google, Meta o LinkedIn hoy",
        },
        {
          icon: "users",
          big: "~1,700",
          label: "seguidores en LinkedIn",
          sub: "Una base real, subutilizada para alcance B2B",
        },
        {
          icon: "userTie",
          big: "Limitada",
          label: "capacidad de ventas internacionales",
          sub: "Las ventas para 3 nuevas regiones dependen de un equipo pequeño",
        },
      ],
    },
    gap: {
      label: "La Brecha",
      title: "Tres nuevos mercados necesitan a alguien que dirija, no solo que ejecute",
      body:
        "El equipo interno está estructurado para la ejecución constante: producir piezas, publicar contenido, mantener la página web actualizada. Eso es trabajo real y valioso. Lo que falta es alguien cuya función sea definir la estrategia: qué mercado abrir primero, qué canales financiar, cómo secuenciar tres lanzamientos sin sobrecargar a un equipo interno y una fuerza de ventas reducidos.",
      calloutTitle: "Esto no es un problema de calidad, es un problema de capacidad.",
      calloutBody:
        "La estrategia, la secuenciación y la asignación de presupuesto en tres nuevas regiones están naturalmente por encima de la ejecución diaria, y en este momento, nadie es responsable de esa capa a tiempo completo.",
    },
    capabilities: {
      label: "Lo Que Es Posible",
      title: "Más allá de la propuesta: el conjunto completo de herramientas disponibles",
      intro:
        "Antes de enfocarnos en una modalidad específica, vale la pena ver el rango completo de lo que una operación de marketing moderna puede activar, mucho más allá de la publicidad tradicional.",
      items: [
        {
          icon: "target",
          title: "Prospección Fría y Generación de Leads",
          detail: "Contacto saliente personalizado para abrir puertas directamente con nuevas cuentas.",
        },
        {
          icon: "phone",
          title: "Remarketing y Puntos de Contacto",
          detail: "Mantenerse presente frente a prospectos en los canales que ya usan.",
        },
        {
          icon: "barChart",
          title: "Analítica y Tableros",
          detail: "Visibilidad en tiempo real de lo que funciona, por canal y por región.",
        },
        {
          icon: "zap",
          title: "Automatización de Procesos",
          detail: "Eliminar los traspasos manuales en el seguimiento de leads y reportes.",
        },
        {
          icon: "database",
          title: "Implementación de CRM",
          detail: "Una sola fuente de verdad para leads, cuentas y pipeline.",
        },
        {
          icon: "bot",
          title: "Proyectos de IA y Chatbots de Servicio",
          detail: "Desde automatización de servicio al cliente hasta investigación y contenido asistidos por IA.",
        },
        {
          icon: "pin",
          title: "SEO Local",
          detail: "Mayor visibilidad en búsquedas regionales conforme se abren nuevos mercados.",
        },
        {
          icon: "rocket",
          title: "Hablio",
          detail: "Agendamiento instantáneo automatizado que convierte leads entrantes en citas confirmadas en minutos.",
        },
      ],
      footnote:
        "No todas las capacidades aplican desde el primer día: el objetivo es elegir deliberadamente de un menú completo, no por defecto de uno limitado.",
    },
    proposal: {
      label: "La Propuesta",
      title: "Marketing Fraccional",
      intro:
        "Dentro de ese menú completo, la propuesta a continuación es el punto de partida enfocado: liderazgo senior de marketing entregado a través de campañas definidas de entrada a mercado y una cadencia estratégica trimestral, liderado por Pamela Felicié (Partner, Solo Agency), con Bryan López brindando apoyo estratégico senior, para que la ejecución no dependa de la disponibilidad de una sola persona.",
      rows: [
        {
          icon: "users",
          title: "Un Equipo, No un Operador Solitario",
          detail:
            "Pamela Felicié (Partner, Solo Agency) dirige la estrategia, la ejecución y la relación día a día; Bryan López brinda apoyo estratégico senior y colaboradores completan la entrega.",
        },
        {
          icon: "map",
          title: "Secuenciación de mercados entre LATAM, EE. UU. y el Caribe",
          detail:
            "Decide dónde lanzar primero y cómo ritmar el resto, según preparación y oportunidad.",
        },
        {
          icon: "bullhorn",
          title: "Responsabilidad sobre canales hoy inactivos",
          detail:
            "Activa búsqueda pagada, redes pagadas y SEO/contenido en lugar de dejarlos sin gestión.",
        },
        {
          icon: "handshake",
          title: "Un puente entre marketing, ventas y operaciones",
          detail:
            "Mantiene alineados el esfuerzo de ventas internacionales, la producción creativa y las realidades regionales.",
        },
      ],
    },
    // TODO: pendiente revisar/actualizar las biografías de Bryan y Pamela una vez confirmadas.
    why: {
      label: "Por Qué Esto Funciona",
      title: "Partiendo de la confianza, no de una presentación en frío",
      items: [
        {
          icon: "users",
          title: "Pamela Felicié, Partner en Solo Agency",
          detail:
            "Dirige la estrategia y la ejecución día a día de este proyecto. Tiene una Maestría en Publicidad Integrada (Creatividad y Estrategia) y actualmente lleva el marketing multi-país en LATAM, en construcción, agricultura y logística, para Teselta, directamente relevante para la expansión regional de Pelegrina.",
        },
        {
          icon: "building",
          title: "Bryan López, Apoyo Estratégico Senior",
          detail:
            "Ex Coordinador de Marketing e IT en Pelegrina Medical, con confianza ya establecida con el Presidente y la Gerente de Operaciones. Hoy es Director de Outbound y Experiencia del Cliente en WindMar Home, donde lideró la implementación de una plataforma de citas impulsada por IA, asesorando en estrategia sin asumir la ejecución diaria en este proyecto.",
        },
        {
          icon: "comments",
          title: "Una Red de Colaboradores Especializados",
          detail:
            "Desarrollo web, fotografía y videografía, incorporados por proyecto: la ejecución no depende de la disponibilidad de una sola persona.",
        },
        {
          icon: "rocket",
          title: "Listo para Avanzar Desde el Primer Día",
          detail:
            "La estrategia puede iniciar de inmediato, en paralelo al proceso de descubrimiento que la mayoría de los proyectos requieren al inicio.",
        },
      ],
    },
    scope: {
      label: "Alcance Propuesto del Proyecto",
      title: "Cinco áreas de enfoque",
      items: [
        {
          icon: "map",
          title: "Estrategia de entrada a mercado",
          detail: "Secuenciación para LATAM, Estados Unidos y el Caribe",
        },
        {
          icon: "bullhorn",
          title: "Activación de canales pagados",
          detail: "Implementar publicidad en Google, LinkedIn y Meta",
        },
        {
          icon: "search",
          title: "SEO y plan de contenido",
          detail: "Páginas de destino regionales y un motor de contenido orgánico",
        },
        {
          icon: "userTie",
          title: "Apoyo a ventas",
          detail: "Soporte de pipeline y posicionamiento para ventas internacionales",
        },
        {
          icon: "pen",
          title: "Apoyo al flujo creativo",
          detail: "Priorización y dirección para el equipo interno",
        },
      ],
    },
    engagement: {
      label: "Cómo Trabajamos",
      title: "Integrados a tu equipo, no un reporte que se entrega y se va",
      intro:
        "Antes de hablar de modalidades de precio, esto es lo que cambia semana a semana: quién participa, qué se revisa y qué acceso se necesita para avanzar.",
      rhythm: [
        {
          icon: "calendar",
          title: "Punto de Contacto Semanal",
          detail:
            "Una reunión fija con liderazgo y el equipo interno para destrabar decisiones y mantener el rumbo.",
        },
        {
          icon: "users",
          title: "Ejecución Compartida",
          detail:
            "Pamela lidera la estrategia y la ejecución directa; el equipo interno mantiene lo operativo (contenido, redes, página web) mientras se activan los canales nuevos.",
        },
        {
          icon: "barChart",
          title: "Reportes Mensuales",
          detail:
            "Un dashboard compartido por canal y región, revisado cada mes, para decidir con números y no por intuición.",
        },
        {
          icon: "database",
          title: "Acceso Directo",
          detail:
            "Acceso a cuentas de anuncios, CRM, analítica y calendario de contenido, para que la ejecución no dependa de intermediarios.",
        },
      ],
      fit: {
        title: "¿Cuándo Tiene Sentido un Marketing Fraccional (y Cuándo No)?",
        yesLabel: "Tiene sentido si...",
        yesItems: [
          "Ya hay tracción y catálogo, pero nadie dirige hacia dónde expandir primero.",
          "El equipo interno puede ejecutar, pero no está armado para definir estrategia ni priorizar.",
          "Buscan resultados medibles en meses, sin comprometerse todavía a una contratación de tiempo completo.",
          "Quieren probar la función de Marketing Chief antes de convertirla en un puesto permanente.",
        ],
        noLabel: "Probablemente no es el momento si...",
        noItems: [
          "No hay presupuesto para activar canales pagados: la estrategia sin inversión en medios tiene límites.",
          "Lo que se necesita es alguien de tiempo completo y presencial, gestionando un equipo grande día a día.",
          "Las prioridades cambian semana a semana, sin espacio para sostener un plan trimestral.",
          "Lo que buscan es ejecución pura, sin que nadie revise ni ajuste la estrategia.",
        ],
      },
      footnote: "La cadencia y las horas se definen según presupuesto y prioridades: ver las Preguntas Clave más abajo.",
    },
    sample: {
      label: "Primeros Pasos",
      title: "Ejemplo de primera campaña (un trimestre)",
      phases: [
        {
          range: "Días 1–30",
          title: "Alinear y Auditar",
          detail:
            "Confirmar mercados prioritarios, revisar canales y activos actuales, y acordar KPIs con la dirección.",
        },
        {
          range: "Días 31–60",
          title: "Lanzar y Localizar",
          detail:
            "Activar el primer canal pagado y las páginas de destino regionales; informar al equipo interno sobre nuevas necesidades creativas.",
        },
        {
          range: "Días 61–90",
          title: "Medir y Expandir",
          detail:
            "Revisar resultados iniciales, reforzar lo que funciona y secuenciar la siguiente región.",
        },
      ],
    },
    quickStart: {
      label: "Primer Paso",
      title: "Un Primer Paso Visible en Semanas: Fotografía y Video",
      intro:
        "Antes de que tomen forma las campañas más grandes, aquí hay un entregable concreto ya cotizado y listo para coordinar. Mueve el control para estimar el precio para tu equipo.",
      sliderLabel: "Miembros del equipo que necesitan headshots",
      unitLabel: "personas",
      perPersonLabel: "persona",
      tierIndividual: "Tarifa individual",
      tierSmall: "Tarifa equipo pequeño",
      tierFull: "Tarifa equipo completo",
      videoLabel: "Agregar video institucional (60 segundos, bilingüe)",
      videoDetail: "Guion, grabación en sitio, edición y narración/subtítulos en inglés y español.",
      photoLineLabel: "Fotografía",
      videoLineLabel: "Video",
      totalLabel: "Total estimado",
      ctaLabel: "Coordinémoslo",
      footnote:
        "Estimado basado en las tarifas por persona de la cotización QT-000002 (Brand Composers): $200 por 1 persona, $150/persona hasta 5, $50/persona de 6 a 20+. Precio final confirmado por escrito antes de coordinar.",
    },
    keyQuestions: {
      label: "Preguntas Clave",
      title: "Preguntas que Vale la Pena Responder Antes de Cerrar el Alcance",
      intro:
        "Esta propuesta es un punto de partida, no un plan terminado. Estas son las preguntas que más le van a dar forma.",
      items: [
        {
          icon: "barChart",
          question:
            "¿Qué rango de presupuesto hay disponible para medios pagados en estas 3 regiones, aparte del fee de consultoría?",
        },
        {
          icon: "map",
          question:
            "¿Qué mercado se prioriza primero: LATAM, Estados Unidos o el Caribe, o eso todavía está abierto?",
        },
        {
          icon: "handshake",
          question: "¿Quién aprueba las decisiones de marketing y con qué rapidez?",
        },
        {
          icon: "users",
          question:
            "¿Cuánto tiempo puede dedicar realmente el equipo interno a nuevas iniciativas, más allá de su carga actual?",
        },
        {
          icon: "database",
          question:
            "¿Qué acceso existe hoy a herramientas como el CRM, cuentas de anuncios, analítica y Mailchimp?",
        },
        {
          icon: "target",
          question: "¿Cómo se mide el éxito: leads, reuniones con distribuidores, ventas o presencia de marca?",
        },
        {
          icon: "calendar",
          question: "¿Hay una fecha o evento que esté impulsando el momento de esta expansión?",
        },
      ],
      footnote: "Las respuestas aquí definen directamente la cadencia, el precio y qué región va primero.",
    },
    next: {
      label: "Próximos Pasos",
      title: "Próximos Pasos",
      steps: [
        "Aprovechar esta reunión para poner a prueba prioridades, plazos y cómo se ve el éxito en cada región.",
        "Acordar el alcance y los términos para la primera campaña de entrada a mercado y la cadencia de consultoría trimestral.",
        "Establecer una fecha de inicio para que la primera campaña, y el primer ciclo trimestral, puedan comenzar sin demora.",
      ],
      contactLabel: "Hablemos",
    },
  },
} as const;

export type SectionsEn = typeof sections.en;
