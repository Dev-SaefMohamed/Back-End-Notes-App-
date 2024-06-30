import express from "express";
import { signUp, signIn } from "./user.controller.js";

let router = express.Router();

//register
router.post("/signUp",signUp)
//signIn
router.post("/signIn",signIn)// login

export default router;