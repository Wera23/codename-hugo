import React, { useState, createContext, useContext } from "react";

interface ReservationContextProps {
  room: string | undefined;
  desk: string | undefined;
  day: Date;
  user: string | undefined;
  tabDay: Date;
}

interface ReservationActionsContextProps {
  setRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDesk: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDay: React.Dispatch<React.SetStateAction<Date>>;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTabDay: React.Dispatch<React.SetStateAction<Date>>;
}

const ReservationContext = createContext<ReservationContextProps>(
  {} as ReservationContextProps
);
const ReservationActionsContext = createContext<ReservationActionsContextProps>(
  {} as ReservationActionsContextProps
);

export const useReservationContext = () => useContext(ReservationContext);
export const useReservationActionsContext = () =>
  useContext(ReservationActionsContext);

export const ReservationContextProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState<string>();
  const [desk, setDesk] = useState<string>();
  const [day, setDay] = useState<Date>(new Date());
  const [user, setUser] = useState<string>();
  const [tabDay, setTabDay] = useState<Date>(new Date());
 
  return (
    <ReservationContext.Provider value={{ room, desk, day, user, tabDay }}>
      <ReservationActionsContext.Provider
        value={{ setRoom, setDesk, setDay, setUser, setTabDay }}
      >
        {children}
      </ReservationActionsContext.Provider>
    </ReservationContext.Provider>
  );
};
