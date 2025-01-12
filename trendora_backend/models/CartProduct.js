import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true, // Ensure one cart per user
    },
    products: [
        {
            productid: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            images:{type: [String], required:true},
            quantity: { type: Number, required: true, default: 1 },
        },
    ],
});

const Cart = (mongoose.models.Cart ) || (mongoose.model('Cart', CartSchema));
export default  Cart;