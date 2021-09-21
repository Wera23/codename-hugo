import React from "react";
import moment from "moment";
import { ModalProvider } from "react-modal-hook";

import styles from "./App.module.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import {
  Calender,
  Header,
  ModalReservation,
  UserAnimation,
} from "./components";
import { DataContextProvider } from "./Context/DataContext";
import ParkingReservation from "./components/Parking/Parking";
import { Theme, ThemeContext } from "./Context/ThemeContex";
import ToggleTheme from "./components/ToggleTheme/ToggleButton";

moment.locale("pl");

const App: React.FC = () => {
  const [theme, setTheme] = React.useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ReservationContextProvider>
        <DataContextProvider>
          <ModalProvider>            
              <Header />
              <ToggleTheme/>
              <UserAnimation />
              <ModalReservation />
              <Calender />
              <ParkingReservation />
          </ModalProvider>
        </DataContextProvider>
      </ReservationContextProvider>
    </ThemeContext.Provider>
  );
};

export default App;
