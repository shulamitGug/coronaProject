import express from "express";
import {addVaccination,getNumPeopleDidNotGet} from "../controllers/vaccinationsController.js"

const router = express.Router();

router.route("/addVaccination").post(addVaccination);
router.route("/getNumPeopleDidntGetYet").get(getNumPeopleDidNotGet);

export default router