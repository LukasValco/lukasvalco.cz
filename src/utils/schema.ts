import { SITE } from 'astrowind:config';
import { getCanonical } from '~/utils/permalinks';

const siteUrl = SITE?.site?.replace(/\/$/, '') ?? 'https://lukasvalco.cz';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lukáš Valčo',
  url: siteUrl,
  jobTitle: 'Fotovoltaický expert a energetický poradce',
  worksFor: {
    '@type': 'Organization',
    name: 'E.ON Energie, a.s.',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'České Budějovice',
    addressRegion: 'Jihočeský kraj',
    addressCountry: 'CZ',
  },
  sameAs: ['https://www.linkedin.com/in/lukasvalco/', 'https://github.com/LukasValco'],
  email: 'Lukas.Valco@outlook.com',
  knowsAbout: [
    'Fotovoltaika',
    'Energetické poradenství',
    'Termovizní diagnostika',
    'PV*SOL',
    'Technická podpora solárních systémů',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE?.name ?? 'Lukáš Valčo',
  url: siteUrl,
  description:
    'Fotovoltaický expert ČFA a energetický poradce. Sdílím znalosti z praxe v technické podpoře solárních systémů.',
  inLanguage: 'cs-CZ',
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Lukáš Valčo — poradenství k fotovoltaice a energetice',
  url: String(getCanonical('/sluzby')),
  areaServed: 'CZ',
  serviceType: [
    'Konzultace k fotovoltaice',
    'Simulace v PV*SOL',
    'Energetické poradenství',
    'Termovizní diagnostika dronem',
  ],
  provider: {
    '@type': 'Person',
    name: 'Lukáš Valčo',
    url: siteUrl,
  },
};
