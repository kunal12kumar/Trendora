// This file contain the form to upload the product 
import React, { useState } from "react";
import axios from "axios";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    productid:"",
    name: "",
    description: "",
    price: "",
    stock: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Create FormData object to send data and files
    const data = new FormData();
    data.append("productid", formData.productid);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    console.log(data)
    const restapikey=process.env.REACT_APP_API_BASE_URL

    for (let i = 0; i < images.length; i++) {
      data.append("images", images[i]);
    }

    try {
      const response = await axios.post(
        `${restapikey}/RAddProductlisttodatabase/addProductlisttodatabase`, // Replace with your backend URL
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage("Product added successfully!");
      setFormData({ productid: "",name: "", description: "", price: "", stock: "" });
      setImages([]);
    } catch (error) {
      console.error("Error uploading product:", error);
      setMessage("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white  rounded-lg shadow-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New Product
        </h2>
        {message && (
          <p
            className={`text-center ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            } mb-4`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Id
            </label>
            <input
              type="text"
              id="productid"
              name="productid"
              value={formData.productid}
              onChange={handleChange}
              required
              placeholder="Enter product id"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter product description"
              className="mt-1 block w-full rounded-md border-gray-300 p-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price (in USD)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Enter price"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stock Quantity
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              placeholder="Enter stock quantity"
              className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Images */}
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Product Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUploadForm;
