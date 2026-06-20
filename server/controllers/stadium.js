import { pool } from "../config/database.js";

const getEventsByStadium = async (req, res) => {
  try {
    const stadium = req.params.stadium;

    const results = await pool.query(
      "SELECT * FROM events WHERE stadium = $1 ORDER BY id ASC",
      [stadium],
    );

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getEventsByStadium,
};
