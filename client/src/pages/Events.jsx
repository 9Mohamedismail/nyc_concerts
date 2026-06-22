import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/EventsAPI";
import EventsList from "../components/Events";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return <EventsList events={events} />;
};

export default Events;
