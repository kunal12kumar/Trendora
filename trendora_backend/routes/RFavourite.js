import express from "express";
const favoritesrouter =express.Router();
import { Favourites } from "../controllers/FavouritesC.js";
import { verifyToken } from "../lib/verifytoken.js";

favoritesrouter.post('/favourites', verifyToken, Favourites);

export default favoritesrouter