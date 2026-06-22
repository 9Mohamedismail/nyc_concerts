import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { getStadiumImage } from "../utils/stadiumImages";

const StadiumEventsList = ({ events }) => {
  const stadiumInfo = events[0];
  const stadiumImageSrc = stadiumInfo
    ? `/${encodeURIComponent(getStadiumImage(stadiumInfo.stadium))}`
    : "";

  return (
    <section className="page-section">
      <Link to="/" className="back-link">
        Back to Stadiums
      </Link>

      {stadiumInfo && (
        <article className="detail-card">
          <img
            src={stadiumImageSrc}
            alt={stadiumInfo.stadium}
            className="detail-image"
          />

          <div className="detail-info">
            <header>
              <p className="eyebrow">{stadiumInfo.borough}</p>
              <h2>{stadiumInfo.stadium}</h2>
            </header>

            <div className="detail-meta">
              <p>
                <strong>Address:</strong> {stadiumInfo.address}
              </p>
              <p>
                <strong>Concerts:</strong> {events.length}
              </p>
            </div>

            <p>
              There are {events.length} concerts happening at{" "}
              {stadiumInfo.stadium}.
            </p>
          </div>
        </article>
      )}

      <div className="cards-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default StadiumEventsList;
