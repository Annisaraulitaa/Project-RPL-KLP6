import { THeroProps } from "@/assets/types/layouts/THero";
import { structure, news, achiev, contact } from "@/assets/images";

export const heroData: { [key: string]: THeroProps } = {
  home: {
    heroContent: "",
    image: "",
  },
  structure: {
    heroContent:
      "Struktur Organisasi dan Kepengurusan Paduan Suara Mahasiswa Universitas Hasanuddin",
    image: structure,
  },
  news: {
    heroContent: "Berita",
    image: news,
  },
  events: {
    heroContent: "",
    image: "",
  },
  achievements: {
    heroContent: "Achievement",
    image: achiev,
  },
  gallery: {
    heroContent: "",
    image: "",
  },
  newRecruits: {
    heroContent: "",
    image: "",
  },
  contact: {
    heroContent: "Kontak",
    image: contact,
  },
};
