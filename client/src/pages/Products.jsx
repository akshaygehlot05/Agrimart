import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

function Products({ mode }) {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Our Products
        </h1>

        <p className="text-xl">
          Explore quality agricultural products for farmers and businesses.
        </p>
      </div>

      {/* Categories */}
      <div className="py-10">
        <Categories />
      </div>

      {/* Products */}
      <div className="py-10">
        <ProductList mode={mode} />
      </div>

    </div>
  );
}

export default Products;