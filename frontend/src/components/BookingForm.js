import React, { useState } from "react";
import axios from "axios";

function BookingForm({ flightId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/passengers/", {
      name,
      email,
      flight: flightId,
    })
    .then(() => {
      setSuccess(true);
      setName("");
      setEmail("");
    });
  };

  if (!flightId) return null;

  return (
    <div className="container mt-4">
      <h4>Book Flight #{flightId}</h4>
      {success && <div className="alert alert-success">Booking successful!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button className="btn btn-success" type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
