import moment from "moment";
import { User, LocationType, users } from "./users";

export interface DailyUsersProps {
  date: string;
  users: User[];
}

export const DailyUsers: DailyUsersProps[] = [
  {
    date: moment().format(),
    users: users.map((user: User) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(1, "days").format(),
    users: users.map((user: User) => ({
      ...user,
      location: LocationType.home
    })),
  },
  {
    date: moment().add(2, "days").format(),
    users: users.map((user: User) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(3, "days").format(),
    users: users.map((user: User) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(4, "days").format(),
    users: users.map((user: User) => ({
      ...user,
      location: LocationType.home
    }))
  },
];
