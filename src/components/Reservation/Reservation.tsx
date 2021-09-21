import React, { useEffect, useState } from "react";
import moment from "moment";
import SimpleReactCalendar from "simple-react-calendar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { produce } from "immer"

import { Button, InputSelect, Label } from "../common";

import "./Reservation.scss";
import { DailyUsersProps } from "../../API/mocks/usersPerDay";
import { User, LocationType } from "../../API/mocks/users";
import { SelectOptions, roomsData } from "./Options";
import { AvailabilityType, Day, Desk, Room } from "../../API/types";
import {
  useDataActionsContext,
  useDataContext,
} from "../../Context/DataContext";
import {
  useReservationActionsContext,
  useReservationContext,
} from "../../Context/ReservationContext";

export interface ReservationProps {
  closeModal: () => void;
}

const Reservation: React.FC<ReservationProps> = ({ closeModal }) => {
  const ReservationSchema = Yup.object().shape({
    userId: Yup.string().required("Required"),
    roomId: Yup.string().required("Required"),
    deskId: Yup.string().required("Required"),
  });

  const { setRoom, setDesk, setDay, setUser } = useReservationActionsContext();
  const {
    room,
    desk,
    user: contextUser,
    day: contextDay,
  } = useReservationContext();
  const { data, users, selectUsers } = useDataContext();
  const { setData, setUsers } = useDataActionsContext();

  const [roomValue, setRoomValue] = useState<SelectOptions>();
  const [deskValue, setDeskValue] = useState<SelectOptions>();
  const [userValue, setUserValue] = useState<SelectOptions>();

  const roomsOptions: SelectOptions[] = roomsData.map((room: Room) => ({
    label: room.roomName,
    value: room.id,
  }));

  const usersOptions: SelectOptions[] = selectUsers.map((user: User) => ({
    label: user.name,
    value: user.id,
  }));

  const [desks, setDesks] = useState<SelectOptions[]>([]);

  useEffect(() => {
    return () => {
      setRoomValue(undefined);
      setDeskValue(undefined);
      setUserValue(undefined);
      setRoom(undefined);
      setDesk(undefined);
      setUser(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDeskValue(desks.find((option: SelectOptions) => option.value === desk));
    formik.setFieldValue("deskId", desk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desk, desks]);

  useEffect(() => {
    const roomData: Room | undefined = roomsData.find(
      (data: Room) => data.id === room
    );

    setRoomValue(
      roomsOptions.find((option: SelectOptions) => option.value === room)
    );
    setUserValue(
      usersOptions.find(
        (option: SelectOptions) => option.value === contextUser
      )
    );
    setDesks(
      roomData?.desks.map((desk: Desk) => ({
        label: desk.deskName,
        value: desk.id,
      })) ?? []
    );
    formik.setFieldValue("roomId", room);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  const handleReservation = () => {
    const tempDay: Day[] = data.map((day: Day) =>
      moment(day.date).isSame(contextDay, "day")
        ? {
            ...day,
            rooms: day.rooms.map((room: Room) => ({
              ...room,
              desks: room.desks.map((deskData: Desk) =>
                deskData.id === desk
                  ? {
                      ...deskData,
                      user: selectUsers.find(
                        (user: User) => user.id === contextUser
                      )?.name,
                      available: AvailabilityType.unavailable,
                    }
                  : { ...deskData }
              ),
            })),
          }
        : {
            ...day,
          }
    );

    const updatedDay = produce((data, draft: Day[]) => {
      const index = draft.findIndex((day: Day) => moment(day.date).isSame(contextDay, "day"));
      if (index !== -1) {draft[index].rooms.map((room: Room) => room.desks) }
    })

    const tempUsers: DailyUsersProps[] = users.map((dailyUser: DailyUsersProps) =>
      moment(dailyUser.date).isSame(contextDay, "day")
        ? {
            ...dailyUser,
            users: dailyUser.users.map((user: User) =>
              user.id === contextUser
                ? {
                    ...user,
                    location: LocationType.office,
                  }
                : { ...user }
            ),
          }
        : {
            ...dailyUser,
          }
    );
    setData(tempDay);
    setUsers(tempUsers);
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      userId: userValue,
      roomId: roomValue,
      deskId: deskValue,
    },
    validationSchema: ReservationSchema,

    onSubmit: () => {
      handleReservation();
    },
  });

  const handleFormikUserChange = (option: SelectOptions) => {
    setUser(option.value);
    formik.setFieldValue("userId", option.value);
  };

  const handleFormikRoomChange = (option: SelectOptions) => {
    setRoom(option.value);
  };

  const handleFormikDeskChange = (option: SelectOptions) => {
    setDesk(option.value);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <i
        onClick={closeModal}
        className="bi bi-x reservation-close d-flex justify-content-end"
      ></i>

      <form onSubmit={formik.handleSubmit}>
        <InputSelect
          inputId="userId"
          label="Podaj swoje imię"
          options={usersOptions}
          placeholder="Podaj swoje imię"
          onChange={handleFormikUserChange}
          value={userValue}
        />

        {formik.errors.userId && (
          <div className="reservation-required">* Proszę podać swoje imię</div>
        )}

        <InputSelect
          inputId="roomId"
          label="Wybierz pokój, który chcesz zarezerwować"
          options={roomsOptions}
          placeholder="Wybierz pokój"
          onChange={handleFormikRoomChange}
          value={roomValue}
        />

        {formik.errors.roomId && (
          <div className="reservation-required">* Proszę wybrać pokój</div>
        )}

        <InputSelect
          inputId="deskId"
          label="Wybierz biurko, które chcesz zarezerwować"
          options={desks}
          placeholder="Wybierz biurko"
          value={deskValue}
          onChange={handleFormikDeskChange}
        />

        {formik.errors.deskId && (
          <div className="reservation-required">* Proszę wybrać biurko</div>
        )}

        <Label htmlFor="" label="Wybierz datę"></Label>

        <SimpleReactCalendar
          onSelect={(day: Date) => {
            setDay(day);
          }}
          onChange={(day: Date) => {
            setDay(day);
          }}
          headerPrevArrow={
            <i className="calendar-header_button bi bi-arrow-left-short"></i>
          }
          headerNextArrow={
            <i className="calendar-header_button bi bi-arrow-right-short"></i>
          }
          activeMonth={new Date()}
          selected={contextDay}
        />

        <div className="d-flex justify-content-center">
          <Button
            className="btn btn-violet"
            type="submit"
            onClick={() => handleReservation}
          >
            Zarezerwuj biurko
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
