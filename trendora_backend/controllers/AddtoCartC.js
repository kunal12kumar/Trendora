import Product from "../models/ProductlistM.js"
import Cart from "../models/CartProduct.js";

export const AddToCart = async (req,res) => {

    try {
        const userId = req.user?.Userexitwiththisemail?._id;   // Assuming user ID is retrieved via authentication middleware
      
        const { productId ,quantity} = req.body;
        const product =await Product.findOne({ productid: productId });
       
        

        

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        

        // Find the user's cart or create one if it doesn't exist
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [] });
        }
        const existingProduct = cart.products.find((p) => p.productid === productId);
        console.log("Existing product in cart:", existingProduct);

        if (existingProduct) {
            // Update quantity if product already exists
            existingProduct.quantity += quantity;
            console.log("Updated product quantity:", existingProduct.quantity);
        } else {
            // Add new product to the cart
           
            cart.products.push({
                productid: product.productid,
                name: product.name,
                price: product.price,
                images: product.images,
                quantity: quantity,
            });
            console.log("New product added to cart:", cart.products);
        }

        // Save the updated cart to the database
        await cart.save();

       return  res.status(200).json({ success:true ,message: "Product added to cart successfully", cart });

    } catch (error) {

        return res.status(401).json(
            {
                success:false,
                message: "Add to Cart failed"
            }
        )

    }



}



// now to display the product into the cart
export const GetCart = async (req, res) => {
    try {
        // Extract userId from the authenticated user
        const userId = req.user?.Userexitwiththisemail?._id;
        

        if (!userId) {
           
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        // Find the cart for the user
        const cart = await Cart.findOne({ userId });
     
        console.log("Cart extraceted successfully")

        if (!cart || cart.products.length === 0) {
            console.log("no cart")
            return res.status(404).json({ success: false, message: "Cart is empty" });
        }

        res.status(200).json({ success: true, cart });
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ success: false, message: "Failed to fetch cart" });
    }
};



export const DelelteProductfromcart=  async (req, res) => {
    try {
      const { productId } = req.params;
      const userId =  req.user?.Userexitwiththisemail?._id; // Assuming you're authenticating the user
  
      const userCart = await Cart.findOne({ userId });
  
      if (!userCart) {
        return res.status(404).json({ success: false, message: 'Cart not found' });
      }
  
      // Remove the product from the cart
      userCart.products = userCart.products.filter(
        (product) => product.productid.toString() !== productId
      );
      console.log ("inside the main loop");
  
      await userCart.save();
  
      res.status(200).json({ success: true, message: 'Product removed successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error removing product', error });
    }
  };
  
