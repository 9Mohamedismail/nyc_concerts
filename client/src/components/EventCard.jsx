import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const isPastEvent = event.status?.toLowerCase() === "past";
  const imageSrc = `/${encodeURIComponent(event.image)}`;

  return (
    <article className={`event-card${isPastEvent ? " past-event-card" : ""}`}>
      <img
        src={imageSrc}
        alt={event.event_name}
        className="event-card-image"
      />

      <div className="event-card-info">
        <header>
          <p className="eyebrow">{event.genre}</p>
          <h3>{event.event_name}</h3>
          <p className="artist-name">{event.artist}</p>
        </header>

        <p className="card-description">{event.description}</p>

        <div className="card-meta">
          <span>{event.event_date}</span>
          <span>{event.start_time}</span>
          <span>{event.ticket_price}</span>
          <span>{event.status}</span>
        </div>

        <footer className="card-actions">
          <Link to={`/events/${event.event_slug}`} role="button">
            View Details
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default EventCard;
