import { StaticImageData } from 'next/image';

export type TAchievement = {
  id: number;
  image: StaticImageData | string;
  year: string;
  content: {
    country: string[] | StaticImageData;
    awards: string[];
  }
};
