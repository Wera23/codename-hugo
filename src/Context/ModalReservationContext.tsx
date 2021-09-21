import React, { useState, createContext, useContext } from "react";

interface ModalContextProps {
  modalReservation: boolean | any;
  tooltip: boolean | undefined;
}

interface ModalActionsContextProps {
  setModalReservation: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  setTooltip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
const ModalActionsContext = createContext<ModalActionsContextProps>(
  {} as ModalActionsContextProps
);

export const useModaleContext = () => useContext(ModalContext);
export const useModalActionsContext = () => useContext(ModalActionsContext);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalReservation, setModalReservation] = useState<boolean>();
  const [tooltip, setTooltip] = useState<boolean>();

  return (
    <ModalContext.Provider value={{ modalReservation, tooltip }}>
      <ModalActionsContext.Provider value={{ setModalReservation, setTooltip }}>
        {children}
      </ModalActionsContext.Provider>
    </ModalContext.Provider>
  );
};
