/*
  EDIT THIS FILE TO UPDATE YOUR WEBSITE
  ---------------------------------------
  All the text, publications and photos live here.
  You never need to touch the HTML.

  TWO LANGUAGES
  Any text can be written in two ways:
    - one text for both languages:   venue: "Coastal Engineering"
    - English and Spanish:           role: { en: "Research Associate", es: "Investigadora asociada" }
  If the Spanish is missing, the English is shown.

  Rules of thumb:
  - Keep the quotation marks "..." around text.
  - Keep a comma between items in a list.
  - Leave a field as "" to hide it on the site.
*/

window.SITE_CONTENT = {

  /* ---------- PROFILE ---------- */
  profile: {
    name: "Dina Vanessa Gómez Rave",
    role: { en: "Research Associate", es: "Investigadora asociada" },
    department: {
      en: "Department of Civil and Environmental Engineering",
      es: "Departamento de Ingeniería Civil y Ambiental"
    },
    institution: "Imperial College London",
    location: { en: "London, UK", es: "Londres, Reino Unido" },

    photo: "photos/DINA_1.jpg",
    photoAlt: { en: "Portrait of Dina Gómez Rave", es: "Retrato de Dina Gómez Rave" },

    // Paragraphs of your biography (each "..." is one paragraph)
    bio: {
      en: [
        "I am a civil engineer and hydrologist interested in flooding, hydroclimatic extremes, and their impacts on communities. My current research with Prof. Wouter Buytaert focuses on integrating local knowledge and community-generated data into global hydrological models.",
        "Previously, I was at IHCantabria (Spain), where I completed my PhD on compound flooding in estuaries, combining statistical and hydrodynamic modelling. My earlier experience includes academic roles at the University of Antioquia and consultancy work in Colombia."
      ],
      es: [
        "Soy ingeniera civil e hidróloga, interesada en las inundaciones, los extremos hidroclimáticos y sus impactos en las comunidades. Mi investigación actual con el Prof. Wouter Buytaert se centra en integrar el conocimiento local y los datos generados por las comunidades en modelos hidrológicos globales.",
        "Antes estuve en IHCantabria (España), donde hice mi doctorado sobre inundación compuesta en estuarios, combinando modelación estadística e hidrodinámica. Mi experiencia previa incluye docencia en la Universidad de Antioquia y consultoría en Colombia."
      ]
    },

    interests: {
      en: [
        "Compound hazards",
        "Hydroclimatic extremes",
        "Multivariate statistical modelling",
        "Flood hazard and impact modelling",
        "Early warning systems",
        "Citizen science and community-based monitoring",
        "Local knowledge",
        "Disaster risk reduction"
      ],
      es: [
        "Amenazas compuestas",
        "Extremos hidroclimáticos",
        "Modelación estadística multivariada",
        "Modelación de amenaza e impacto por inundación",
        "Sistemas de alerta temprana",
        "Ciencia ciudadana y monitoreo comunitario",
        "Conocimiento local",
        "Reducción del riesgo de desastres"
      ]
    },

    // Public contact details. Leave "" to hide.
    publicEmail: "d.gomezrave@imperial.ac.uk",
    links: {
      scholar: "",
      orcid: "https://orcid.org/0000-0002-9446-4177",
      linkedin: "https://www.linkedin.com/in/dvgrave/",
      researchgate: "",
      github: "https://github.com/divagora/"
    },

    // A public version of your CV (without home address, phone or date of birth).
    // Put the PDF in the files folder, e.g. "files/Gomez-Rave_CV.pdf"
    cvFile: "",

    // How your surname appears in author lists, so it is highlighted
    citationName: "Gomez-Rave"
  },

  /* ---------- EDUCATION (shown next to your bio) ---------- */
  education: [
    {
      years: "2021–2026",
      degree: {
        en: "PhD in Coastal Engineering, Hydrobiology and Management of Aquatic Systems",
        es: "Doctorado en Ingeniería de Costas, Hidrobiología y Gestión de Sistemas Acuáticos"
      },
      place: { en: "University of Cantabria, Spain", es: "Universidad de Cantabria, España" }
    },
    {
      years: "2023–2024",
      degree: {
        en: "Certificate in Geological and Climate-Related Risk (CERG-C)",
        es: "Certificado en Riesgos Geológicos y Climáticos (CERG-C)"
      },
      place: { en: "University of Geneva, Switzerland", es: "Universidad de Ginebra, Suiza" }
    },
    {
      years: "2019–2020",
      degree: {
        en: "MSc in Hydrology and Water Resource Management",
        es: "Máster en Hidrología y Gestión de Recursos Hídricos"
      },
      place: { en: "University of Alcalá, Spain", es: "Universidad de Alcalá, España" }
    },
    {
      years: "2014–2019",
      degree: { en: "MSc in Environmental Engineering", es: "Maestría en Ingeniería Ambiental" },
      place: { en: "University of Antioquia, Colombia", es: "Universidad de Antioquia, Colombia" }
    },
    {
      years: "2004–2009",
      degree: { en: "BSc in Civil Engineering", es: "Ingeniería Civil" },
      place: { en: "University of Antioquia, Colombia", es: "Universidad de Antioquia, Colombia" }
    }
  ],

  /* ---------- RESEARCH ----------
     color can be: "powder", "peach", "sage", "lavender" or "butter"
  */
  research: {
    intro: {
      en: "My research explores the interactions between water and society: how floods emerge, how they affect communities, and how scientific modelling and local knowledge can help us better understand and anticipate their impacts.",
      es: "Mi investigación explora las interacciones entre el agua y la sociedad: cómo se generan las inundaciones, cómo afectan a las comunidades y cómo la modelación científica y el conocimiento local pueden ayudarnos a comprender y anticipar mejor sus impactos."
    },
    themes: [
      {
        title: { en: "Compound flooding in estuaries", es: "Inundación compuesta en estuarios" },
        text: {
          en: "Understanding how river flows, storm surges, waves and rainfall interact to produce coastal flooding, using multivariate statistics and hydrodynamic models.",
          es: "Comprender cómo interactúan los caudales fluviales, la marea meteorológica, el oleaje y la lluvia para producir inundaciones costeras, mediante estadística multivariada y modelos hidrodinámicos."
        },
        keywords: {
          en: "vine copulas, joint extremes, Delft3D, surrogate models",
          es: "cópulas vine, extremos conjuntos, Delft3D, modelos subrogados"
        },
        color: "powder"
      },
      {
        title: { en: "Flood impacts and early warning", es: "Impactos de las inundaciones y alerta temprana" },
        text: {
          en: "Exploring how combinations of flood drivers relate to potential impacts, and how this information can support more effective flood warnings and preparedness.",
          es: "Explorar cómo las combinaciones de forzamientos de inundación se relacionan con sus posibles impactos, y cómo esta información puede apoyar alertas y una preparación más efectivas."
        },
        keywords: {
          en: "joint thresholds, impact-based assessment, early warning",
          es: "umbrales conjuntos, evaluación basada en impactos, alerta temprana"
        },
        color: "peach"
      },
      {
        title: { en: "Participatory hydrology", es: "Hidrología participativa" },
        text: {
          en: "Exploring how community observations, citizen science and local knowledge can complement hydrological modelling, particularly in data-scarce regions.",
          es: "Explorar cómo las observaciones comunitarias, la ciencia ciudadana y el conocimiento local pueden complementar la modelación hidrológica, especialmente en regiones con escasez de datos."
        },
        keywords: {
          en: "citizen science, local knowledge, community monitoring, water reanalysis",
          es: "ciencia ciudadana, conocimiento local, monitoreo comunitario, reanálisis hídrico"
        },
        color: "sage"
      },
      {
        title: { en: "Hydroclimatic extremes and variability", es: "Extremos y variabilidad hidroclimática" },
        text: {
          en: "Understanding extreme hydrometeorological events, their variability, and the challenges of assessing flood hazards under changing conditions.",
          es: "Comprender los eventos hidrometeorológicos extremos, su variabilidad y los retos de evaluar la amenaza por inundación en condiciones cambiantes."
        },
        keywords: {
          en: "hydroclimatic variability, extreme events, uncertainty",
          es: "variabilidad hidroclimática, eventos extremos, incertidumbre"
        },
        color: "lavender"
      }
    ],
    currentProject: {
      // The project's name stays in English (it is its official title)
      title: "Unlocking Local Knowledge Production for Global Water Reanalysis",
      text: {
        en: "This project aims to integrate citizen observations, volunteer monitoring and local knowledge into hydrological modelling, using semantic data models and machine learning while accounting for uncertainties. It will develop a simulation system to support local and regional decision-making, with data collection across the Andes, Ghana, Ethiopia, Laos and India.",
        es: "Este proyecto busca integrar observaciones ciudadanas, monitoreo voluntario y conocimiento local en la modelación hidrológica, mediante modelos semánticos de datos y aprendizaje automático, teniendo en cuenta las incertidumbres. Desarrollará un sistema de simulación para apoyar la toma de decisiones a escala local y regional, con recolección de datos en los Andes, Ghana, Etiopía, Laos e India."
      },
      link: "https://www.schmidtsciences.org/view/#modal-unlocking-local-knowledge-production-for-global-water-reanalysis"
    }
  },

  /* ---------- PUBLICATIONS ----------
     type can be: "Journal article", "Journal article (in Spanish)", "Preprint",
     "Under review", "PhD thesis" (the label is translated automatically).
     Paper titles stay in their original language.
     Add new ones at the top. doi = just the link; pdf = optional file or link.
  */
  publications: [
    {
      year: "2026",
      type: "PhD thesis",
      authors: "Gomez-Rave, D.V.",
      title: "Compound flooding in estuaries: an approach from the integration of multivariate statistical models and hydrodynamic models",
      venue: { en: "University of Cantabria", es: "Universidad de Cantabria" },
      details: "",
      doi: "",
      pdf: "https://repositorio.unican.es/entities/publication/3df63919-e416-4b71-a4b5-2e6778a9d0ee",
      image: "assets/pubs/pub-thesis.svg",
      imageAlt: {
        en: "Plan view of an estuary with a model mesh and the flood extent along its banks",
        es: "Vista en planta de un estuario con la malla del modelo y la extensión de la inundación en sus orillas"
      }
    },
    {
      year: "2025",
      type: "Journal article",
      authors: "Gomez-Rave, D.V., Urrea-Méndez, D.A., del Jesus, M.",
      title: "Multivariate design events for compound flooding analysis in estuaries",
      venue: "Coastal Engineering",
      details: "202, 104850",
      doi: "https://doi.org/10.1016/j.coastaleng.2025.104850",
      pdf: "",
      image: "assets/pubs/pub-design-events.svg",
      imageAlt: {
        en: "Vine copula structure linking six flood drivers, next to joint probability contours with design events",
        es: "Estructura de cópula vine que une seis forzamientos de inundación, junto a contornos de probabilidad conjunta con eventos de diseño"
      }
    },
    {
      year: "2025",
      type: "Journal article (in Spanish)",
      authors: "Gomez-Rave, D.V., Urrea-Méndez, D.A., del Jesus, M.",
      title: "Inundación compuesta en el estuario de Santoña: umbrales bivariados y su aplicación en alertas tempranas",
      venue: "Ingeniería del Agua",
      details: "29(2), 73–89",
      doi: "https://doi.org/10.4995/ia.2025.23025",
      pdf: "",
      image: "assets/pubs/pub-santona.svg",
      imageAlt: {
        en: "Stylised Santoña estuary with marsh channels and a three-level alert gauge",
        es: "Estuario de Santoña estilizado, con canales de marisma y una regla de alerta de tres niveles"
      }
    },
    {
      year: "2025",
      type: "Journal article",
      authors: "Gomez-Rave, D.V., Scolobig, A., del Jesus, M.",
      title: "Rethinking preparedness for coastal compound flooding: insights from a systematic review",
      venue: "Natural Hazards and Earth System Sciences",
      details: "25, 3977–4002",
      doi: "https://doi.org/10.5194/nhess-25-3977-2025",
      pdf: "",
      image: "assets/pubs/pub-preparedness.svg",
      imageAlt: {
        en: "Screening funnel of a systematic review leading to 49 studies grouped by theme",
        es: "Embudo de selección de una revisión sistemática que lleva a 49 estudios agrupados por tema"
      }
    }
  ],

  /* ---------- COLLABORATIONS ----------
     Papers you co-authored. They appear in a compact list under your
     publications, without a picture. Same fields as above.
  */
  collaborations: [
    {
      year: "2026",
      type: "Journal article",
      authors: "Urrea-Méndez, D.A., Gomez-Rave, D.V., del Jesus, M.",
      title: "Multivariate design storms using vine copulas and Gaussian process regression",
      venue: "Journal of Hydrology",
      details: "135762",
      doi: "https://www.sciencedirect.com/science/article/pii/S0022169426008590",
      pdf: ""
    },
    {
      year: "2024",
      type: "Preprint",
      authors: "del Jesus, M., Urrea-Méndez, D.A., Gomez-Rave, D.V.",
      title: "Return period of high-dimensional compound events. Part I: Conceptual framework",
      venue: "Hydrology and Earth System Sciences Discussions",
      details: "1–27",
      doi: "https://doi.org/10.5194/hess-2024-334",
      pdf: ""
    },
    {
      year: "2024",
      type: "Preprint",
      authors: "Urrea-Méndez, D.A., del Jesus, M., Gomez-Rave, D.V.",
      title: "Return period of high-dimensional compound events. Part II: Analysis of spatially-variable precipitation",
      venue: "Hydrology and Earth System Sciences Discussions",
      details: "1–30",
      doi: "https://doi.org/10.5194/hess-2024-335",
      pdf: ""
    }
  ],

  /* ---------- PERSONAL NOTE (folded, on the green band before Contact) ----------
     Separate paragraphs with an empty line.
     Leave photo as "" to show the text alone.
  */
  personal: {
    title: { en: "A personal note", es: "Una nota personal" },
    subtitle: { en: "How I see research", es: "Cómo veo la investigación" },
    photo: "photos/DINA_2.jpeg",
    photoAlt: {
      en: "Storm clouds over the mountains of Antioquia",
      es: "Nubes de tormenta sobre las montañas de Antioquia"
    },
    caption: { en: "Back home in Antioquia, Colombia", es: "En casa, en Antioquia (Colombia)" },
    text: {
      en: `I grew up in the mountains of Colombia, surrounded by lush landscapes and plenty of rain. My interest in hydrology began with a simple curiosity about the connection between rainfall and landslides. Over time, that curiosity led me to weather forecasting and, later, to studying floods and other extreme events.

I enjoy exploring these questions, especially through observations and models. I'm equally interested in how this research relates to people's lives and what we can learn from their own experiences. Growing up where I did has made me aware that people's circumstances, needs, and priorities shape how scientific findings are understood and used. I think scientific and local knowledge have much to offer each other.`,
      es: `Crecí en las montañas de Colombia, rodeada de paisajes exuberantes y mucha lluvia. Mi interés por la hidrología empezó con una curiosidad sencilla por la relación entre la lluvia y los deslizamientos. Con el tiempo, esa curiosidad me llevó a la predicción del tiempo y, más tarde, al estudio de las inundaciones y otros eventos extremos.

Disfruto tratando de comprender estos fenómenos, sobre todo a través de observaciones y modelos. Pero también me interesa lo que podemos aprender de las personas que conviven con ellos y de su conocimiento del entorno. Crecer donde crecí me permitió reconocer que una misma realidad puede entenderse de distintas maneras, dependiendo de las experiencias, necesidades y prioridades de cada persona. Creo que el conocimiento científico y el conocimiento local tienen mucho que aportarse mutuamente.`
    }
  },

  /* ---------- LABELS (menu, titles and buttons) ---------- */
  labels: {
    en: {
      pageTitle: "Dina Vanessa Gómez Rave · Hydrology and flood research",
      metaDescription: "Dina Vanessa Gómez Rave, hydrologist and Research Associate at Imperial College London. Compound flooding, hydroclimatic extremes and participatory hydrology.",
      skip: "Skip to content",
      menu: "Menu",
      navAbout: "About",
      navResearch: "Research",
      navPublications: "Publications",
      interests: "Interests",
      education: "Education",
      currentProject: "Current project",
      collaborations: "Collaborations",
      scholarMore: "Full list on Google Scholar",
      read: "Read",
      foldAway: "Fold away",
      contact: "Get in touch",
      backToTop: "Back to top",
      email: "Email",
      cv: "CV (PDF)",
      pubTypes: {
        "Journal article": "Journal article",
        "Journal article (in Spanish)": "Journal article (in Spanish)",
        "Preprint": "Preprint",
        "Under review": "Under review",
        "PhD thesis": "PhD thesis"
      }
    },
    es: {
      pageTitle: "Dina Vanessa Gómez Rave · Hidrología e inundaciones",
      metaDescription: "Dina Vanessa Gómez Rave, hidróloga e investigadora asociada en Imperial College London. Inundación compuesta, extremos hidroclimáticos e hidrología participativa.",
      skip: "Saltar al contenido",
      menu: "Menú",
      navAbout: "Sobre mí",
      navResearch: "Investigación",
      navPublications: "Publicaciones",
      interests: "Intereses",
      education: "Formación",
      currentProject: "Proyecto actual",
      collaborations: "Colaboraciones",
      scholarMore: "Lista completa en Google Scholar",
      read: "Leer",
      foldAway: "Plegar",
      contact: "Contacto",
      backToTop: "Volver arriba",
      email: "Correo",
      cv: "CV (PDF)",
      pubTypes: {
        "Journal article": "Artículo",
        "Journal article (in Spanish)": "Artículo en español",
        "Preprint": "Preprint",
        "Under review": "En revisión",
        "PhD thesis": "Tesis doctoral"
      }
    }
  }
};
