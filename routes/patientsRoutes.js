import express from "express";
import {addPatient,getPatientByUserId,getPatients,getNumOfPatInMonth} from "../controllers/patientsController.js"

const router = express.Router();

router.route("/addPatient").post(addPatient);
router.route("/getPatients").get(getPatients);
router.route("/getPatientByUserId").get(getPatientByUserId);
router.route("/getNumOfPatInMonth").get(getNumOfPatInMonth);

export default router