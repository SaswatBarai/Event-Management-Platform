import {check} from "express-validator";

const registerValidator = [
    check("name").trim().isLength({min:3}).withMessage("Name is required"),
    check("email").trim().isEmail().withMessage("Invalid email"),
    check("password").trim().isLength({min:8}).withMessage("Password is required"),
    
]

export default registerValidator;
