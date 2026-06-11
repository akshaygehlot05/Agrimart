import { useEffect, useState } from "react";
import API from "../services/api";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    stock: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  <div className="grid md:grid-cols-4 gap-6 mb-10">

  <div className="bg-green-600 text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-lg">📦 Total Products</h3>
        <p className="text-3xl font-bold">
        {products.length}
        </p>
    </div>

    <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-lg">🌾 Categories</h3>
        <p className="text-3xl font-bold">
        {new Set(products.map(p => p.category)).size}
        </p>
    </div>

    <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-lg">📈 In Stock</h3>
        <p className="text-3xl font-bold">
        {products.reduce((acc, p) => acc + p.stock, 0)}
        </p>
    </div>

    <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-lg">💰 Inventory Value</h3>
        <p className="text-2xl font-bold">
        ₹
        {products.reduce(
            (acc, p) => acc + p.price * p.stock,
            0
        )}
        </p>
    </div>

    </div>

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", formData);

      alert("Product Added Successfully ✅");

      setFormData({
        name: "",
        category: "",
        price: "",
        description: "",
        image: "",
        stock: "",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Product ❌");
    }
  };

  const deleteProduct = async (id) => {
    try {
     await API.delete(`/products/${id}`);

        alert("Product Deleted");

        fetchProducts();
        } catch (error) {
            console.log(error);
            alert("Failed to Delete Product");
        }
    };

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
        Admin Dashboard
      </h1>

      {/* Add Product Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6">
          Add New Product
        </h2>

        <form
          onSubmit={addProduct}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded md:col-span-2"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-3 rounded md:col-span-2"
            rows="4"
            required
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold md:col-span-2"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">
          Manage Products
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b text-center"
                >
                  <td className="p-3">
                    {product.name}
                  </td>

                  <td className="p-3">
                    {product.category}
                  </td>

                  <td className="p-3">
                    ₹{product.price}
                  </td>

                  <td className="p-3">
                    {product.stock}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;