import products from "../Data/ProductList.js";

export const AddToCart = async (req,res) => {

    try {
        const { productId } = req.body;
        console.log(productId)
        const product = products.find((p) => p.id === productId);

        console.log("Add to cart button is working")

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        cart.push(product);
        res.status(200).json({ message: 'Product added to cart successfully' });

    } catch (error) {

        return res.status(401).json(
            {
                success:false,
                message: "Add to Cart failed"
            }
        )

    }



}