export type Translation = {
  name: string;
  role: string;
  typewriterRoles: string[];
  about: {
    bio: string;
    stats: { label: string; value: number }[];
    values: { title: string; description: string; icon: string }[];
  };
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    category: string;
    year: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    text: string;
    avatar: string;
  }[];
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
    collab: string;
    collabText: string;
    location: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  footer: {
    tagline: string;
    returnToSource: string;
    allRights: string;
    madeWith: string;
  };
};

export const portfolioData: { [key: string]: Translation } = {
  "es-DO": {
    name: "Mario Gonzalez",
    role: "Desarrollador Senior Full Stack",
    typewriterRoles: [".NET Expert", "Mobile Developer", "Full Stack Senior", "Software Architecture"],
    about: {
      bio: "Soy un Desarrollador Full Stack Senior, enfocado en la excelencia tecnológica mediante soluciones innovadoras, escalables y eficientes. Especializado en .NET Core y entornos web de alto rendimiento con foco en la eficacia organizacional.",
      stats: [
        { label: "Años de Exp.", value: 8 },
        // { label: "Proyectos Corporativos", value: 45 },
        // { label: "Casos de Éxito", value: 20 },
      ],
      values: [
        {
          title: "Arquitectura Robusta",
          description: "Diseño de sistemas escalables bajo mejores prácticas de ingeniería.",
          icon: "Layers",
        },
        {
          title: "Optimización continua",
          description: "Fuerte enfoque en alto rendimiento y eficiencia organizacional.",
          icon: "Zap",
        },
        {
          title: "Calidad de Software",
          description: "Software mantenible con foco en la sostenibilidad tecnológica.",
          icon: "ShieldCheck",
        },
      ],
    },
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Blazor", "xamarin form / Maui"],
      backend: [".NET Core", "C#", "SQL Server", "Web API", "Arquitectura Limpia"],
      tools: ["Git & GitHub", "Azure DevOps", "Nunit"],
    },
    projects: [
      {
        title: "Half Moon Games Studio",
        description: "Estudio de desarrollo de videojuegos indie dominico-mexicano dedicado a la creación de experiencias digitales innovadoras y videojuegos impactantes.",
        image: "/projects/hmstudios.png",
        tags: ["Game Dev", "Indie", "Web"],
        github: "#",
        demo: "https://halfmoongamestudio.com/",
        category: "Web",
        year: "2025",
      },
      {
        title: "Movie Master",
        description: "Aplicación web que utiliza la API v3 de The Movie Database (TMDB) como fuente de datos para explorar y visualizar información de películas.",
        image: "/projects/moviedb.png",
        tags: ["React", "API", "TMDB"],
        github: "https://github.com/MarioG108/",
        demo: "https://movieappmariog.netlify.app/#/",
        category: "Web",
        year: "2019",
      },
      {
        title: "Mi TCRD",
        description: "Portal del Tribunal Constitucional de la República Dominicana para la inscripción de actividades, eventos, diplomados y congresos.",
        image: "/projects/mitcrdWeb.png",
        tags: [".NET", "SQL Server", "Portal"],
        github: "#",
        demo: "https://mitcrd.gob.do/",
        category: "Web",
        year: "2023",
      },
      {
        title: "Mi TCRD APP",
        description: "App del Tribunal Constitucional para inscripción a eventos, pago, registro y visualización de transmisiones en vivo.",
        image: "/projects/mitcrdApp.png",
        tags: ["Xamarin Forms", "Mobile", "Events", "News"],
        github: "#",
        demo: "https://play.google.com/store/apps/details?id=com.tribunalconstitucionaldr.mitcrd",
        category: "Mobile App",
        year: "2024",
      },
      // {
      //   title: "Sistemas Operativos Ramos",
      //   description: "Optimización de procesos internos para una de las empresas retail más grandes de RD.",
      //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
      //   tags: [".NET", "SQL Server", "Architecture"],
      //   github: "#",
      //   demo: "#",
      //   category: "Web",
      // },
    ],
    testimonials: [
      {
        name: "Liderazgo Grupo Ramos",
        role: "Departamento de TI",
        text: "Mario ha sido pieza clave en la transformación digital de nuestros sistemas core.",
        avatar: "https://i.pravatar.cc/150?u=ramos",
      },
    ],
    contact: {
      title: "CONTACTO",
      subtitle: "HABLEMOS",
      form: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Protocolo",
      },
      collab: "Vamos a colaborar",
      collabText: "Si tienes un desafío tecnológico o simplemente quieres saludar, mi bandeja de entrada está abierta.",
      location: "Distrito Nacional, Dominicana",

    },
    nav: {
      home: "Inicio",
      about: "Perfil",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    footer: {
      tagline: "Creando experiencias digitales premium con alma de alto rendimiento.",
      returnToSource: "Volver al Origen",
      allRights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
    },
  },
  "en-US": {
    name: "Mario Gonzalez",
    role: "Senior Full Stack Developer",
    typewriterRoles: [".NET Expert", "Senior Full Stack", "Software Architecture"],
    about: {
      bio: "I am a Senior Full Stack Developer, focused on technological excellence through innovative, scalable, and efficient solutions. Specialized in .NET Core and high-performance web environments with a focus on organizational efficiency.",
      stats: [
        { label: "Years of Exp.", value: 8 },
        // { label: "Corp. Projects", value: 45 },
        // { label: "Success Stories", value: 20 },
      ],
      values: [
        {
          title: "Robust Architecture",
          description: "Designing scalable systems under engineering best practices.",
          icon: "Layers",
        },
        {
          title: "Continuous Optimization",
          description: "Strong focus on high performance and organizational efficiency.",
          icon: "Zap",
        },
        {
          title: "Software Quality",
          description: "Maintainable software with a focus on technological sustainability.",
          icon: "ShieldCheck",
        },
      ],
    },
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Blazor", "xamarin form / Maui"],
      backend: [".NET Core", "C#", "SQL Server", "Web API", "Clean Architecture"],
      tools: ["Git & GitHub", "Azure DevOps", "Nunit"],
    },
    projects: [
      {
        title: "Half Moon Games Studio",
        description: "Dominican-Mexican indie game development studio dedicated to creating innovative digital experiences and impactful video games.",
        image: "/projects/hmstudios.png",
        tags: ["c#", ".Net", "Web", "SQL"],
        github: "#",
        demo: "https://halfmoongamestudio.com/",
        category: "Web",
        year: "2025",
      },
      {
        title: "Movie Master",
        description: "Web application using The Movie Database (TMDB) API v3 as a data source to explore and visualize movie information.",
        image: "/projects/moviedb.png",
        tags: ["React", "API", "TMDB"],
        github: "https://github.com/MarioG108/",
        demo: "https://movieappmariog.netlify.app/#/",
        category: "Web",
        year: "2019",
      },
      {
        title: "Mi TCRD",
        description: "Portal of the Constitutional Court of the Dominican Republic for registration in activities, events, courses, and congresses.",
        image: "/projects/mitcrdWeb.png",
        tags: [".NET", "SQL Server", "Portal"],
        github: "#",
        demo: "https://mitcrd.gob.do/",
        category: "Web",
        year: "2023",
      },
      {
        title: "Mi TCRD APP",
        description: "Constitutional Court App for event registration, payment, recording, and viewing live streams.",
        image: "/projects/mitcrdApp.png",
        tags: ["Xamarin Forms", "Mobile", "Events", "News"],
        github: "#",
        demo: "https://play.google.com/store/apps/details?id=com.tribunalconstitucionaldr.mitcrd",
        category: "Mobile App",
        year: "2024",
      },
      // {
      //   title: "Ramos Operating Systems",
      //   description: "Internal process optimization for one of the largest retail companies in DR.",
      //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
      //   tags: [".NET", "SQL Server", "Architecture"],
      //   github: "#",
      //   demo: "#",
      //   category: "Web",
      // },
    ],
    testimonials: [
      {
        name: "Grupo Ramos Leadership",
        role: "IT Department",
        text: "Mario has been a key player in the digital transformation of our core systems.",
        avatar: "https://i.pravatar.cc/150?u=ramos",
      },
    ],
    contact: {
      title: "CONTACT",
      subtitle: "LET'S TALK",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Protocol",
      },
      collab: "Let's Collaborate",
      collabText: "If you have a technological challenge or just want to say hi, my inbox is open.",
      location: "Distrito Nacional, Dominican Republic",

    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    footer: {
      tagline: "Crafting premium digital experiences with high-performance soul.",
      returnToSource: "Return To Source",
      allRights: "All Rights Reserved.",
      madeWith: "Made with",
    },
  },
};

export const socials = [
  { platform: "GitHub", url: "https://github.com/Mariog108", handle: "Mariog108", icon: "Code" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/Mariog108", handle: "Mariog108", icon: "Handshake" },
  { platform: "Email", url: "mailto:mariogonzalezaquino+mario-g@gmail.com", handle: "mariogonzalezaquino@gmail.com", icon: "Mail" },
];
