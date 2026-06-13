import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-10">
          🛒 Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <div className="text-7xl mb-4">
              🛒
            </div>

            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add products from the marketplace.
            </p>

          </div>

        ) : (

          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    overflow-hidden
                    hover:shadow-green-400/40
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-5">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-3">
                      {item.name}
                    </h2>

                    <p className="text-green-700 text-2xl font-bold mt-3">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      className="
                        mt-5
                        w-full
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                      "
                    >
                      🗑 Remove Item
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Order Summary */}

            <div className="mt-12">

              <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl ml-auto">

                <h2 className="text-3xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between text-lg mb-3">
                  <span>Total Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between text-lg mb-3">
                  <span>Delivery</span>
                  <span className="text-green-600">
                    Free
                  </span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-3xl font-bold text-green-700">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button
                  className="
                    mt-6
                    w-full
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    text-lg
                    shadow-lg
                  "
                >
                  <Link
                      to="/checkout"
                      className="
                        inline-block
                        mt-6
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        px-6
                        py-3
                        rounded-lg
                        font-bold
                      "
                    >
                      Proceed To Checkout
                    </Link>
                </button>

              </div>

            </div>

          </>
        )}

      </div>

    </div>
  );
};

export default Cart;