import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { CartContext } from "../context/CartContext";

const ProductList = ({ mode }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const isWholesale = mode === "B2B";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-5">

      <h2
        className={`text-5xl font-extrabold text-center mb-12 ${
          isWholesale ? "text-blue-700" : "text-green-700"
        }`}
      >
        {isWholesale
          ? "Wholesale Products"
          : "Featured Products"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product._id}
            className={`
              relative overflow-hidden
              rounded-3xl
              backdrop-blur-md
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-2
              hover:scale-105
              transition-all
              duration-300
              ${
                isWholesale
                  ? "bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-blue-400/40"
                  : "bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-green-400/40"
              }
            `}
          >

            {/* Glow Effect */}

            <div
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 ${
                isWholesale
                  ? "bg-blue-400"
                  : "bg-green-400"
              }`}
            ></div>

            {/* Product Image */}

            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              {/* Category Badge */}

              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  isWholesale
                    ? "bg-blue-200 text-blue-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {product.category}
              </span>

              <h3 className="text-xl font-bold mt-3">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>

              {/* Retail Mode */}

              {!isWholesale && (
                <>
                  <p className="text-2xl font-bold text-green-700 mt-4">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-lg"
                  >
                    🛒 Add To Cart
                  </button>
                </>
              )}

              {/* Wholesale Mode */}

              {isWholesale && (
                <>
                  <div className="mt-4">

                    <p className="font-bold text-blue-700 text-lg">
                      MOQ: 50 Units
                    </p>

                    <p className="text-sm text-gray-600">
                      Special Distributor Pricing Available
                    </p>

                  </div>

                  <button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg"
                  >
                    📋 Request Quote
                  </button>
                </>
              )}

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ProductList;