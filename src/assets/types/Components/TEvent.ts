import { StaticImageData } from 'next/image';

export type TEvent = {
  id: number;
  title: string;
  content: string;
  image: StaticImageData | string;
};
