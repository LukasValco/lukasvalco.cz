import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Domů',
      href: getPermalink('/'),
    },
    {
      text: 'O mně',
      href: getPermalink('/o-mne'),
    },
    {
      text: 'Kariéra',
      href: getPermalink('/kariera'),
    },
    {
      text: 'Certifikáty',
      href: getPermalink('/certifikaty'),
    },
    {
      text: 'Služby',
      href: getPermalink('/sluzby'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Kontakt', href: getPermalink('/kontakt') }],
};

export const footerData = {
  description:
    'Fotovoltaický expert ČFA a energetický poradce. Pomáhám lidem rozumět fotovoltaice a energetice — z praxe, srozumitelně.',
  links: [
    {
      title: 'O mně',
      links: [
        { text: 'Životní cesta', href: getPermalink('/o-mne') },
        { text: 'Kariéra', href: getPermalink('/kariera') },
        { text: 'Certifikáty a vzdělání', href: getPermalink('/certifikaty') },
      ],
    },
    {
      title: 'Co dělám',
      links: [
        { text: 'Služby', href: getPermalink('/sluzby') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Kontakt', href: getPermalink('/kontakt') },
      ],
    },
    {
      title: 'Projekty',
      links: [
        { text: 'slunora.cz — nástroje pro FV', href: 'https://slunora.cz' },
        { text: 'renora.cz — energetické poradenství', href: 'https://renora.cz' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Ochrana soukromí', href: getPermalink('/privacy') },
    { text: 'Podmínky', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/lukasvalco/' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/LukasValco' },
    { ariaLabel: 'E-mail', icon: 'tabler:mail', href: 'mailto:Lukas.Valco@outlook.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Lukáš Valčo · Všechna práva vyhrazena.
  `,
};
