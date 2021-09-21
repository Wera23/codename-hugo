import { Day } from "../types";
import moment from "moment";

//Opis: struktury. Days zawierają 10 dni roboczych. Do każdego dnia roboczego przypisane są pokoje (aktualnie 2), 
//które zawierają biurka (aktualnie po 4). Każde biurko może być zarezerwowane przez usera, po wypełnieniu formularza rezerwacji. 

export const Days: Day[] = [
  {
    id: "0",
    tabIndex: 0,
    dayName: moment().format("dddd DD.MM"),
    date: moment().format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "1",
    tabIndex: 1,
    dayName: moment().add(1, "days").format("dddd DD.MM"),
    date: moment().add(1, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    tabIndex: 2,
    dayName: moment().add(2, "days").format("dddd DD.MM"),
    date: moment().add(2, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "3",
    tabIndex: 3,
    dayName: moment().add(3, "days").format("dddd DD.MM"),
    date: moment().add(3, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "4",
    tabIndex: 4,
    dayName: moment().add(4, "days").format("dddd DD.MM"),
    date: moment().add(4, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "5",
    tabIndex: 5,
    dayName: moment().add(5, "days").format("dddd DD.MM"),
    date: moment().add(5, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "6",
    tabIndex: 6,
    dayName: moment().add(6, "days").format("dddd DD.MM"),
    date: moment().add(6, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "7",
    tabIndex: 7,
    dayName: moment().add(7, "days").format("dddd DD.MM"),
    date: moment().add(7, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "8",
    tabIndex: 8,
    dayName: moment().add(8, "days").format("dddd DD.MM"),
    date: moment().add(8, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "9",
    tabIndex: 9,
    dayName: moment().add(9, "days").format("dddd DD.MM"),
    date: moment().add(9, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
      {
        id: "penguins",
        roomName: "Pokój z zasłoną w pingwiny",
        desks: [
          {
            id: "penguins-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },
];
