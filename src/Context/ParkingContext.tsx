import React, { useState, createContext, useContext } from "react";

interface ParkingReservationContextProps {
  space: string | undefined;
  user: string | undefined;
}

interface ParkingReservationActionsContextProps {
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSpace: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ParkingReservationContext = createContext<ParkingReservationContextProps>(
  {} as ParkingReservationContextProps
);
const ParkingReservationActionsContext = createContext<ParkingReservationActionsContextProps>(
  {} as ParkingReservationActionsContextProps
);

export const useParkingReservationContext = () =>
  useContext(ParkingReservationContext);
export const useParkingReservationActionsContext = () =>
  useContext(ParkingReservationActionsContext);

export const ParkingReservationContextProvider: React.FC = ({ children }) => {
  const [space, setSpace] = useState<string>();
  const [user, setUser] = useState<string>();

  return (
    <ParkingReservationContext.Provider value={{ user, space }}>
      <ParkingReservationActionsContext.Provider
        value={{ setUser, setSpace }}
      >
        {children}
      </ParkingReservationActionsContext.Provider>
    </ParkingReservationContext.Provider>
  );
};
