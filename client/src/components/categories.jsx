const Categories = () => {
  const categories = [
    "Seeds",
    "Fertilizers",
    "Farming Tools",
    "Organic Products",
  ];

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Product Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;