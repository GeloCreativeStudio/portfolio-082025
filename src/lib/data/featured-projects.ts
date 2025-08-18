/** Attribution metadata for project preview images. */
export interface ImageCredit {
  artist: string;
  artistLink: string;
}

/** Data model for featured projects displayed in the Projects section. */
export interface Project {
  name: string;
  role: string;
  avatar: string;
  codeLink: string;
  demoLink: string;
  imageCredit?: ImageCredit;
}

/** Curated list of featured projects. */
export const projects: readonly Project[] = [
  {
    name: 'MARS',
    role: 'Voice AI assistant',
    avatar: '/assets/projects/mars.svg',
    codeLink: '#',
    demoLink: '#',
    imageCredit: {
      artist: 'Angelo Manalo',
      artistLink: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  {
    name: 'Jail Visitor Management System',
    role: 'Visitor management for BJMP',
    avatar: '/assets/projects/qr-shield.svg',
    codeLink: '#',
    demoLink: '#',
    imageCredit: {
      artist: 'Angelo Manalo',
      artistLink: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  {
    name: 'Inventory Management System',
    role: 'Clothing line inventory',
    avatar: '/assets/projects/box.svg',
    codeLink: '#',
    demoLink: '#',
    imageCredit: {
      artist: 'Angelo Manalo',
      artistLink: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
];
