import Product from "../models/ProductlistM.js"
import Cart from "../models/CartProduct.js";
import axios from 'axios';

export const AddToCart = async (req, res) => {
  try {
      const userId = req.user?.Userexitwiththisemail?._id;
      if (!userId) {
          return res.status(400).json({ message: "User ID is missing" });
      }

      const { productId, quantity } = req.body;
      const product = await Product.findOne({ productid: productId });
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      // Find or create a cart for the user
      let cart = await Cart.findOne({ userId });
      if (!cart) {
          cart = new Cart({ userId, products: [] });
      }

      const existingProduct = cart.products.find((p) => p.productid === productId);
      if (existingProduct) {
          existingProduct.quantity += quantity;
      } else {
          cart.products.push({
              productid: product.productid,
              name: product.name,
              price: product.price,
              images: product.images,
              quantity: quantity,
          });
      }

      console.log("Saving cart:", cart);
      await cart.save();
      return res.status(200).json({ success: true, message: "Product added to cart successfully", cart });
  } catch (error) {
      console.error("Error in AddToCart:", error.message);
      return res.status(400).json({ success: false, message: "Add to Cart failed", error: error.message });
  }
};




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
  
// now to display the pin code and also the live location 

export const Getlivelocation=async (req, res) => {
    const { lat, lng } = req.body;
    console.log(lat,lng)
  
    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude and Longitude are required" });
    }
  
    try {
      // Use OpenCage API for reverse geocoding
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          key: process.env.OPENCAGE_API_KEY, // Make sure your API key is available here
          q: `${lat},${lng}` // Query with latitude and longitude
        }
      });
 
  
      const results = response.data.results;
      console.log(results)
      const newpincode = response.data.results[0].components.postcode;
    console.log("Pincode:", newpincode);
  
      // Extract the postal code from the components
      const addressComponent = results
        .flatMap((result) => result.components)
        .find((component) => component.postcode);
  
      const pincode = addressComponent ? addressComponent.postcode : null;
  
      if (pincode) {
        return res.json({ pincode });
      } else {
        return res.status(404).json({ error: "Pincode not found" });
      }
    } catch (error) {
      console.error("Error fetching pincode:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }