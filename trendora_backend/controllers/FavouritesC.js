// import productdetails from "../Data";

export const Favourites= (req,res)=>{

    const { productId } = req.body;
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    product.isFavorite = !product.isFavorite;
    res.status(200).json({
        message: product.isFavorite
            ? 'Product added to favorites'
            : 'Product removed from favorites',
        isFavorite: product.isFavorite,
    });



}