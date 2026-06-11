import { useEffect, useState } from "react";
import API from "../services/api";

const ProductList = ({ mode }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data);
    };

    fetchProducts();
  }, []);
console.log(products);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-xl p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-xl font-bold mt-4">
              {product.name}
            </h3>

            <p className="text-gray-500">
              {product.category}
            </p>

            <p className="mt-2">
              {product.description}
            </p>

            {mode === "B2C" ? (
              <div>
                <p className="font-bold text-green-700 mt-3">
                  ₹{product.price}
                </p>

                <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
                  Add To Cart
                </button>
              </div>
            ) : (
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
                Request Quote
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;