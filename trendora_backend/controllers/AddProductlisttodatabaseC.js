import cloudinary  from "../lib/cloudinaryconfig.js"
import Product from '../models/ProductlistM.js';

// Add a new product
export const addProductlisttodatabase = async (req, res) => {
    try {
        const { productid , name, description, price, stock ,category  } = req.body;
        const images = []; // Array to store Cloudinary image URLs

        // Upload each image to Cloudinary
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            images.push(result.secure_url);
        }

        // Create a new product
        const newProduct = new Product({
            productid,
            name,
            description,
            price,
            images,
            stock,
            category,
           
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Failed to add product', error });
    }
};
