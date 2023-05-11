import express from "express";
import {addNewUser,getAllUsers,getDetailUserById} from "../controllers/userController.js"
import { addPicture } from "../controllers/picturesController.js";
const router = express.Router();

router.route("/addUser").post(addNewUser);
router.route("/getUsers").get(getAllUsers);
router.route("/addPicture").post(addPicture);
router.route("/getUserById").get(getDetailUserById);


export default router