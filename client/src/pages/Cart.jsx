import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded"
                />

                <h2 className="text-xl font-bold mt-3">
                  {item.name}
                </h2>

                <p>₹{item.price}</p>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

          <div className="mt-8 text-2xl font-bold">
            Total: ₹{total}
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;