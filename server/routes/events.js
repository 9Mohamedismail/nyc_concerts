import express from "express";
import getEvent from "../controllers/event.js";
import getEvents from "../controllers/events.js";
import getEventsByStadium from "../controllers/stadium.js";

const router = express.Router();

router.get("/events", getEvents.getEvents);
router.get("/events/stadium/:stadium", getEventsByStadium.getEventsByStadium);
router.get("/events/:id", getEvent.getEvent);

export default router;
