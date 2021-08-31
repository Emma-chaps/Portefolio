import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Emmanuelle CHARPIN - Developer', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: "Portfolio d'une développeuse front-end React", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello World !',
  name: 'Je suis Emma,',
  subtitle: 'Développeuse Web Front-End',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Passionnée d'informatique depuis toujours, c'est en 2018 que mon parcours dans le développement web a commencé, lors de la création du site internet de l'entreprise Cetabul que j'avais alors entièrement réalisé avec WordPress.",
  paragraphTwo: '',
  paragraphThree:
    "Aujourd'hui, le développement web est devenu une véritable passion qui conjugue mon goût pour le travail bien fait, en produisant du code de qualité, et mon attrait pour la résolution de problème, en répondant au besoin d'un client.",
  resume: 'https://www.linkedin.com/in/emmanuellecharpin/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shared-organizer1.jpg',
    title: 'Shared Organizer',
    info: "Projet de fin d'études réalisé en 4 semaines. Equipe de 2 développeurs.",
    info2: `Développement d'une application web proposant un système
      d'organisation et de gestion de tâches partagé entre plusieurs membres via un tableau de bord commun et modulable.`,
    technos: 'React - Redux - SASS - NodeJs - ExpressJs - PostgreSQL - Sequelize',
    deploy: 'AWS EC2',
    url: 'https://shared-organizer.me',
    repo: 'https://github.com/Emma-chaps/Shared-Organizer_Front', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rock-paper-scissors.png',
    title: 'Rock Paper Scissors Game',
    info: 'Challenge Frontend Mentor',
    info2: "Le célèbre Pierre Feuille Ciseaux contre l'ordinateur",
    technos: 'TypeScript - React - Styled-Components',
    deploy: 'Netlify',
    url: 'https://clever-bell-e86e31.netlify.app',
    repo: 'https://github.com/Emma-chaps/Rock-Paper-Scissors-Game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'countries-challenge.jpg',
    title: 'Flag Challenge',
    info: 'Challenge Frontend Mentor',
    info2:
      "Développement d'une application sur le thème des drapeaux avec React. Utilisation de l'API Restcountries pour les informations de chaque pays.",
    technos: 'React - SASS',
    deploy: 'Surge',
    url: 'http://where-in-the-world-emma-project.surge.sh/',
    repo: 'https://github.com/Emma-chaps/Flag-Challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fourchette.jpg',
    title: 'Fourchette Game',
    info: 'Mini jeu en React',
    info2: `Développement d'un mini jeu avec React. L'objectif est de deviné le juste prix généré aléatoirement à chaque partie.`,
    technos: 'React - SASS',
    deploy: 'Surge',
    url: 'http://fourchette-game-emma.surge.sh/',
    repo: 'https://github.com/Emma-chaps/fourchette-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cetabul1.jpg',
    title: 'Cetabul',
    info: 'Application réalisé pour la société Cetabul (non maintenu)',
    info2:
      "Développement d'une application e-commerce avec WordPress. Gestion des paiements avec Stripe.",
    technos: 'WordPress - Stripe',
    deploy: 'Ionos',
    url: 'https://cetabul.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ip-tracker1.jpg',
    title: 'Ip Address Tracker',
    info: 'Challenge Frontend Mentor',
    info2:
      "Développement d'une application de localisation avec React. Utilisation de l'API IPify pour la géolocalisation et de google maps pour la carte.",
    url: '',
    technos: 'React - SASS - Google Maps',
    deploy: false,
    repo: 'https://github.com/Emma-chaps/IP-address-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous avez apprécié votre visite ?',
  btn: 'Contactez-moi',
  email: 'em.charpin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/emmanuellecharpin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Emma-chaps',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/InBlocWeTrust',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
