export enum AvailabilityType {
  available = "Dostępne",
  unavailable = "Zajęte",
}

export interface Day {
  id: string;
  tabIndex?: number;
  dayName: string;
  date: string;
  rooms: Room[];
}

export interface Room {
  id: string;
  roomName: string;
  desks: Desk[];
}

export interface Desk {
  id: string;
  deskName: string;
  user?: string;
  available?: string;
}

export interface Parking {
  location: string;
  id: string;
}
