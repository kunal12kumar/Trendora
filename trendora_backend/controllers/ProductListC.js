// in this i am writing code to fetch the data from productlistfile and later from database
import products from "../Data/ProductList.js";


export const ProductList= async (req, res)=>{

    try {
        // here we are collecting all the data in the product list
        const Allproductlist= products
        console.log('Fatched product list are following :',Allproductlist)

        return res.status(200).json(
            {
                success:true,
                message:"Product List Send successfully",
                data: Allproductlist
            }
        )

        
    } catch (error) {

        console.log("Error fetching product list ",  error)
        return res.status(404).json(
            {
                success: false,
                message: "Problem in Fetching productlist"
            }
        )
        
    }

}

