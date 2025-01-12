import express from 'express';
import multer from 'multer';
import { addProductlisttodatabase } from '../controllers/AddProductlisttodatabaseC.js';

const addProductlisttodatabaserouter = express.Router();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' }); // Temporary upload folder

// Route for adding a new product
addProductlisttodatabaserouter.post('/addProductlisttodatabase', upload.array('images', 5), addProductlisttodatabase);

export default addProductlisttodatabaserouter;
