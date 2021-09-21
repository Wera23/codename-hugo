export interface ReservationValues {
  UserId: string | undefined;
  RoomId: string | undefined;
  DeskId: string | undefined;
}

export interface ReservationFormData {
  name: string | undefined;
  room: string | undefined;
  desk: string | undefined;
}

function reservationForm(values: ReservationValues): ReservationFormData {
  const dataReservaion = {
    name: values.UserId,
    room: values.RoomId,
    desk: values.DeskId,
  };
  return dataReservaion;
}

async function sendReservation(dataReservation: ReservationFormData) {
  console.log("Zarezerwowano", dataReservation);
}

export { reservationForm, sendReservation };
