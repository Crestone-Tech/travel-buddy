import { useState } from "react";
import dayjs from "dayjs";
// import DatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EditReservationForm({ reservation, setReservationData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservation,
      [name]: value,
    });
  };

  const handleChangeStartDate = (newValue) =>
    setReservationData({
      ...reservation,
      startDate: newValue.toDate().toISOString(),
    });

  console.log("reservation", reservation);

  return (
    <>
      <div>EditReservationForm</div>
      <form>
        <input
          type="text"
          name="title"
          value={reservation.title}
          onChange={handleChange}
        />
        <DatePicker
          value={dayjs(reservation.startDate)}
          name="startDate"
          onChange={handleChangeStartDate}
        />
      </form>
    </>
  );
}

export default EditReservationForm;
