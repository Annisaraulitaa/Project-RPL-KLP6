export type TNavLinksChildren = {
  id: string;
  path: string;
};

export type TNavLinksItem = {
  id: string;
  path: string | string[];
  isOpen: boolean | null;
  children: TNavLinksChildren[] | [];
};

export type TNavLinks = TNavLinksItem[];
