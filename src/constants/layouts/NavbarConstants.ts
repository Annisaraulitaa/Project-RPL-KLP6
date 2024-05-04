import { TNavLinks } from "@/assets/types/layouts/TNavLinks";

export const navLinks: TNavLinks = [
  {
    id: "home",
    path: "/",
    isOpen: null,
    children: [],
  },
  {
    id: "tentang kami",
    path: "/about",
    isOpen: false,
    children: [
      {
        id: "struktur organisasi",
        path: "/about/structure",
      },
      {
        id: "berita",
        path: "/about/news",
      },
      {
        id: "acara",
        path: "/about/events",
      },
      {
        id: "prestasi",
        path: "/about/achievements",
      },
      {
        id: "galeri",
        path: "/about/gallery",
      },
      {
        id: "penerimaan anggota baru",
        path: "/about/new-recruits",
      },
    ],
  },
  {
    id: "Kontak",
    path: "/contact",
    isOpen: false,
    children: [],
  },
];
