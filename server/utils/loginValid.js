import {body} from "express-validator";

const loginValid = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:8}).withMessage("Password must be at least 8 characters long")
]

export default loginValid;

