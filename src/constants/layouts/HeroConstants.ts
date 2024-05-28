import { THeroProps } from "@/assets/types/layouts/THero";
import { structure, news, achiev, contact, home, event } from "@/assets/images";

export const heroData: { [key: string]: THeroProps } = {
  home: {
    heroContent: "Selamat Datang di Laman Resmi PSM UNHAS",
    image: home,
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
    heroContent: "Acara",
    image: event,
  },
  achievements: {
    heroContent: "Prestasi",
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
