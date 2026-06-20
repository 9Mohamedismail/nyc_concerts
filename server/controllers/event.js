import { pool } from "../config/database.js";

const getEvent = async (req, res) => {
  try {
    const params = [req.params.id];

    const results = await pool.query(
      "SELECT * FROM events WHERE id = $1",
      params,
    );

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getEvent,
};
