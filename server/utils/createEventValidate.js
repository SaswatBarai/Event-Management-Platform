import { body } from "express-validator";

const createEventValidate = [
    body("title").trim().isLength({min:3}).withMessage("Title is required"),
    body("description").trim().isLength({min:10}).withMessage("Description is required"),
    body("location").trim().isLength({min:3}).withMessage("Location is required"),
    body("date").trim().isDate().withMessage("Invalid date"),
    body("time").trim().isTime().withMessage("Invalid time"),
    body("imageUrl").trim().isURL().withMessage("Invalid image URL"),
    body("capacity").trim().isInt({min:1}).withMessage("Capacity must be at least 1"),
    body("isPublic").trim().isBoolean().withMessage("Invalid isPublic value"),
    body("status").trim().isIn(["draft","published","cancelled"]).withMessage("Invalid status value"),
]

export default createEventValidate;
