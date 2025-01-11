import express from  "express";
const contactusrouter=express.Router();
import { Contactussave } from "../controllers/ContactUsC.js";
import { verifyToken } from "../lib/verifytoken.js";

contactusrouter.post('/contactussave',verifyToken,Contactussave);

export default contactusrouter;