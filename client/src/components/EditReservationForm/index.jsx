import FormControl from "@mui/material/FormControl";
import { InputLabel, Input, FormHelperText, TextField } from "@mui/material";

import { useState } from "react";
import dayjs from "dayjs";
import "./edit-reservation.css";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EditReservationForm({ reservation, setReservationData }) {
  const setTitle = (event) => {
    event.preventDefault();
    setReservationData({ ...reservation, title: event.target.value });
  };

  const setProvider = (event) => {
    event.preventDefault();
    setReservationData({ ...reservation, provider: event.target.value });
  };
  const setPrice = (event) => {
    event.preventDefault();
    setReservationData({ ...reservation, price: event.target.value });
  };
  const handleChangeStartDate = (newValue) =>
    setReservationData({
      ...reservation,
      startDate: newValue.toDate().toISOString(),
    });

  return (
    <>
      {/* TITLE */}
      <div className="update-res-container">
        <TextField
          id="res-input-title"
          label="Title"
          value={reservation.title}
          onChange={(event) => {
            setTitle(event);
          }}
          helperText="Briefly describe your plan"
        />
        {/* PROVIDER */}
        <TextField
          id="res-input-provider"
          label="Provider"
          value={reservation.provider}
          onChange={(event) => {
            setProvider(event);
          }}
          helperText="Airline, Hotel, etc (if applicable)"
        />
        {/* PRICE */}
        <TextField
          id="res-input-price"
          label="Price"
          value={reservation.price}
          onChange={(event) => {
            setPrice(event);
          }}
          helperText="Price (real or approximate)"
        />

        <form>
          <input type="text" name="title" value={reservation.title} />
          <DatePicker
            value={dayjs(reservation.startDate)}
            name="startDate"
            onChange={handleChangeStartDate}
          />
        </form>
      </div>
    </>
  );
}

export default EditReservationForm;
