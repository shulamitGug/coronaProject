import express from "express";
import {addCity,getCities} from "../controllers/cityController.js"

const router = express.Router();

router.route("/addCity").post(addCity);
router.route("/showCities").get(getCities);

export default router