import { user } from "@/assets/mockImages";
import {
  ketua,
  wakil,
  bendahara,
  sekretaris,
  conductor,
  arranger,
} from "@/assets/mockImages";
import { TCommite } from "@/assets/types/Components/TCommite";

export const organizationCommitteeMock: TCommite[] = [
  {
    id: 1,
    name: "Ikhwansyah Hanifa",
    position: "Ketua Umum",
    image: ketua,
  },
  {
    id: 2,
    name: "Andi Fajar",
    position: "Wakil Ketua",
    image: wakil,
  },
  {
    id: 3,
    name: "Rara Aqilah Salsabila",
    position: "Bendahara",
    image: bendahara,
  },
  {
    id: 4,
    name: "Farhan Arya Dira",
    position: "Sekretaris",
    image: sekretaris,
  },
  {
    id: 5,
    name: "Anshari Sanusi",
    position: "Manager & Konduktor",
    image: conductor,
  },
  {
    id: 6,
    name: "Hajrul Farawansya, S.Si.",
    position: "Pianis & Arranger",
    image: arranger,
  },
  // {
  //   id: 7,
  //   name: "Siti Rahmawati",
  //   position: "Kearsipan",
  //   image: user,
  // },
  // {
  //   id: 8,
  //   name: "Ahmad Fauzi",
  //   position: "Sumber Daya",
  //   image: user,
  // },
];
