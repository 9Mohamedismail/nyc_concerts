import { pool } from "../config/database.js";

const getEvent = async (req, res) => {
  try {
    const params = [req.params.slug];

    const results = await pool.query(
      "SELECT * FROM events WHERE event_slug = $1",
      params,
    );

    if (!results.rows[0]) {
      res.status(404).json({ error: "Event not found" });
      return;
    }

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getEvent,
};
