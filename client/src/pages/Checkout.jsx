import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-10">

      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Checkout
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Billing Details
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="4"
              placeholder="Delivery Address"
              className="w-full border p-3 rounded-lg"
            ></textarea>

          </form>

          <div className="mt-8">

            <h2 className="text-2xl font-bold mb-4">
              Order Summary
            </h2>

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b py-2"
              >
                <span>{item.name}</span>

                <span>₹{item.price}</span>
              </div>
            ))}

            <div className="mt-4 text-2xl font-bold text-green-700">
              Total: ₹{total}
            </div>

          </div>

          <button
            className="
              w-full
              mt-6
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-lg
              font-bold
              transition
            "
            onClick={() =>
              alert("Order Placed Successfully 🎉")
            }
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;