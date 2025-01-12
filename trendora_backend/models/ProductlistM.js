// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productid:{type:String,required:true},
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    images: { type: [String],required:true },  // If you want to store the product image URL
    stock: { type: Number, default: 0 },  // How many items of this product are available
    category: { type: String },
    rating:{type:Number}  // You can categorize products (e.g., clothing, electronics, etc.)
}, { timestamps: true });

const Product = (mongoose.models.Product ) || (mongoose.model('Product', ProductSchema));
export default Product;
