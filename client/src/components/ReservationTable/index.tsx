import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "./reservation-table.css";
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
  });
  // reservationData isn't being used now that the ReservationUpdateForm is
  // commented out; this line is here to avoid hard errors from
  // typescript appearing
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reservationData, setReservationData] = useState({
    title: "",
    provider: "",
    startDate: "",
  });
  const { data } = useQuery(QUERY_ALL_RESERVATIONS);
  const reservations = data?.getAllReservations || [];

  const [deleteReservation] = useMutation(DELETE_SINGLE_RESERVATION, {
    refetchQueries: () => [{ query: QUERY_ALL_RESERVATIONS }],
  });
  function deleteHandler(reservationId: string) {
    console.log("You called the deleteHandler to delete Id", reservationId);
    deleteReservation({ variables: { id: reservationId } });
  }

  // Group reservations by Trip Title
  const groupedReservations = reservations.reduce(
    (groups: ReservationReducerGroup, reservation: Reservation) => {
      // console.log("GROUPS:", groups);
      const title = reservation.title;
      if (!groups[title]) {
        groups[title] = [];
      }
      groups[title].push(reservation);
      return groups;
    },
    {}
  );

  // Calculate total budget for each Trip Title
  const totalBudgets = Object.keys(groupedReservations).reduce(
    (totals: ReservationTotalsReducerTotal, title: string) => {
      console.log("TOTALS:", totals);
      const total = groupedReservations[title].reduce(
        (sum: number, reservation: Reservation) => {
          return sum + (reservation.price || 0);
        },
        0
      );
      totals[title] = total;
      return totals;
    },
    {}
  );

  return (
    <div className="buddyParent">
      {Object.keys(groupedReservations).map((title) => (
        <div key={title} className="reservation-group">
          <div className="total-budget">
            <strong>
              Estimated Cost for "{title}": ${totalBudgets[title]}
            </strong>
          </div>
          <h2 className="trip-title">{title}</h2>
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
                {/* <th>Cur</th> */}
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {groupedReservations[title].map((reservation: Reservation) => (
                <tr
                  key={reservation.id}
                  className={
                    reservation.category + " " + reservation.transportationType
                  }
                >
                  <td>
                    <i className="fa" aria-hidden="true"></i>
                  </td>
                  <td>{reservation.description}</td>
                  <td>{reservation.country}</td>
                  <td>{reservation.town}</td>
                  <td>{reservation.status}</td>
                  <td>{reservation.provider}</td>
                  <td>
                    {new Date(reservation.startDate).toLocaleDateString()}
                  </td>
                  <td>{new Date(reservation.endDate).toLocaleDateString()}</td>
                  <td>{reservation.price}</td>
                  {/* <td>{reservation.priceCurrency}</td> */}
                  <td>
                    <i
                      className="fa fa-pencil"
                      aria-hidden="true"
                      onClick={() =>
                        setReservationData({
                          title: reservation.title,
                          provider: reservation.provider,
                          startDate: reservation.startDate.toString(),
                        })
                      }
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => deleteHandler(reservation.id as string)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* It looks like this is unfinished, commenting out for the refactor */}
          {/* {reservationData.id && (
            <ReservationUpdateForm
              reservation={reservationData}
              setReservationData={setReservationData}
            />
          )} */}
        </div>
      ))}
    </div>
  );
}
