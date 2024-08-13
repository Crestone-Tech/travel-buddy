import React from "react";
import { useQuery } from "@apollo/client";
import "./reservation-table.css";
import "../../assets/js/jquery-3.7.1.js";
import "../../assets/jquery-ui-1.14.0/jquery-ui.js";
import "../../assets/css/bootstrap.css";
import "../../assets/js/bootstrap.js";
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

  return (
    <div>
      <h2>Reservations</h2>
      <div className="text-center mb-5">
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addTaskModal"
          id="add-task-btn"
        >
          Add Task
        </button>
      </div>
      <div className="modal" tabIndex="-1" id="addTaskModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Task</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container">
              <div className="row">
                <div className="col-5">Task title</div>
                <div className="col-5">Due Date</div>
                <div className="col-5">
                  <input
                    type="text"
                    name="taskTitleInput"
                    id="taskTitleInput"
                  />
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    name="taskDueDateInput"
                    id="taskDueDateInput"
                  />
                </div>
                <div className="col-10">Description</div>
                <div className="col-10">
                  <textarea
                    name="taskDescriptionInput"
                    cols="44"
                    id="taskDescriptionInput"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" id="saveTaskBtn">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
