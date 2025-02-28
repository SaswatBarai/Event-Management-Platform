import express from "express";
import registerController from "../controllers/registerController.js"
import registerValidator from "../utils/registerValid.js"
import loginController from "../controllers/loginController.js";
import loginValidator from "../utils/loginValid.js";
import isAutlh from "../middlewares/authMiddleware.js";
import {profileController,updateProfileController} from "../controllers/profileController.js";

const router = express.Router();

router.post("/register",registerValidator,registerController);
router.post("/login",loginValidator,loginController);


router.get("/profile",isAutlh,profileController);
router.put("/profile",isAutlh,updateProfileController);

export default router;

