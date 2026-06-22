import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventBySlug } from "../services/EventsAPI";

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEventBySlug(slug);
      setEvent(data);
    };

    fetchEvent();
  }, [slug]);

  if (!event) {
    return <p>Loading event...</p>;
  }

  const imageSrc = `/${encodeURIComponent(event.image)}`;

  return (
    <section className="page-section">
      <Link to="/events" className="back-link">
        Back to Events
      </Link>

      <article className="detail-card">
        <img
          src={imageSrc}
          alt={event.event_name}
          className="detail-image"
        />

        <div className="detail-info">
          <header>
            <p className="eyebrow">{event.genre}</p>
            <h2>{event.event_name}</h2>
            <p className="artist-name">{event.artist}</p>
          </header>

          <div className="detail-meta">
            <p>
              <strong>Stadium:</strong> {event.stadium}
            </p>
            <p>
              <strong>Borough:</strong> {event.borough}
            </p>
            <p>
              <strong>Address:</strong> {event.address}
            </p>
            <p>
              <strong>Date:</strong> {event.event_date}
            </p>
            <p>
              <strong>Time:</strong> {event.start_time}
            </p>
            <p>
              <strong>Price:</strong> {event.ticket_price}
            </p>
            <p>
              <strong>Status:</strong> {event.status}
            </p>
          </div>

          <p>{event.description}</p>
        </div>
      </article>
    </section>
  );
};

export default EventDetail;
