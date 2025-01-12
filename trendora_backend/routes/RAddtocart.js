import express from "express";
const addtocartrouter =express.Router()
import { verifyToken } from "../lib/verifytoken.js";
import { AddToCart, GetCart } from "../controllers/AddtoCartC.js";

addtocartrouter.post('/addtocart', verifyToken, AddToCart);
addtocartrouter.get('/productfromcart',verifyToken, GetCart);

export default addtocartrouter;