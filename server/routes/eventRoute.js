import express from "express";
import isAuth from "../middlewares/authMiddleware.js";
import createEventValidate from "../utils/createEventValidate.js";
import createEventController from "../controllers/createEventController.js"
import getEventsController from "../controllers/getEventController.js";
import updateEventValidate from "../utils/updateEventValid.js"
import updateEventController from "../controllers/updateEventController.js";
import deleteEventController from "../controllers/deleteEventController.js";
import rsvpEventController from "../controllers/rsvpEventControllers.js";
import getOrganizerEventsController from "../controllers/getOrganizerEventsController.js";
import getPastEventsController from "../controllers/getPastEventsController.js"
import getUpcomingEventsController from "../controllers/getUpcomingEventsController.js"
const router = express.Router();

router.post("/events",isAuth,createEventValidate,createEventController);
router.get("/events",isAuth,getEventsController);
router.put("/events/:id",isAuth,updateEventValidate,updateEventController);
router.delete("/events/:id",isAuth,deleteEventController);
router.post("/events/:id/rsvp",isAuth,rsvpEventController)
router.get("/events/organizer",isAuth,getOrganizerEventsController);
router.get("/events/upcoming",isAuth,getUpcomingEventsController);
router.get("/events/past",isAuth,getPastEventsController);
router.get("/events/:id/attendees",isAuth,);
export default router;
