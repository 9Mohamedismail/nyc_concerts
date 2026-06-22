import React from "react";
import EventCard from "./EventCard";

const Events = ({ events }) => {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p>Calendar</p>
        <h2>All Events</h2>
        <span>Explore every concert across New York City's stadiums.</span>
      </div>

      <div className="cards-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
