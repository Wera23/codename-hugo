import { Days } from "./mocks/day";
import { User, users } from "./mocks/users";
import { DailyUsers, DailyUsersProps } from "./mocks/usersPerDay";
import { Day } from "./types";

const getAllDays = () => fakeDataPromise<Day[]>(Days);
const getAllDailyUsers = () => fakeDataPromise<DailyUsersProps[]>(DailyUsers);
const getAllUsers = () => fakeDataPromise<User[]>(users);

function fakeDataPromise<D>(data: D): Promise<D> {
  const dataPromise = new Promise<D>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 100) === 0;
      return error ? reject("Error") : resolve(data);
    }, 500);
  });

  return dataPromise;
}

export { getAllDays, getAllDailyUsers, getAllUsers };
