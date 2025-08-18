/** Data model for a single design item in the gallery. */
export interface DesignItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

/** Curated list of featured design items. */
export const designs: readonly DesignItem[] = [
  {
    id: 'ALA-ALANG-BANAL-REV',
    imageSrc: '/assets/designs/ALA-ALANG-BANAL-REV.jpg',
    imageAlt: 'Ala Alang Banal Rev Design',
  },
  {
    id: 'Dillinger',
    imageSrc: '/assets/designs/Dillinger.jpg',
    imageAlt: 'Dillinger Design',
  },
  {
    id: 'GALIT',
    imageSrc: '/assets/designs/GALIT.jpg',
    imageAlt: 'Galit Design',
  },
  {
    id: 'KUYA-KIM',
    imageSrc: '/assets/designs/KUYA-KIM.jpg',
    imageAlt: 'Kuya Kim Design',
  },
  {
    id: 'RIOT',
    imageSrc: '/assets/designs/RIOT.jpg',
    imageAlt: 'Riot Design',
  },
  {
    id: 'ROMY',
    imageSrc: '/assets/designs/ROMY.jpg',
    imageAlt: 'Romy Design',
  },
  {
    id: 'SERBISYONG_KAGAWAD',
    imageSrc: '/assets/designs/SERBISYONG_KAGAWAD.jpg',
    imageAlt: 'Serbisyong Kagawad Design',
  },
  {
    id: 'TIRA-BAWI',
    imageSrc: '/assets/designs/TIRA-BAWI.jpg',
    imageAlt: 'Tira Bawi Design',
  },
];
