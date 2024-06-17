import { Movie } from './interface';
export const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    rating: 9.2,
    image: 'assets/images/godfather.avif',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    id: 2,
    name: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    image: 'assets/images/shawshank.jpg',
    description:
      'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.                                         ',
  },
  {
    id: 3,
    name: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9,
    image: 'assets/images/darkknight.jpg',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    id: 4,
    name: 'Rush Hour',
    year: 1998,
    genre: 'Comedy',
    rating: 7,
    image: 'assets/images/rush.jpg',
    description:
      'Detective Inspector Lee, a loyal Hong Kong inspector, teams up with Detective James Carter, a loudmouthed L.A.P.D. officer. Their mission: to rescue the kidnapped daughter of the Chinese Consul while trying to apprehend a dangerous crime lord.',
  },
  {
    id: 5,
    name: 'Grease',
    year: 1978,
    genre: 'Musical',
    rating: 7.2,
    image: 'assets/images/grease.jpg',
    description:
      "Sally's love story with Danny Zuko, the leader of the T-Birds, a group of black-jacket greasers while discovering her new self.",
  },
];
