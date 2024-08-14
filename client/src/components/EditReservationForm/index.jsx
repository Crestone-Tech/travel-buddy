import FormControl from "@mui/material/FormControl";
import {
  Box,
  MenuItem,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  InputAdornment,
} from "@mui/material";

import { useState } from "react";
import dayjs from "dayjs";
import "./edit-reservation.css";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// This is preserved here as a reminder of how to implement a Select in which
// the displayed value differs from the value the system deals with
// const statusesAsObjects = [
//   {
//     value: "Booked",
//     label: "Booked",
//   },
//   {
//     value: "Idea",
//     label: "Idea",
//   },
// ];

const statuses = [
  "Idea",
  "Agreed",
  "Verbal Reservation",
  "Online Reservation",
  "Paid",
  "Canceled",
  "Arrange Onsite",
];

function EditReservationForm({
  reservation,
  setReservationData,
  reservationData,
  handleUpdateReservation,
}) {
  const setTitle = (event) => {
    event.preventDefault();
    setReservationData({ ...reservation, title: event.target.value });
    console.log("reservationData", reservationData);
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

  const handleChangeEndDate = (newValue) =>
    setReservationData({
      ...reservation,
      endDate: newValue.toDate().toISOString(),
    });

  return (
    <>
      <Box
        height={400}
        width={530}
        mx={40}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <form onSubmit={handleUpdateReservation}>
          <div>
            {/* TITLE */}
            <TextField
              id="res-input-title"
              required
              fullWidth
              label="Title"
              value={reservation.title}
              onChange={(event) => {
                setTitle(event);
              }}
              helperText="Briefly describe your plan"
            />
          </div>
          <div className="dialog-row">
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
            {/* STATUS */}
            <TextField
              id="outlined-select-status"
              select
              label="status"
              defaultValue={reservation.status}
              helperText="How planned is this plan?"
            >
              {statuses.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="dialog-row">
            {/* Start Date */}
            <DatePicker
              label="Date (Start)"
              required
              value={dayjs(reservation.startDate)}
              name="startDate"
              onChange={handleChangeStartDate}
              helperText="In th"
            />
            {/* End Date */}
            <DatePicker
              label="Date (End)"
              required
              value={dayjs(reservation.endDate)}
              name="endDate"
              onChange={handleChangeEndDate}
              helperText="In th"
            />
          </div>
          <div className="dialog-row">
            {/* PRICE */}
            <TextField
              id="res-input-price"
              label="Price"
              value={reservation.price}
              onChange={(event) => {
                setPrice(event);
              }}
              helperText="Price (real or approximate)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </div>
          <input type="submit" name="Submit" />
        </form>
      </Box>
    </>
  );
}

export default EditReservationForm;
