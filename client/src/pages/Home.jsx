import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = ({ mode }) => {
  const isWholesale = mode === "B2B";

  return (
    <>
        <section
        className="relative overflow-hidden min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse ${
            isWholesale ? "bg-blue-500" : "bg-green-500"
          }`}
        ></div>

        <div
          className={`absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
            isWholesale ? "bg-indigo-500" : "bg-lime-500"
          }`}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-6">

          <span
            className={`px-5 py-2 rounded-full text-sm font-bold shadow-lg ${
              isWholesale
                ? "bg-blue-600"
                : "bg-green-600"
            }`}
          >
            {isWholesale
              ? "🏢 Wholesale Marketplace"
              : "🌱 Retail Marketplace"}
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 mb-6 animate-pulse">

            {isWholesale
              ? "Bulk Agricultural Supply Solutions"
              : "Fresh Agricultural Products"}

          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">

            {isWholesale
              ? "Connect with distributors, wholesalers and agricultural businesses for bulk purchasing at competitive prices."
              : "Buy fresh seeds, plants, fertilizers and agricultural products directly for your farm and home."}

          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/products"
              className={`px-7 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-300 ${
                isWholesale
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              🚜 Explore Products
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              📞 Contact Us
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-gray-200">
                Agricultural Products
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="mt-2 text-gray-200">
                Happy Customers
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2 text-gray-200">
                Trusted Suppliers
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose AgriMart */}

      <section className="py-16 bg-gradient-to-b from-white to-green-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose AgriMart?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">
                Quality Products
              </h3>
              <p>
                Premium agricultural products from trusted suppliers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-3">
                Fast Delivery
              </h3>
              <p>
                Reliable delivery across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">
                Best Pricing
              </h3>
              <p>
                Affordable retail and wholesale prices.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Categories />

      <ProductList mode={mode} />

      <About mode={mode} />

      <Contact mode={mode} />

      <Footer mode={mode} />
    </>
  );
};

export default Home;