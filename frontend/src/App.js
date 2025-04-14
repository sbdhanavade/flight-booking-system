import './App.css';
import React, { useState } from "react";
import FlightList from "./components/FlightList";
import BookingForm from "./components/BookingForm";

function App() {
  const [selectedFlightId, setSelectedFlightId] = useState(null);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">✈️ Flight Booking System</span>
        </div>
      </nav>

      <div className="overlay container">
        <h2 className="text-center mb-4">Search & Book Flights</h2>
        <FlightList onSelect={setSelectedFlightId} />
        {selectedFlightId && <BookingForm flightId={selectedFlightId} />}
      </div>
    </>
  );
}

export default App;
