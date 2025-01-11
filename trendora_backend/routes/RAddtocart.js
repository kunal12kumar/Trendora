import express from "express";
const addtocartrouter =express.Router()
import { verifyToken } from "../lib/verifytoken.js";
import { AddToCart } from "../controllers/AddtoCartC.js";

addtocartrouter.post('/addtocart', verifyToken, AddToCart);

export default addtocartrouter;