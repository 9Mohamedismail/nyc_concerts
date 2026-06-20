import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventsByStadium } from "../services/EventsAPI";
import StadiumEventsList from "../components/StadiumEventsLists";

const StadiumEvents = () => {
  const { stadium } = useParams();
  const stadiumName = decodeURIComponent(stadium);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEventsByStadium(stadiumName);
      setEvents(data);
    };

    fetchEvents();
  }, [stadiumName]);

  return <StadiumEventsList events={events} />;
};

export default StadiumEvents;
