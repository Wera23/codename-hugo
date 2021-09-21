import React from "react";
import classnames from "classnames";

import styles from "./ParkingSpaces.module.scss";
import { ParkingSpace, parkingSpaces } from "src/API/mocks/parking";
import { CarAnimation } from "../Animations";
import { Button } from "../common";
import { useParkingReservationContext } from "src/Context/ParkingContext";

const ParkingSpaces: React.FC = () => {
  const { space } = useParkingReservationContext();


  function renderTakenSpace(): any {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h4>Zajęte</h4>
        <CarAnimation />
      </div>
    );
  }

  function renderFreeSpace(): any {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h4>Wolne</h4>
        <Button className="btn btn-violet">Zarezerwuj</Button>
      </div>
    );
  }

  return (
    <div
      className={classnames(
        "d-flex justify-content-center align-items-center w-100 row",
        styles.parkingSpaces
      )}
    >
      {space}

      {parkingSpaces.map((parkingSpace: ParkingSpace, key) => (
        <div
          key={parkingSpace.id}
          className={classnames(
            "d-flex justify-content-center align-items-center flex-column col-sm-6 col-md-3 col-lg-2 ",
            styles.parkingSpace
          )}
        >
          <p>{parkingSpace.location}</p>

          {parkingSpace.user.length <= 0
            ? renderFreeSpace()
            : renderTakenSpace()}
        </div>
      ))}
    </div>
  );
};

export default ParkingSpaces;
