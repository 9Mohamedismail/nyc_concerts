import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../services/EventsAPI";

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

  return (
    <div className="stadium-grid">
      {stadiums.map((stadium) => {
        const concertCount = getConcertCount(stadium);

        return (
          <article className="stadium-card" key={stadium}>
            <header>
              <h3>{stadium}</h3>
            </header>

            <p>
              There are {concertCount} concerts happening at {stadium}.
            </p>

            <footer>
              <Link
                to={`/stadium/${encodeURIComponent(stadium)}`}
                role="button"
              >
                View Events
              </Link>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

export default StadiumGrid;
