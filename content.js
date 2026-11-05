/*
  EDIT THIS FILE TO UPDATE YOUR WEBSITE
  ---------------------------------------
  All the text, publications, photos and personal bits live here.
  You never need to touch the HTML.

  Rules of thumb:
  - Keep the quotation marks "..." around text.
  - Keep a comma between items in a list.
  - Leave a field as "" to hide it on the site.
  - Entries with isExample: true show a small "example" tag.
    Replace or delete them before you publish.
*/

window.SITE_CONTENT = {

  /* ---------- PROFILE ---------- */
  profile: {
    name: "Dina Gómez Rave",
    role: "Research Associate",
    department: "Department of Civil and Environmental Engineering",
    institution: "Imperial College London",
    location: "London, UK",

    // Your portrait: copy it into the photos folder and change the path,
    // for example "photos/portrait.jpg"
    photo: "photos/DINA_1.JPG",
    photoAlt: "Portrait of Dina Gómez Rave",

    // Paragraphs of your biography (each "..." is one paragraph)
    bio: [
  "I am a civil engineer and hydrologist interested in flooding, hydroclimatic extremes, and their impacts on communities. My current research with Prof. Wouter Buytaert focuses on integrating local knowledge and community-generated data into global hydrological models.",
  "Previously, I was at IHCantabria (Spain), where I completed my PhD on compound flooding in estuaries, combining statistical and hydrodynamic modelling. My earlier experience includes academic roles at the University of Antioquia and consultancy work in Colombia."
],

    interests: [
      "Compound flooding",
      "Hydroclimatic extremes",
      "Early-warning systems",
      "Participatory monitoring and citizen science",
      "Statistical and hydrodynamic modelling",
      "Disaster risk reduction"
    ],

    // Public contact details. Leave "" to hide.
    // Use a work or public email, never a private one you don't want online.
    publicEmail: "",
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
    { years: "2021–2026", degree: "PhD in Coastal Engineering, Hydrobiology and Management of Aquatic Systems", place: "University of Cantabria, Spain" },
    { years: "2023–2024", degree: "Certificate in Geological and Climate-Related Risk (CERG-C)", place: "University of Geneva, Switzerland" },
    { years: "2019–2020", degree: "MSc in Hydrology and Water Resource Management", place: "University of Alcalá, Spain" },
    { years: "2014–2019", degree: "MSc in Environmental Engineering", place: "University of Antioquia, Colombia" },
    { years: "2004–2009", degree: "BSc in Civil Engineering", place: "University of Antioquia, Colombia" }
  ],

  /* ---------- RESEARCH ----------
     color can be: "powder", "peach", "sage", "lavender" or "butter"
  */
  research: {
    intro: "My research explores the interactions between water and society: how floods emerge, how they affect communities, and how scientific modelling and local knowledge can help us better understand and anticipate their impacts.",
    themes: [
    {
      title: "Compound flooding in estuaries",
      text: "Understanding how river flows, storm surges, waves and rainfall interact to produce coastal flooding, using multivariate statistics and hydrodynamic models.",
      keywords: "vine copulas, joint extremes, Delft3D, surrogate models",
      color: "powder"
    },
    {
      title: "Flood impacts and early warning",
      text: "Exploring how combinations of flood drivers relate to potential impacts, and how this information can support more effective flood warnings and preparedness.",
      keywords: "joint thresholds, impact-based assessment, early warning",
      color: "peach"
    },
    {
      title: "Participatory hydrology",
      text: "Exploring how community observations, citizen science and local knowledge can complement hydrological modelling, particularly in data-scarce regions.",
      keywords: "citizen science, local knowledge, community monitoring, water reanalysis",
      color: "sage"
    },
    {
      title: "Hydroclimatic extremes and variability",
      text: "Understanding extreme hydrometeorological events, their variability, and the challenges of assessing flood hazards under changing conditions.",
      keywords: "hydroclimatic variability, extreme events, uncertainty",
      color: "lavender"
    }
  ],
     currentProject: {
      title: "Unlocking Local Knowledge Production for Global Water Reanalysis",
      text: "This project aims to integrate citizen observations, volunteer monitoring and local knowledge into hydrological modelling, using semantic data models and machine learning while accounting for uncertainties. It will develop a simulation system to support local and regional decision-making, with data collection across the Andes, Ghana, Ethiopia, Laos and India.",
      link: "https://www.schmidtsciences.org/view/#modal-unlocking-local-knowledge-production-for-global-water-reanalysis"
    }
  },

  

  /* ---------- PUBLICATIONS ----------
     type can be: "Journal article", "Journal article (in Spanish)", "Preprint",
     "Under review", "PhD thesis"
     Add new ones at the top. doi = just the link; pdf = optional file or link.
     image = the picture shown next to each paper. The ones in assets/pubs
     are original illustrations; you can swap in your own figure or
     graphical abstract, e.g. "photos/santona-map.jpg".
  */
  publications: [
    {
      year: "2026",
      type: "PhD thesis",
      authors: "Gomez-Rave, D.V.",
      title: "Compound flooding in estuaries: an approach from the integration of multivariate statistical models and hydrodynamic models",
      venue: "University of Cantabria",
      details: "",
      doi: "",
      pdf: "https://repositorio.unican.es/entities/publication/3df63919-e416-4b71-a4b5-2e6778a9d0ee",
      
      image: "assets/pubs/pub-thesis.svg",
      imageAlt: "Plan view of an estuary with a model mesh and the flood extent along its banks"
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
      imageAlt: "Vine copula structure linking six flood drivers, next to joint probability contours with design events"
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
      imageAlt: "Stylised Santoña estuary with marsh channels and a three-level alert gauge"
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
      imageAlt: "Screening funnel of a systematic review leading to 49 studies grouped by theme"
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
     A short reflection. Separate paragraphs with an empty line.
     Leave photo as "" to show the text alone.
  */
  personal: {
    title: "A personal note",
    subtitle: "How I see research",
    photo: "photos/DINA_2.jpeg",
    photoAlt: "Antioquia",
    caption: "Back home in Antioquia, Colombia",
        text: `I grew up in the mountains of Colombia, surrounded by lush landscapes and plenty of rain. My interest in hydrology began with a simple curiosity about the connection between rainfall and landslides. Over time, that curiosity led me to weather forecasting and, later, to studying floods and other extreme events.

I enjoy exploring these questions, especially through observations and models. I'm equally interested in how this research relates to people's lives and what we can learn from their own experiences. Growing up where I did has made me aware that people's circumstances, needs, and priorities shape how scientific findings are understood and used. I think scientific and local knowledge have much to offer each other.` }
};
