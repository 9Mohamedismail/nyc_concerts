const getAllEvents = async () => {
  const response = await fetch("/api/events");

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  return data;
};

const getEventBySlug = async (slug) => {
  const response = await fetch(`/api/events/${encodeURIComponent(slug)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }

  const data = await response.json();
  return data;
};

const getEventsByStadium = async (stadium) => {
  const response = await fetch(
    `/api/events/stadium/${encodeURIComponent(stadium)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch events by stadium");
  }

  const data = await response.json();
  return data;
};

export { getAllEvents, getEventBySlug, getEventsByStadium };
