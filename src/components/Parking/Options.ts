import { Parking } from "src/API/types";

export interface SelectOptions {
  value: string;
  label: string;
}

export const parkingData: Parking[] = [
  {
    id: "1",
    location: "Miejsce I",
  },
  {
    id: "2",
    location: "Miejsce II",
  },
  {
    id: "3",
    location: "Miejsce III",
  },
  {
    id: "4",
    location: "Miejsce IV",
  },
  {
    id: "5",
    location: "Miejsce V",
  },
];
