const ProductCard = ({ mode }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      <img
        src="https://images.unsplash.com/photo-1574943320219-553eb213f72d"
        alt="product"
        className="rounded-lg h-48 w-full object-cover"
      />

      <h3 className="text-xl font-bold mt-4">
        Premium Wheat Seeds
      </h3>

      <p className="text-gray-500 mt-2">
        High quality agricultural seeds.
      </p>

      {mode === "B2C" ? (
        <>
          <p className="text-green-700 font-bold mt-4">
            ₹500
          </p>

          <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
            Add To Cart
          </button>
        </>
      ) : (
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Request Quote
        </button>
      )}
    </div>
  );
};

export default ProductCard;