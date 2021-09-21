import React from "react";
import classnames from "classnames";

import { ModalReservation, Point } from "..";

import styles from "./Room.module.scss";
import { Desk, Room } from "../../API/types";
import {
  useReservationActionsContext,
  useReservationContext,
} from "../../Context/ReservationContext";

export interface RoomProps {
  room: Room;
}

const CompanyRoom: React.FC<RoomProps> = ({ room }) => {
  const { day } = useReservationContext();
  const { setDesk, setRoom, setDay } = useReservationActionsContext();

  const handleSetChosenPlace = (room: string, desk: string, day: Date) => {
    setDesk(desk);
    setRoom(room);
    setDay(day);
  };

  return (
    <>
      <div
        className={classnames(
          "gray-shadow position-relative d-flex flex-column justify-content-around align-items-center py-5",
          styles.room
        )}
      >
        {room?.desks.map((desk: Desk) => (
          <div
            key={desk.id}
            className={classnames(
              "d-flex w-50 justify-content-md-center justify-content-lg-between flex-lg-row flex-sm-column flex-md-column align-items-center"
            )}
          >
            <i
              className={classnames(styles.deskIcon, "bi bi-laptop text-white")}
            ></i>
            <p className={classnames(styles.deskName, "text-white mb-0")}>
              {desk.deskName}
            </p>

            {desk.user && desk.user?.length > 0 ? (
              <Point className={styles.iconUnavailable}>
                <div className={classnames("text-center", styles.tooltip)}>
                  <i className="bi bi-person-check"></i>
                  <span className="ml-2 font-weight-normal">{desk.user}</span>
                </div>
              </Point>
            ) : (
              <Point className={styles.iconAvailable}>
                <ModalReservation
                  handleModalReservation={() =>
                    handleSetChosenPlace(room.id, desk.id, day)
                  }
                ></ModalReservation>
              </Point>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyRoom;
