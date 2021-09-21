import { Room } from "../../API/types";

export interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectDay {
  value: string;
}

export const roomsData: Room[] = [
  {
    id: "sea",
    roomName: "Pokój z widokiem na morze",
    desks: [
      {
        id: "sea-window",
        deskName: "S: Biurko przy oknie",
      },
      {
        id: "sea-center",
        deskName: "S: Biurko środkowe",
      },
      {
        id: "sea-door",
        deskName: "S: Biurko przy drzwiach",
      },
      {
        id: "sea-corner",
        deskName: "S: Biurko w rogu",
      },
    ],
  },
  {
    id: "penguins",
    roomName: "Pokój z zasłoną w pingwiny",
    desks: [
      {
        id: "penguins-window",
        deskName: "P: Biurko przy oknie",
      },
      {
        id: "penguins-center",
        deskName: "P: Biurko środkowe",
      },
      {
        id: "penguins-door",
        deskName: "P: Biurko przy drzwiach",
      },
      {
        id: "penguins-corner",
        deskName: "P: Biurko w rogu",
      },
    ],
  },
];
