import React from "react";
import "./plan.css";
import { useEffect } from "react";

export default function Plan() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "src/pages/Plan/plan.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <tr className="transportation airline">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>Fly: Guadalajara - Cancun</td>
            <td>Paid</td>
            <td>
              <a href="https://www.volaris.com/">Volaris</a>
            </td>
            <td>4/1/24</td>
            <td>-</td>
            <td>550</td>
            <td>USD</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* taxi */}
          <tr className="transportation ground-transportation taxi">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>Taxi: Cancun - Play del Carmen</td>
            <td>N/A</td>
            <td>Onsite</td>
            <td>4/1/24</td>
            <td>-</td>
            <td>1500-1800</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* ferry */}
          <tr className="transportation water-transportation ferry">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>Ferry: Play del Carmen - Cozumel</td>
            <td>Onsite</td>
            <td>
              <a href="https://www.ultramarferry.com/es">Ultramar</a>
            </td>
            <td>4/1/24</td>
            <td>-</td>
            <td>350pp</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* taxi */}
          <tr className="transportation ground-transportation taxi">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>Taxi: Ferry Docks - Resort</td>
            <td>Onsite</td>
            <td></td>
            <td>4/1/24</td>
            <td>-</td>
            <td>350pp</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* resort */}
          <tr className="lodging">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>Occidental Cozumel</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/1/24</td>
            <td>4/9/24</td>
            <td>5535</td>
            <td>USD</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* refresher course */}
          <tr className="activity diving">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>SCUBA Refresher Course</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/2/24</td>
            <td>-</td>
            <td>incl.</td>
            <td>-</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* dive */}
          <tr className="activity diving">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>SCUBA 2-Tank Dive</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/2/24</td>
            <td>-</td>
            <td>tips</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* dive */}
          <tr className="activity diving">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>SCUBA 2-Tank Dive</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/3/24</td>
            <td>-</td>
            <td>tips</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* dive */}
          <tr className="activity diving">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>SCUBA 2-Tank Dive</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/4/24</td>
            <td>-</td>
            <td>tips</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* dive activity diving*/}
          <tr className="activity diving">
            <td>
              <i className="fa"></i>
            </td>

            <td>SCUBA 2-Tank Dive</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/5/24</td>
            <td>-</td>
            <td>tips</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* activity free */}
          <tr className="activity free">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>play around the resort :)</td>
            <td></td>
            <td></td>
            <td>4/6/24</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* activity diving */}
          <tr className="activity diving">
            <td>
              <i className="fa" aria-hidden="true"></i>
            </td>
            <td>SCUBA 2-Tank Dive</td>
            <td>Paid</td>
            <td>
              <a href="https://www.barcelo.com/es-mx/occidental-cozumel/">
                PADI Travel
              </a>
            </td>
            <td>4/7/24</td>
            <td>-</td>
            <td>tips</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
          {/* activity birdwatching */}
          <tr className="activity sightseeing">
            <td>
              <i className="fa fa-binoculars" aria-hidden="true"></i>
            </td>
            <td>South Bay Birdwatching Tour</td>
            <td>TBD</td>
            <td></td>
            <td>4/8/24</td>
            <td>-</td>
            <td>?</td>
            <td>MXN</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </td>
            <td>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
