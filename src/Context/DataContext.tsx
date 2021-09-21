import React, { useState, createContext, useContext, useEffect } from "react";
import { User } from "src/API/mocks/users";
import { getAllUsers, getAllDays, getAllDailyUsers } from "../API/fakeAPI";
import { DailyUsersProps } from "../API/mocks/usersPerDay";
import { Day } from "../API/types";

interface DataContextProps {
  data: Day[];
  users: DailyUsersProps[];
  selectUsers: User[];
}

interface DataActionsContextProps {
  setData: React.Dispatch<React.SetStateAction<Day[]>>;
  setUsers: React.Dispatch<React.SetStateAction<DailyUsersProps[]>>;
  setSelectUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);
const DataActionsContext = createContext<DataActionsContextProps>(
  {} as DataActionsContextProps
);

export const useDataContext = () => useContext(DataContext);
export const useDataActionsContext = () => useContext(DataActionsContext);

export const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Day[]>([]);
  const [users, setUsers] = useState<DailyUsersProps[]>([]);
  const [selectUsers, setSelectUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllDays().then(
      (days) => {
        setData(days);
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    getAllDailyUsers().then(
      (users) => {
        setUsers(users);
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    getAllUsers().then(
      (users) => {
        setSelectUsers(users);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <DataContext.Provider value={{ data, users, selectUsers }}>
      <DataActionsContext.Provider value={{ setData, setUsers, setSelectUsers }}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};
