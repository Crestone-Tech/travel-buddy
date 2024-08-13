import React from "react";
import { useQuery } from "@apollo/client";
import "./reservation-table.css";
import { useEffect } from "react";
import { QUERY_ALL_RESERVATIONS } from "../../utils/queries";

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

  const { loading, data } = useQuery(QUERY_ALL_RESERVATIONS);
  const reservations = data?.getAllReservations || [];
  console.log("reservations", reservations);

  const totalBudget = reservations.reduce((sum, reservation) => {
    return sum + (reservation.price || 0);
  }, 0);

  return (
    <div>
      <div className="total-budget">
        <strong>Total Budget: ${totalBudget}</strong>
      </div>
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
              className={reservation.category + " " + reservation.transportationType}
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
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </td>
              <td>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
