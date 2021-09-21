import React, { useEffect, useState } from "react";
import { Parking } from "src/API/types";
import {
  useParkingReservationActionsContext,
  useParkingReservationContext,
} from "src/Context/ParkingContext";
import InputSelect from "../common/Inputs/InputSelect";
import { SelectOptions } from "../Reservation/Options";
import { parkingData } from "./Options";

import ParkingSpaces from "./ParkingSpaces";

const ParkingReservation: React.FC = () => {
  const { space } = useParkingReservationContext();
  const { setSpace } = useParkingReservationActionsContext();
  const [spaceValue, setSpaceValue] = useState<SelectOptions>();

  const spacesOptions: SelectOptions[] = parkingData.map((space: Parking) => ({
    label: space.location,
    value: space.id,
  }));

  useEffect(() => {
    parkingData?.map((parkingElement: Parking) => ({
      label: parkingElement.location,
      value: parkingElement.id,
    }));
  });

  const handleFormikSpaceChange = (option: SelectOptions) => {
    setSpace(option.value);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center mb-5 py-5 bg-silver">
      <div>
        <InputSelect
          inputId="spaceId"
          label="Wybierz miejsce"
          options={spacesOptions}
          placeholder="Wybierz miejscd"
          onChange={handleFormikSpaceChange}
          value={spaceValue}
        />
      </div>
      <ParkingSpaces />
    </div>
  );
};

export default ParkingReservation;
