const Categories = ({ mode }) => {
  const isWholesale = mode === "B2B";

  const categories = [
    {
      name: "Seeds",
      icon: "🌾",
    },
    {
      name: "Fertilizers",
      icon: "🧪",
    },
    {
      name: "Farming Tools",
      icon: "🚜",
    },
    {
      name: "Organic Products",
      icon: "🌱",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h2
        className={`text-5xl font-extrabold text-center mb-12 ${
          isWholesale ? "text-blue-700" : "text-green-700"
        }`}
      >
        Product Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {categories.map((category) => (
          <div
            key={category.name}
            className={`
              relative overflow-hidden
              rounded-3xl p-8 text-center
              backdrop-blur-md
              shadow-xl
              hover:scale-105
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              ${
                isWholesale
                  ? "bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-blue-400/50"
                  : "bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-green-400/50"
              }
            `}
          >
            {/* Glow Effect */}
            <div
              className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-30 ${
                isWholesale
                  ? "bg-blue-400"
                  : "bg-green-400"
              }`}
            ></div>

            <div className="relative z-10">

              <div className="text-5xl mb-4">
                {category.icon}
              </div>

              <h3
                className={`text-xl font-bold ${
                  isWholesale
                    ? "text-blue-800"
                    : "text-green-800"
                }`}
              >
                {category.name}
              </h3>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Categories;