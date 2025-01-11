
import React ,{useState} from "react";
import product from "../Data/Product.js";
import axios from "axios";

export default function ProductList() {


    const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

    const addToCart = async () => {
        try {
            const response = await axios.post('/api/cart/add', { productId: product.id });
            alert(response.data.message);
        } catch (error) {
            console.error('Error adding to cart:', error.response?.data?.message || error.message);
        }
    };

    const toggleFavorite = async () => {
        try {
            const response = await axios.post('/api/favorite/toggle', { productId: product.id });
            setIsFavorite(response.data.isFavorite);
            alert(response.data.message);
        } catch (error) {
            console.error('Error toggling favorite:', error.response?.data?.message || error.message);
        }
    };

    return (
        // This is for outer boundary 
        <div className="min-h-screen  ">
            <h1 className="flex justify-center items-center text-5xl py-7 "> Our Products</h1>



            <div className="grid sm:grid-cols-3 gap-5 p-12 grid-cols-1">

                {/* writing function for showing product  */}
                {
                    product.map((products, index) => (
                        <div className="">
                            <div className="card bg-base-100 w-[300px] shadow-xl">
                                <figure>
                                    <img className="w-full h-[300px]"
                                        src={products.image}
                                        alt={products.category} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto font-roboto">{products.name}</h2>

                                    <div className="card-actions justify-around">
                                        <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
                                        <button className="btn btn-primary">Buy Now</button>
                                        <button onClick={toggleFavorite} className="btn btn-primary">
                                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))


                }
            </div>

        </div>

    )
}