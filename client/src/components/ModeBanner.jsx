const ModeBanner = ({ mode }) => {
  const isWholesale = mode === "B2B";

  return (
    <div
      className={`relative overflow-hidden py-6 text-center text-white font-semibold text-xl shadow-xl ${
        isWholesale
          ? "bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900"
          : "bg-gradient-to-r from-green-600 via-emerald-600 to-green-800"
      }`}
    >
      {/* Glow Effects */}

      <div
        className={`absolute top-0 left-10 w-32 h-32 rounded-full blur-3xl opacity-30 animate-pulse ${
          isWholesale ? "bg-blue-300" : "bg-green-300"
        }`}
      ></div>

      <div
        className={`absolute top-0 right-10 w-32 h-32 rounded-full blur-3xl opacity-30 animate-pulse ${
          isWholesale ? "bg-indigo-300" : "bg-lime-300"
        }`}
      ></div>

      {/* Content */}

      <div className="relative z-10">

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg">

          {isWholesale
            ? "🏢 Wholesale Marketplace"
            : "🌱 Retail Marketplace"}

        </h2>

        <p className="text-sm md:text-base mt-2 text-white/90">

          {isWholesale
            ? "Bulk Orders • Business Pricing • Distributor Network"
            : "Fresh Products • Home Delivery • Retail Shopping"}

        </p>

      </div>
    </div>
  );
};

export default ModeBanner;