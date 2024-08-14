import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import "./reservation-table.css";
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

  // Group reservations by Trip Title
  const groupedReservations = reservations.reduce((groups, reservation) => {
    const title = reservation.title;
    if (!groups[title]) {
      groups[title] = [];
    }
    groups[title].push(reservation);
    return groups;
  }, {});

  // Calculate total budget for each Trip Title
  const totalBudgets = Object.keys(groupedReservations).reduce((totals, title) => {
    const total = groupedReservations[title].reduce((sum, reservation) => {
      return sum + (reservation.price || 0);
    }, 0);
    totals[title] = total;
    return totals;
  }, {});

  return (
    <div>
      {Object.keys(groupedReservations).map((title) => (
        <div key={title} className="reservation-group">
          <div className="total-budget">
            <strong>Total Budget for {title}: ${totalBudgets[title]}</strong>
          </div>
          <h2>{title}</h2>
          <table>
            <thead className="reservationTableHeader">
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Country</th>
                <th>City/Town</th>
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
              {groupedReservations[title].map((reservation) => (
                <tr
                  key={reservation.id}
                  className={reservation.category + " " + reservation.transportationType}
                >
                  <td>
                    <i className="fa" aria-hidden="true"></i>
                  </td>
                  <td>{reservation.description}</td>
                  <td>{reservation.country}</td>
                  <td>{reservation.town}</td>
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
      ))}
    </div>
  );
}