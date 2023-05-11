import express from "express";
import {addCompany,getCompanies} from "../controllers/companyController.js"

const router = express.Router();

router.route("/addCompany").post(addCompany);
router.route("/showCompany").get(getCompanies);
export default router