// import productdetails from "../Data"

export const AddToCart = async () => {

    try {
        const { productId } = req.body;
        const product = products.find((p) => p.id === productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        cart.push(product);
        res.status(200).json({ message: 'Product added to cart successfully' });

    } catch (error) {

        res.status(450).json({
            success: false,
            message: "Add to cart failed"
        })

    }



}