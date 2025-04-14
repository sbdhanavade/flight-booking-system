import React, { useEffect, useState } from "react";
import axios from "axios";

function FlightList({ onSelect }) {
  const [flights, setFlights] = useState([]);
  const [passengers, setPassengers] = useState([]);
  const [visibleFlightId, setVisibleFlightId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/flights/")
      .then(res => setFlights(res.data))
      .catch(err => console.log("Error loading flights", err));
  }, []);

  const loadPassengers = (flightId) => {
    if (visibleFlightId === flightId) {
      setVisibleFlightId(null); // toggle off
      return;
    }

    axios.get("http://127.0.0.1:8000/api/passengers/")
      .then((res) => {
        const filtered = res.data.filter(p => p.flight === flightId);
        setPassengers(filtered);
        setVisibleFlightId(flightId);
      })
      .catch((err) => {
        console.error("Error loading passengers", err);
      });
  };

  return (
    <div className="container mt-4">
      <input
        className="form-control mb-3"
        placeholder="Search by origin or destination"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {flights
        .filter(f =>
          f.origin.toLowerCase().includes(search) ||
          f.destination.toLowerCase().includes(search)
        )
        .map(flight => (
          <React.Fragment key={flight.id}>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>{flight.flight_number}</td>
                  <td>{flight.origin}</td>
                  <td>{flight.destination}</td>
                  <td>{new Date(flight.departure_time).toLocaleString()}</td>
                  <td>{new Date(flight.arrival_time).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onSelect(flight.id)}
                    >
                      Book
                    </button>
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => loadPassengers(flight.id)}
                    >
                      👥 View Passengers
                    </button>
                  </td>
                </tr>
                {visibleFlightId === flight.id && (
                  <tr>
                    <td colSpan="6">
                      <h6>Passengers:</h6>
                      {passengers.length === 0 ? (
                        <p>No bookings yet.</p>
                      ) : (
                        <ul>
                          {passengers.map((p, index) => (
                            <li key={index}>
                              {p.name} ({p.email})
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </React.Fragment>
        ))}
    </div>
  );
}

export default FlightList;
