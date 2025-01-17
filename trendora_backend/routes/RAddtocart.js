import express from "express";
const addtocartrouter =express.Router()
import { verifyToken } from "../lib/verifytoken.js";
import { AddToCart, GetCart, DelelteProductfromcart ,Getlivelocation} from "../controllers/AddtoCartC.js";

addtocartrouter.post('/addtocart', verifyToken, AddToCart);
addtocartrouter.get('/productfromcart',verifyToken, GetCart);
addtocartrouter.post('/removeproduct/${productId}',verifyToken,DelelteProductfromcart)
addtocartrouter.get('/getlivelocation',verifyToken,Getlivelocation)

export default addtocartrouter;