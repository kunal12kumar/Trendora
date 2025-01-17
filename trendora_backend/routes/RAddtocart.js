import express from "express";
const addtocartrouter =express.Router()
import { verifyToken } from "../lib/verifytoken.js";
import { AddToCart, GetCart, DelelteProductfromcart } from "../controllers/AddtoCartC.js";

addtocartrouter.post('/addtocart', verifyToken, AddToCart);
addtocartrouter.get('/productfromcart',verifyToken, GetCart);
addtocartrouter.post('/removeproduct/${productId}',verifyToken,DelelteProductfromcart)

export default addtocartrouter;