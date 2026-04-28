export type Language = 'fr' | 'en';

export interface Translation {
  nav: {
    home: string;
    mission: string;
    projects: string;
    team: string;
    news: string;
    gallery: string;
    partners: string;
    contact: string;
    donate: string;
  };
  hero: {
    badge: string;
    title: string;
    titleItalic: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      beneficiaries: string;
      villages: string;
      funds: string;
      years: string;
      volunteers: string;
    };
  };
  donation: {
    title: string;
    description: string;
    oneTime: string;
    monthly: string;
    popular: string;
    impactLabel: string;
    impacts: {
      school: string;
      water: string;
      trees: string;
      medical: string;
    };
    goal: string;
    customAmount: string;
    donateBtn: string;
    success: {
      title: string;
      message: string;
    };
  };
  footer: {
    description: string;
    copyright: string;
    navigation: string;
    contact: string;
    legal: string;
    privacy: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
  };
  whatsapp: {
    tooltip: string;
    message: string;
  };
  mission: {
    hero: {
      title: string;
      titleItalic: string;
      description: string;
      cta: string;
      quote: string;
    };
    vision: {
      mission: { title: string; text: string };
      vision: { title: string; text: string };
      values: { title: string; items: string[] };
    };
    history: {
      title: string;
      steps: { year: string; title: string; text: string }[];
    };
    domains: {
      title: string;
      items: { title: string; description: string }[];
    };
  };
  projects: {
    hero: {
      title: string;
      description: string;
      villagesLabel: string;
    };
    categories: {
      water: string;
      education: string;
      women: string;
      environment: string;
      tourism: string;
    };
    map: {
      title: string;
      description: string;
    };
    grid: {
      funded: string;
      goal: string;
    };
    items: {
      title: string;
      description: string;
      category: string;
      image: string;
      progress: number;
      raised: string;
      target: string;
    }[];
  };
  team: {
    hero: {
      title: string;
      description: string;
    };
    volunteer: {
      title: string;
      description: string;
      cta: string;
    };
  };
  news: {
    hero: {
      title: string;
      description: string;
    };
    readMore: string;
    items: {
      title: string;
      date: string;
      category: string;
      time: string;
      excerpt: string;
      image: string;
    }[];
  };
  gallery: {
    hero: {
      title: string;
      titleItalic: string;
      description: string;
    };
    categories: {
      all: string;
      water: string;
      education: string;
      women: string;
      environment: string;
      team: string;
    };
  };
  partners: {
    hero: {
      title: string;
      titleItalic: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  home: {
    mission: {
      title: string;
      titleItalic: string;
      titleEnd: string;
      description: string;
      items: string[];
    };
    projects: {
      title: string;
      description: string;
      viewAll: string;
      items: { title: string; category: string }[];
    };
    whyUs: {
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
  };
  contact: {
    hero: {
      title: string;
      description: string;
    };
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      subjects: string[];
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      home: "Accueil",
      mission: "Notre Mission",
      projects: "Projets",
      team: "Équipe",
      news: "Actualités",
      gallery: "Galerie",
      partners: "Partenaires",
      contact: "Contact",
      donate: "Faire un don",
    },
    hero: {
      badge: "Actif au Togo depuis 2022 · 850+ bénéficiaires",
      title: "Ensemble, transformons",
      titleItalic: "des vies.",
      description: "L'Association Cœur Humanitaire (ACH) est une organisation à but non lucratif engagée dans l'amélioration des conditions de vie des femmes, des jeunes, des enfants et des populations vulnérables au Togo et en Afrique.",
      ctaPrimary: "❤️ Faire un don",
      ctaSecondary: "Découvrir nos projets →",
      stats: {
        beneficiaries: "Bénéficiaires",
        villages: "Villages couverts",
        funds: "Fonds terrain",
        years: "Ans d'engagement",
        volunteers: "Membres bénévoles",
      },
    },
    donation: {
      title: "Votre générosité change des vies",
      description: "Chaque centime va directement sur le terrain.",
      oneTime: "Don unique",
      monthly: "Don mensuel",
      popular: "Populaire",
      impactLabel: "Votre impact",
      impacts: {
        school: "1 enfant scolarisé pendant 1 mois",
        water: "20L d'eau potable/jour × 7 jours",
        trees: "5 arbres plantés",
        medical: "1 consultation médicale gratuite",
      },
      goal: "Objectif collecte eau 2025",
      customAmount: "Autre montant",
      donateBtn: "Confirmer mon don",
      success: {
        title: "Merci pour votre don !",
        message: "Votre générosité nous aide à transformer des vies au Togo.",
      },
    },
    footer: {
      description: "Association Cœur Humanitaire (ACH) est une association à but non lucratif basée au Togo, dédiée au développement durable et à l'aide humanitaire. Du cœur à l'action.",
      copyright: "© 2025 Association Cœur Humanitaire · Tous droits réservés",
      navigation: "Navigation",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      newsletter: {
        title: "Restez connectés à nos actions 🌍",
        description: "Nouvelles du terrain, rapports d'impact. Aucun spam.",
        placeholder: "votre@email.com",
        button: "S'abonner →",
      },
    },
    whatsapp: {
      tooltip: "Répondons en < 2h",
      message: "Bonjour, je souhaite en savoir plus sur l'ACH.",
    },
    mission: {
      hero: {
        title: "Notre Mission :",
        titleItalic: "Redonner l'espoir",
        description: "L'Association Cœur Humanitaire (ACH) est née d'une volonté simple mais profonde : agir concrètement pour ceux qui en ont le plus besoin au Togo. Contribuer à une meilleure hygiène de vie, à l'amélioration des soins de santé, à la promotion de l'éducation et de l'autonomisation des femmes.",
        cta: "Rapport d'impact 2024 ↓",
        quote: "Chaque don compte pour l'avenir du Togo.",
      },
      vision: {
        mission: {
          title: "Notre Mission",
          text: "Contribuer à une meilleure hygiène de vie au sein des communautés vulnérables, à l'amélioration des soins de santé, à la promotion de l'éducation de qualité et de l'autonomisation des femmes et des jeunes."
        },
        vision: {
          title: "Notre Vision",
          text: "Un Togo où chaque communauté dispose des ressources nécessaires pour s'épanouir dignement, dans une approche de développement humain durable et participatif."
        },
        values: {
          title: "Nos Valeurs",
          items: ["Unité", "Communication", "Respect", "Intégrité", "Responsabilité"],
        },
      },
      history: {
        title: "Notre Histoire",
        steps: [
          { year: "2022", title: "Création de l'ACH", text: "Lancement officiel de l'association par un groupe de bénévoles passionnés, portés par le slogan 'Du cœur à l'action'." },
          { year: "2023", title: "Premier forage", text: "Inauguration de notre premier point d'eau potable à Kpalimé — 450 personnes bénéficiaires directement." },
          { year: "2024", title: "Expansion & Impact", text: "Lancement du programme d'autonomisation des femmes dans 5 villages. 5+ projets réalisés, 5M+ F CFA mobilisés." },
        ],
      },
      domains: {
        title: "Nos domaines d'intervention",
        items: [
          { title: "Accès à l'eau potable et aux soins de santé", description: "Forages, points d'eau, consultations médicales gratuites pour les communautés rurales." },
          { title: "Dotation d'infrastructures scolaires", description: "Construction et équipement d'écoles, fournitures scolaires, bourses pour les enfants défavorisés." },
          { title: "Autonomisation des femmes et entrepreneuriat", description: "Formations professionnelles, coopératives maraîchères, micro-finance pour les femmes et les jeunes." },
          { title: "Protection de l'environnement", description: "Reboisement communautaire, sensibilisation écologique, préservation des écosystèmes locaux." },
          { title: "Tourisme solidaire", description: "Valorisation du patrimoine local et échanges culturels pour un développement économique durable." },
        ],
      },
    },
    projects: {
      hero: {
        title: "Nos Projets au Togo",
        description: "Découvrez nos actions concrètes pour transformer durablement les conditions de vie des populations.",
        villagesLabel: "Villages accompagnés durablement",
      },
      categories: {
        water: "Eau",
        education: "Éducation",
        women: "Femmes",
        environment: "Environnement",
        tourism: "Tourisme",
      },
      map: {
        title: "Carte de nos interventions",
        description: "Cliquez sur les marqueurs pour voir les détails des projets.",
      },
      grid: {
        funded: "financé",
        goal: "Objectif",
      },
      items: [
        { title: "Forage d'eau potable à Kpalimé", description: "Installation d'un point d'eau pour 450 familles dans la préfecture de Kloto.", category: "Eau", image: "/don3.jpeg", progress: 100, raised: "3 500 000", target: "3 500 000" },
        { title: "École de demain — Atakpamé", description: "Construction et équipement d'une salle de classe pour 80 élèves.", category: "Éducation", image: "/child1.png", progress: 75, raised: "2 250 000", target: "3 000 000" },
        { title: "Coopérative maraîchère — Aného", description: "Formation et équipement de 50 femmes pour le maraîchage biologique.", category: "Femmes", image: "/don4.jpeg", progress: 90, raised: "1 800 000", target: "2 000 000" },
        { title: "Reboisement communautaire — Kara", description: "Plantation de 1 000 arbres avec les communautés locales.", category: "Environnement", image: "/don5.jpeg", progress: 60, raised: "600 000", target: "1 000 000" },
        { title: "Kits scolaires — Rentrée 2025", description: "Distribution de fournitures scolaires à 200 enfants défavorisés.", category: "Éducation", image: "/don6.png", progress: 80, raised: "800 000", target: "1 000 000" },
        { title: "Tourisme solidaire — Plateaux", description: "Développement de circuits touristiques valorisant le patrimoine local.", category: "Tourisme", image: "/don7.png", progress: 40, raised: "400 000", target: "1 000 000" },
      ],
    },
    team: {
      hero: {
        title: "L'Équipe ACH",
        description: "Des hommes et des femmes passionnés, engagés sur le terrain pour un changement durable.",
      },
      volunteer: {
        title: "Rejoignez l'aventure",
        description: "Vous souhaitez donner de votre temps ? Devenez bénévole pour l'ACH et participez à la vision d'un monde plus heureux.",
        cta: "Devenir bénévole",
      },
    },
    news: {
      hero: {
        title: "Actualités & Impact",
        description: "Suivez nos dernières actions et découvrez les histoires de ceux que nous accompagnons.",
      },
      readMore: "Lire la suite",
      items: [
        { title: "Bienvenue sur le site de l'Association Cœur Humanitaire", date: "8 Novembre 2023", category: "Annonce", time: "3 min", excerpt: "L'Association Cœur Humanitaire (ACH) est fière de lancer son site web officiel. Découvrez notre mission, nos projets et comment nous rejoindre.", image: "/don1.png" },
        { title: "Nouveau forage à Kpalimé : l'eau potable arrive enfin", date: "12 Mars 2024", category: "Eau", time: "5 min", excerpt: "Inauguration de notre premier point d'eau potable dans la préfecture de Kloto. Plus de 450 familles bénéficient directement de cet accès.", image: "/don3.jpeg" },
        { title: "Distribution de kits scolaires pour la rentrée 2024", date: "15 Septembre 2024", category: "Éducation", time: "3 min", excerpt: "L'ACH a distribué des fournitures scolaires à plus de 200 enfants défavorisés pour la rentrée des classes 2024.", image: "/child1.png" },
        { title: "Succès de la formation maraîchage pour 50 femmes", date: "20 Octobre 2024", category: "Femmes", time: "4 min", excerpt: "Cinquante femmes de la région d'Aného ont bénéficié d'une formation en maraîchage biologique et reçu leur équipement de démarrage.", image: "/don4.jpeg" },
        { title: "Campagne de reboisement : 1000 arbres plantés à Kara", date: "5 Décembre 2024", category: "Environnement", time: "6 min", excerpt: "En partenariat avec les communautés locales, l'ACH a planté 1 000 arbres dans la région de la Kara pour lutter contre la déforestation.", image: "/don5.jpeg" },
        { title: "Rapport d'impact 2024 : une année de solidarité", date: "1 Février 2025", category: "Impact", time: "10 min", excerpt: "Retour sur une année riche en actions : 850 bénéficiaires, 5+ projets réalisés, 5M+ F CFA mobilisés. Merci à tous nos donateurs et bénévoles.", image: "/don2.png" },
      ],
    },
    gallery: {
      hero: {
        title: "Notre Galerie",
        titleItalic: "d'Actions",
        description: "Des images qui témoignent de l'impact concret de nos actions sur le terrain, au cœur des communautés que nous accompagnons.",
      },
      categories: {
        all: "Tout",
        water: "Eau",
        education: "Éducation",
        women: "Femmes",
        environment: "Environnement",
        team: "Équipe",
      },
    },
    partners: {
      hero: {
        title: "Nos Partenaires",
        titleItalic: "& Soutiens",
        description: "Ensemble, nous faisons la différence. Merci à toutes les organisations, institutions et individus qui croient en notre mission et nous accompagnent sur le terrain.",
      },
      cta: {
        title: "Devenez partenaire de l'ACH",
        description: "Vous êtes une entreprise, une institution ou une organisation et souhaitez soutenir nos actions ? Contactez-nous pour explorer les modalités d'un partenariat.",
        button: "Nous contacter",
      },
    },
    home: {
      mission: {
        title: "Notre engagement pour le ",
        titleItalic: "développement durable",
        titleEnd: " au Togo.",
        description: "Depuis 2022, nous œuvrons sans relâche pour apporter des solutions concrètes aux défis quotidiens des populations rurales. Notre approche repose sur l'autonomisation, la dignité et la solidarité active.",
        items: [
          "Accès à l'eau potable et soins de santé",
          "Éducation et scolarisation des enfants",
          "Autonomisation économique des femmes",
          "Protection de l'environnement et tourisme solidaire",
        ],
      },
      projects: {
        title: "Nos projets en cours",
        description: "Découvrez comment nous agissons concrètement sur le terrain.",
        viewAll: "Voir tous les projets →",
        items: [
          { title: "Forage à Kpalimé", category: "Eau" },
          { title: "École de demain", category: "Éducation" },
          { title: "Maraîchage bio", category: "Femmes" },
        ],
      },
      whyUs: {
        title: "Pourquoi Cœur Humanitaire ?",
        subtitle: "L'humanitaire, une mission de cœur et d'impact.",
        items: [
          {
            title: "Un engagement fort pour les communautés vulnérables",
            description: "L'ACH œuvre activement pour l'amélioration des conditions de vie des femmes, des jeunes et des enfants à travers l'accès à l'éducation, aux soins de santé et à l'eau potable.",
          },
          {
            title: "Une approche de développement humain durable",
            description: "Nos actions s'inscrivent dans une vision participative et inclusive qui encourage l'autonomisation, l'entrepreneuriat et la préservation de l'environnement.",
          },
          {
            title: "Une solidarité concrète et active",
            description: "Grâce à notre réseau de partenaires et bénévoles, nous mettons en place des projets structurants qui améliorent l'accès aux infrastructures sociales et sanitaires.",
          },
        ],
      },
    },
    contact: {
      hero: {
        title: "Contactez-nous",
        description: "Une question ? Une envie de partenariat ou de bénévolat ? Notre équipe est à votre écoute.",
      },
      form: {
        name: "Nom complet",
        email: "Adresse email",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
        subjects: ["Faire un don", "Devenir bénévole", "Partenariat", "Demande d'information", "Autre"],
      },
      info: {
        title: "Nos coordonnées",
        address: "2e Rue AOUISSI, Klikamé, Lomé-TOGO",
        phone: "Téléphone",
        email: "Email",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      mission: "Our Mission",
      projects: "Projects",
      team: "Team",
      news: "News",
      gallery: "Gallery",
      partners: "Partners",
      contact: "Contact",
      donate: "Make a Donation",
    },
    hero: {
      badge: "Active in Togo since 2022 · 850+ beneficiaries",
      title: "Together, let's transform",
      titleItalic: "lives.",
      description: "Association Cœur Humanitaire (ACH) is a non-profit organization committed to improving the living conditions of women, youth, children, and vulnerable populations in Togo and across Africa.",
      ctaPrimary: "❤️ Make a Donation",
      ctaSecondary: "Discover our projects →",
      stats: {
        beneficiaries: "Beneficiaries",
        villages: "Villages covered",
        funds: "Field funds",
        years: "Years of commitment",
        volunteers: "Active volunteers",
      },
    },
    donation: {
      title: "Your generosity changes lives",
      description: "Every cent goes directly to the field.",
      oneTime: "One-time gift",
      monthly: "Monthly gift",
      popular: "Popular",
      impactLabel: "Your impact",
      impacts: {
        school: "1 child in school for 1 month",
        water: "20L of clean water/day × 7 days",
        trees: "5 trees planted",
        medical: "1 free medical consultation",
      },
      goal: "2025 water fundraising goal",
      customAmount: "Other amount",
      donateBtn: "Confirm my donation",
      success: {
        title: "Thank you for your donation!",
        message: "Your generosity helps us transform lives in Togo.",
      },
    },
    footer: {
      description: "Association Cœur Humanitaire (ACH) is a non-profit organization based in Togo, dedicated to sustainable development and humanitarian aid. From the heart to action.",
      copyright: "© 2025 Association Cœur Humanitaire · All rights reserved",
      navigation: "Navigation",
      contact: "Contact",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      newsletter: {
        title: "Stay connected to our actions 🌍",
        description: "Field news, impact reports. No spam.",
        placeholder: "your@email.com",
        button: "Subscribe →",
      },
    },
    whatsapp: {
      tooltip: "We reply in < 2h",
      message: "Hello, I'd like to learn more about ACH.",
    },
    mission: {
      hero: {
        title: "Our Mission:",
        titleItalic: "Restoring hope",
        description: "Association Cœur Humanitaire (ACH) was born from a simple but profound desire: to act concretely for those who need it most in Togo — improving living conditions, healthcare, education, and women's empowerment.",
        cta: "2024 Impact Report ↓",
        quote: "Every donation counts for the future of Togo.",
      },
      vision: {
        mission: {
          title: "Our Mission",
          text: "To contribute to better living conditions in vulnerable communities, improved healthcare, quality education, and the empowerment of women and youth."
        },
        vision: {
          title: "Our Vision",
          text: "A Togo where every community has the necessary resources to thrive with dignity, through a sustainable and participatory approach to human development."
        },
        values: {
          title: "Our Values",
          items: ["Unity", "Communication", "Respect", "Integrity", "Responsibility"],
        },
      },
      history: {
        title: "Our History",
        steps: [
          { year: "2022", title: "Creation of ACH", text: "Official launch of the association by a group of passionate volunteers, driven by the motto 'From the heart to action'." },
          { year: "2023", title: "First borehole", text: "Inauguration of our first drinking water point in Kpalimé — 450 direct beneficiaries." },
          { year: "2024", title: "Expansion & Impact", text: "Launch of the women's empowerment program in 5 villages. 5+ projects completed, 5M+ CFA francs raised." },
        ],
      },
      domains: {
        title: "Our Areas of Action",
        items: [
          { title: "Access to clean water and healthcare", description: "Boreholes, water points, free medical consultations for rural communities." },
          { title: "School infrastructure", description: "Construction and equipping of schools, school supplies, scholarships for disadvantaged children." },
          { title: "Women's empowerment & entrepreneurship", description: "Vocational training, market gardening cooperatives, micro-finance for women and youth." },
          { title: "Environmental protection", description: "Community reforestation, ecological awareness, preservation of local ecosystems." },
          { title: "Solidarity tourism", description: "Promotion of local heritage and cultural exchanges for sustainable economic development." },
        ],
      },
    },
    projects: {
      hero: {
        title: "Our Projects in Togo",
        description: "Discover our concrete actions to sustainably transform the living conditions of populations.",
        villagesLabel: "Villages sustainably supported",
      },
      categories: {
        water: "Water",
        education: "Education",
        women: "Women",
        environment: "Environment",
        tourism: "Tourism",
      },
      map: {
        title: "Map of our interventions",
        description: "Click on the markers to see project details.",
      },
      grid: {
        funded: "funded",
        goal: "Goal",
      },
      items: [
        { title: "Borehole in Kpalimé", description: "Installation of a water point for 450 families in the Kloto prefecture.", category: "Water", image: "/don3.jpeg", progress: 100, raised: "3,500,000", target: "3,500,000" },
        { title: "School of Tomorrow — Atakpamé", description: "Construction and equipping of a classroom for 80 students.", category: "Education", image: "/child1.png", progress: 75, raised: "2,250,000", target: "3,000,000" },
        { title: "Market Garden Cooperative — Aného", description: "Training and equipment for 50 women in organic farming.", category: "Women", image: "/don4.jpeg", progress: 90, raised: "1,800,000", target: "2,000,000" },
        { title: "Community Reforestation — Kara", description: "Planting 1,000 trees with local communities.", category: "Environment", image: "/don5.jpeg", progress: 60, raised: "600,000", target: "1,000,000" },
        { title: "School Kits — Back to School 2025", description: "Distribution of school supplies to 200 disadvantaged children.", category: "Education", image: "/don6.png", progress: 80, raised: "800,000", target: "1,000,000" },
        { title: "Solidarity Tourism — Plateaux", description: "Development of tourist circuits highlighting local heritage.", category: "Tourism", image: "/don7.png", progress: 40, raised: "400,000", target: "1,000,000" },
      ],
    },
    team: {
      hero: {
        title: "The ACH Team",
        description: "Passionate men and women, committed on the ground for sustainable change.",
      },
      volunteer: {
        title: "Join the adventure",
        description: "Want to give your time? Become a volunteer for ACH and participate in the vision of a happier world.",
        cta: "Become a volunteer",
      },
    },
    news: {
      hero: {
        title: "News & Impact",
        description: "Follow our latest actions and discover the stories of those we support.",
      },
      readMore: "Read more",
      items: [
        { title: "Welcome to the ACH Website", date: "November 8, 2023", category: "Announcement", time: "3 min", excerpt: "Association Cœur Humanitaire (ACH) is proud to launch its official website. Discover our mission, our projects and how to join us.", image: "/don1.png" },
        { title: "New borehole in Kpalimé: clean water arrives at last", date: "March 12, 2024", category: "Water", time: "5 min", excerpt: "Inauguration of our first drinking water point in the Kloto prefecture. Over 450 families benefit directly from this access.", image: "/don3.jpeg" },
        { title: "Distribution of school kits for back to school 2024", date: "September 15, 2024", category: "Education", time: "3 min", excerpt: "ACH distributed school supplies to more than 200 disadvantaged children for the 2024 school year.", image: "/child1.png" },
        { title: "Successful market gardening training for 50 women", date: "October 20, 2024", category: "Women", time: "4 min", excerpt: "Fifty women from the Aného region received organic farming training and their starter equipment.", image: "/don4.jpeg" },
        { title: "Reforestation campaign: 1,000 trees planted in Kara", date: "December 5, 2024", category: "Environment", time: "6 min", excerpt: "In partnership with local communities, ACH planted 1,000 trees in the Kara region to fight deforestation.", image: "/don5.jpeg" },
        { title: "2024 Impact Report: a year of solidarity", date: "February 1, 2025", category: "Impact", time: "10 min", excerpt: "A look back at a year full of action: 850 beneficiaries, 5+ completed projects, 5M+ CFA francs raised. Thank you to all our donors and volunteers.", image: "/don2.png" },
      ],
    },
    gallery: {
      hero: {
        title: "Our Gallery",
        titleItalic: "of Actions",
        description: "Images that bear witness to the concrete impact of our actions in the field, at the heart of the communities we support.",
      },
      categories: {
        all: "All",
        water: "Water",
        education: "Education",
        women: "Women",
        environment: "Environment",
        team: "Team",
      },
    },
    partners: {
      hero: {
        title: "Our Partners",
        titleItalic: "& Supporters",
        description: "Together, we make a difference. Thank you to all the organizations, institutions, and individuals who believe in our mission and support us in the field.",
      },
      cta: {
        title: "Become an ACH Partner",
        description: "Are you a company, institution, or organization wishing to support our work? Contact us to explore partnership opportunities.",
        button: "Contact us",
      },
    },
    home: {
      mission: {
        title: "Our commitment to ",
        titleItalic: "sustainable development",
        titleEnd: " in Togo.",
        description: "Since 2022, we have been working tirelessly to provide concrete solutions to the daily challenges of rural populations. Our approach is based on empowerment, dignity, and active solidarity.",
        items: [
          "Access to clean water and healthcare",
          "Education and schooling for children",
          "Economic empowerment of women",
          "Environmental protection and solidarity tourism",
        ],
      },
      projects: {
        title: "Our ongoing projects",
        description: "Discover how we act concretely on the ground.",
        viewAll: "View all projects →",
        items: [
          { title: "Borehole in Kpalimé", category: "Water" },
          { title: "School of Tomorrow", category: "Education" },
          { title: "Organic Farming", category: "Women" },
        ],
      },
      whyUs: {
        title: "Why Cœur Humanitaire?",
        subtitle: "Humanitarian work: a mission of heart and impact.",
        items: [
          {
            title: "A strong commitment to vulnerable communities",
            description: "ACH actively works to improve the living conditions of women, youth and children through access to education, healthcare and clean water.",
          },
          {
            title: "A sustainable human development approach",
            description: "Our actions are part of a participatory and inclusive vision that encourages empowerment, entrepreneurship and environmental preservation.",
          },
          {
            title: "Concrete and active solidarity",
            description: "Through our network of partners and volunteers, we implement structural projects that improve access to social and health infrastructure.",
          },
        ],
      },
    },
    contact: {
      hero: {
        title: "Contact Us",
        description: "A question? A desire for partnership or volunteering? Our team is at your service.",
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
        subjects: ["Make a donation", "Become a volunteer", "Partnership", "Information request", "Other"],
      },
      info: {
        title: "Our Contact Details",
        address: "2nd Rue AOUISSI, Klikamé, Lomé-TOGO",
        phone: "Phone",
        email: "Email",
      },
    },
  },
};
