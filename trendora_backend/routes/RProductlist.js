import express from "express";
const productlistrouter=express.Router();
import { ProductList, ProductById } from "../controllers/ProductListC.js";
// in this we are not using verify token because we have to show all product 

productlistrouter.post('/productlist', ProductList);
productlistrouter.get('/product/:id',ProductById);
export default productlistrouter
