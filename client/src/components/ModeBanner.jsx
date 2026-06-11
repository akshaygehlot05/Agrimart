const ModeBanner = ({ mode }) => {
  return (
    <div
      className={`py-6 text-center text-white font-semibold text-xl ${
        mode === "B2C"
          ? "bg-green-600"
          : "bg-blue-600"
      }`}
    >
      {mode === "B2C"
        ? "🛒 Retail Shopping Mode - For Individual Customers"
        : "🏢 Wholesale Marketplace - For Businesses & Distributors"}
    </div>
  );
};

export default ModeBanner;