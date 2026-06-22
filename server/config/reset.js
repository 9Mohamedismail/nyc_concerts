import "dotenv/config";
import { pool } from "./database.js";
import eventData from "../eventData.js";

const createSlug = (value) => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const createEventsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            event_slug VARCHAR(255) UNIQUE NOT NULL,
            event_name VARCHAR(255) NOT NULL,
            artist VARCHAR(255) NOT NULL,
            borough VARCHAR(255) NOT NULL,
            stadium VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            event_date VARCHAR(50) NOT NULL,
            start_time VARCHAR(50) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            ticket_price VARCHAR(50) NOT NULL,
            image VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL
        )
    `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
    throw err;
  }
};

const seedEventsTable = async () => {
  try {
    await createEventsTable();
  } catch {
    return;
  }

  eventData.forEach((event) => {
    const eventSlug = createSlug(event.event_name);
    const insertQuery = {
      text: "INSERT INTO events (event_slug, event_name, artist, borough, stadium, address, event_date, start_time, genre, description, ticket_price, image, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    };

    const values = [
      eventSlug,
      event.event_name,
      event.artist,
      event.borough,
      event.stadium,
      event.address,
      event.event_date,
      event.start_time,
      event.genre,
      event.description,
      event.ticket_price,
      event.image,
      event.status,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting event", err);
        return;
      }

      console.log(`✅ ${event.event_name} added successfully`);
    });
  });
};

seedEventsTable();
