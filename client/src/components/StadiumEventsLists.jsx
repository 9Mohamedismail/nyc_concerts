import React from "react";
import { Link } from "react-router-dom";

const StadiumEventsList = ({ events }) => {
  const stadiumInfo = events[0];

  return (
    <section>
      <Link to="/" className="contrast">
        ← Back to Stadiums
      </Link>

      {stadiumInfo && (
        <article className="stadium-detail">
          <img src={`/${stadiumInfo.image}`} alt={stadiumInfo.stadium} />

          <header>
            <h2>{stadiumInfo.stadium}</h2>
            <p>
              <strong>Borough:</strong> {stadiumInfo.borough}
            </p>
            <p>
              <strong>Address:</strong> {stadiumInfo.address}
            </p>
          </header>

          <p>
            There are {events.length} concerts happening at{" "}
            {stadiumInfo.stadium}.
          </p>
        </article>
      )}

      <div className="event-grid">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
            <header>
              <h3>{event.event_name}</h3>
              <p>{event.artist}</p>
            </header>

            <p>{event.description}</p>

            <footer>
              <p>
                <strong>Date:</strong> {event.event_date}
              </p>
              <p>
                <strong>Time:</strong> {event.start_time}
              </p>
              <p>
                <strong>Genre:</strong> {event.genre}
              </p>
              <p>
                <strong>Price:</strong> {event.ticket_price}
              </p>
              <p>
                <strong>Status:</strong> {event.status}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StadiumEventsList;
