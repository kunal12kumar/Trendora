// in this i am writing code to fetch the data from productlistfile and later from database
import Product from "../models/ProductlistM.js"


export const ProductList = async (req, res) => {

    try {
        // here we are collecting all the data in the product list
        const Allproductlist = await Product.find();

        return res.status(200).json(
            {
                success: true,
                message: "Product List Send successfully",
                data: Allproductlist
            }
        )


    } catch (error) {

        console.log("Error fetching product list ", error)
        return res.status(404).json(
            {
                success: false,
                message: "Problem in Fetching productlist"
            }
        )

    }

}


export const ProductById = async (req, res) => {
    try {
        const productid = req.params.id;
        console.log(productid)

        const product = await Product.findOne({ productid: productid });

        console.log(product)
        res.status(200).json({
            success: true,
            message: "Product send successfully",
            data: product
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found'
        });

    }

}

