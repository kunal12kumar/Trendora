import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
        }
    ]
});

const Favorites = (mongoose.models.Favorites ) || (mongoose.model('Favorites', favoritesSchema));
export default Favorites;
