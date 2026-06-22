import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../services/EventsAPI";
import { getStadiumImage } from "../utils/stadiumImages";

const StadiumGrid = () => {
  const [events, setEvents] = useState([]);

  const stadiums = [
    "Yankee Stadium",
    "Barclays Center",
    "Citi Field",
    "USTA Billie Jean King National Tennis Center",
    "Nike Track & Field Center at The Armory",
    "Madison Square Garden",
    "Forest Hills Stadium",
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const getConcertCount = (stadium) => {
    return events.filter((event) => event.stadium === stadium).length;
  };

  const getFeaturedEvent = (stadium) => {
    return events.find((event) => event.stadium === stadium);
  };

  return (
    <div className="cards-grid">
      {stadiums.map((stadium) => {
        const concertCount = getConcertCount(stadium);
        const featuredEvent = getFeaturedEvent(stadium);
        const image = getStadiumImage(stadium);
        const imageSrc = `/${encodeURIComponent(image)}`;

        return (
          <article className="event-card venue-card" key={stadium}>
            <img src={imageSrc} alt={stadium} className="event-card-image" />

            <div className="event-card-info">
              <header>
                <p className="eyebrow">{featuredEvent?.borough || "NYC"}</p>
                <h3>{stadium}</h3>
              </header>

              <p className="card-description">
                There are {concertCount} concerts happening at {stadium}.
              </p>

              {featuredEvent && (
                <div className="card-meta">
                  <span>{featuredEvent.address}</span>
                </div>
              )}

              <footer className="card-actions">
                <Link
                  to={`/stadium/${encodeURIComponent(stadium)}`}
                  role="button"
                >
                  View Events
                </Link>
              </footer>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default StadiumGrid;
