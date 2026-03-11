export type Language = 'fr' | 'en';

export interface Translation {
  nav: {
    home: string;
    mission: string;
    projects: string;
    team: string;
    news: string;
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
      values: { title: string; text: string };
    };
    history: {
      title: string;
      steps: { year: string; title: string; text: string }[];
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
    };
    map: {
      title: string;
      description: string;
    };
    grid: {
      funded: string;
      goal: string;
    };
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
      partners: "Partenaires",
      contact: "Contact",
      donate: "Faire un don",
    },
    hero: {
      badge: "Actif au Togo depuis 2022 · 850+ bénéficiaires",
      title: "Ensemble, transformons",
      titleItalic: "des vies.",
      description: "L'Association Cœur Humanitaire (ACH) est une association togolaise engagée pour l'amélioration des conditions de vie des femmes, jeunes et enfants au Togo.",
      ctaPrimary: "❤️ Faire un don",
      ctaSecondary: "Découvrir nos projets →",
      stats: {
        beneficiaries: "Bénéficiaires",
        villages: "Villages couverts",
        funds: "Fonds terrain",
        years: "Ans d'engagement",
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
      description: "Association Cœur Humanitaire (ACH) est une ONG à but non lucratif basée au Togo, dédiée au développement durable et à l'aide humanitaire.",
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
        description: "L'Association Cœur Humanitaire (ACH) est née d'une volonté simple mais profonde : agir concrètement pour ceux qui en ont le plus besoin au Togo.",
        cta: "Rapport d'impact 2024 ↓",
        quote: "Chaque don compte pour l'avenir du Togo.",
      },
      vision: {
        mission: { title: "Notre Mission", text: "Améliorer durablement les conditions de vie des femmes et des enfants en milieu rural." },
        vision: { title: "Notre Vision", text: "Un Togo où chaque communauté dispose des ressources nécessaires pour s'épanouir dignement." },
        values: { title: "Nos Valeurs", text: "Transparence, intégrité, solidarité et respect de la dignité humaine." },
      },
      history: {
        title: "Notre Histoire",
        steps: [
          { year: "2022", title: "Création de l'ACH", text: "Lancement officiel de l'association par un groupe de bénévoles passionnés." },
          { year: "2023", title: "Premier forage", text: "Inauguration de notre premier point d'eau potable à Kpalimé." },
          { year: "2024", title: "Expansion", text: "Lancement du programme d'autonomisation des femmes dans 5 villages." },
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
      },
      map: {
        title: "Carte de nos interventions",
        description: "Cliquez sur les marqueurs pour voir les détails des projets.",
      },
      grid: {
        funded: "financé",
        goal: "Objectif",
      },
    },
    team: {
      hero: {
        title: "L'Équipe ACH",
        description: "Des hommes et des femmes passionnés, engagés sur le terrain pour un changement durable.",
      },
      volunteer: {
        title: "Rejoignez l'aventure",
        description: "Vous souhaitez donner de votre temps ? Devenez bénévole pour l'ACH.",
        cta: "Devenir bénévole",
      },
    },
    news: {
      hero: {
        title: "Actualités & Impact",
        description: "Suivez nos dernières actions et découvrez les histoires de ceux que nous accompagnons.",
      },
      readMore: "Lire la suite",
    },
    home: {
      mission: {
        title: "Notre engagement pour le ",
        titleItalic: "développement durable",
        titleEnd: " au Togo.",
        description: "Depuis 2022, nous œuvrons sans relâche pour apporter des solutions concrètes aux défis quotidiens des populations rurales. Notre approche repose sur l'autonomisation et la dignité.",
        items: [
          "Accès à l'eau potable et assainissement",
          "Éducation et scolarisation des enfants",
          "Autonomisation économique des femmes",
          "Protection de l'environnement et tourisme durable"
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
    },
    contact: {
      hero: {
        title: "Contactez-nous",
        description: "Une question ? Une envie de partenariat ? Notre équipe est à votre écoute.",
      },
      form: {
        name: "Nom complet",
        email: "Adresse email",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
      },
      info: {
        title: "Nos coordonnées",
        address: "Lomé, Togo",
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
      partners: "Partners",
      contact: "Contact",
      donate: "Make a Donation",
    },
    hero: {
      badge: "Active in Togo since 2022 · 850+ beneficiaries",
      title: "Together, let's transform",
      titleItalic: "lives.",
      description: "Association Cœur Humanitaire (ACH) is a Togolese association committed to improving the living conditions of women, youth, and children in Togo.",
      ctaPrimary: "❤️ Make a Donation",
      ctaSecondary: "Discover our projects →",
      stats: {
        beneficiaries: "Beneficiaries",
        villages: "Villages covered",
        funds: "Field funds",
        years: "Years of commitment",
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
      description: "Association Cœur Humanitaire (ACH) is an association based in Togo, dedicated to sustainable development and humanitarian aid.",
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
        description: "Association Cœur Humanitaire (ACH) was born from a simple but profound desire: to act concretely for those who need it most in Togo.",
        cta: "2024 Impact Report ↓",
        quote: "Every donation counts for the future of Togo.",
      },
      vision: {
        mission: { title: "Our Mission", text: "Sustainably improve the living conditions of women and children in rural areas." },
        vision: { title: "Our Vision", text: "A Togo where every community has the necessary resources to thrive with dignity." },
        values: { title: "Our Values", text: "Transparency, integrity, solidarity, and respect for human dignity." },
      },
      history: {
        title: "Our History",
        steps: [
          { year: "2022", title: "Creation of ACH", text: "Official launch of the association by a group of passionate volunteers." },
          { year: "2023", title: "First borehole", text: "Inauguration of our first drinking water point in Kpalimé." },
          { year: "2024", title: "Expansion", text: "Launch of the women's empowerment program in 5 villages." },
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
      },
      map: {
        title: "Map of our interventions",
        description: "Click on the markers to see project details.",
      },
      grid: {
        funded: "funded",
        goal: "Goal",
      },
    },
    team: {
      hero: {
        title: "The ACH Team",
        description: "Passionate men and women, committed on the ground for sustainable change.",
      },
      volunteer: {
        title: "Join the adventure",
        description: "Want to give your time? Become a volunteer for ACH.",
        cta: "Become a volunteer",
      },
    },
    news: {
      hero: {
        title: "News & Impact",
        description: "Follow our latest actions and discover the stories of those we support.",
      },
      readMore: "Read more",
    },
    home: {
      mission: {
        title: "Our commitment to ",
        titleItalic: "sustainable development",
        titleEnd: " in Togo.",
        description: "Since 2022, we have been working tirelessly to provide concrete solutions to the daily challenges of rural populations. Our approach is based on empowerment and dignity.",
        items: [
          "Access to clean water and sanitation",
          "Education and schooling for children",
          "Economic empowerment of women",
          "Environmental protection and sustainable tourism"
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
    },
    contact: {
      hero: {
        title: "Contact Us",
        description: "A question? A desire for partnership? Our team is at your service.",
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
      },
      info: {
        title: "Our Contact Details",
        address: "Lomé, Togo",
        phone: "Phone",
        email: "Email",
      },
    },
  },
};
