import { StaticImageData } from 'next/image';

export type TNews = {
  id: number;
  title: string;
  content: string;
  image: StaticImageData | string;
};
