import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import "./reservation-table.css";
import { useEffect } from "react";
import AForm from "../AForm";
import EditReservationForm from "../EditReservationForm";
import {
  QUERY_ALL_RESERVATIONS,
  DELETE_SINGLE_RESERVATION,
} from "../../utils/queries";

export default function ReservationTable() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "src/components/ReservationTable/reservation-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [reservationData, setReservationData] = useState({
    title: "",
    provider: "",
    startDate: "",
  });
  const { loading, data } = useQuery(QUERY_ALL_RESERVATIONS);
  const [deleteReservation] = useMutation(DELETE_SINGLE_RESERVATION);
  const reservations = data?.getAllReservations || [];
  // console.log("reservations", reservations);

  function handleUpdateReservation() {
    console.log("handleUpdateReservation", reservationData);
  }

  function deleteHandler(reservationId) {
    console.log("You called the deleteHandler to delete Id", reservationId);
    deleteReservation({ variables: { id: reservationId } });
  }

  return (
    <div>
      <h2>Reservations</h2>
      <table>
        <thead className="reservationTableHeader">
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Booked?</th>
            <th>Provider</th>
            <th>Start</th>
            <th>End</th>
            <th>$</th>
            <th>Cur</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* plane */}
          {reservations.map((reservation) => (
            <tr
              key={reservation.id}
              className={
                reservation.category + " " + reservation.transportationType
              }
            >
              <td>
                <i className="fa" aria-hidden="true"></i>
              </td>
              <td>{reservation.title}</td>
              <td>{reservation.status}</td>
              <td>{reservation.provider}</td>
              <td>{reservation.startDate}</td>
              <td>{reservation.endDate}</td>
              <td>{reservation.price}</td>
              <td>{reservation.priceCurrency}</td>
              <td>
                <i
                  className="fa fa-pencil"
                  aria-hidden="true"
                  onClick={() => setReservationData(reservation)}
                ></i>
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => deleteHandler(reservation.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {reservationData.id && (
        <AForm
          reservation={reservationData}
          setReservationData={setReservationData}
        />
      )}
    </div>
  );
}
