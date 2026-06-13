import {
  FaSeedling,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";

function About({ mode }) {
  const isWholesale = mode === "B2B";
  return (
    <section className="py-10 bg-gradient-to-br from-green-50 to-emerald-100">

      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className={`text-3xl md:text-4xl font-extrabold ${isWholesale ? "text-blue-700" : "text-green-700"}`}>
            About AgriMart
          </h1>

          <div className={`w-16 h-1 ${isWholesale ? "bg-blue-100" : "bg-green-100"} mx-auto mt-3 rounded-full`}></div>

        </div>

        {/* Main Card */}

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">

          <p className="text-gray-700 leading-7 mb-4">
            AgriMart is a modern agricultural marketplace connecting
            farmers, retailers, wholesalers, and customers on a
            single digital platform.
          </p>

          <p className="text-gray-700 leading-7">
            Our mission is to provide quality agricultural products,
            fair pricing, and a reliable ecosystem that empowers
            India's farming community.
          </p>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${isWholesale ? "bg-blue-100" : "bg-green-100"}`}>
              <FaSeedling className={`text-${isWholesale ? "blue" : "green"}-700 text-2xl` } />
            </div>

            <h2 className="text-lg font-bold text-green-700 mb-2">
              Quality Products
            </h2>

            <p className="text-sm text-gray-600">
              Premium seeds, fertilizers, plants and farming products.
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaTruck className="text-blue-700 text-2xl" />
            </div>

            <h2 className="text-lg font-bold text-blue-700 mb-2">
              Fast Delivery
            </h2>

            <p className="text-sm text-gray-600">
              Reliable delivery network for customers and businesses.
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

            <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaHandshake className="text-yellow-600 text-2xl" />
            </div>

            <h2 className="text-lg font-bold text-yellow-600 mb-2">
              Trusted Marketplace
            </h2>

            <p className="text-sm text-gray-600">
              Transparent platform connecting farmers and buyers.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;