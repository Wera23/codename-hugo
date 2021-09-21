export interface User {
  id: string;
  name: string;
  location?: string;
}

export enum LocationType {
  home = "Dom",
  office = "Biuro",
}

export const users: User[] = [
  {
    id: "1",
    name: "Oktawiusz August",
  },
  {
    id: "2",
    name: "Tyberiusz",
  },
  {
    id: "3",
    name: "Kaligula",
  },
  {
    id: "4",
    name: "Neron",
  },
  {
    id: "5",
    name: "Galba",
  },
  {
    id: "6",
    name: "Oton",
  },
  {
    id: "7",
    name: "Witeliusz",
  },
  {
    id: "8",
    name: "Wespazjan",
  },
  {
    id: "9",
    name: "Tytus",
  },
  {
    id: "10",
    name: "Domicjan",
  },
];
