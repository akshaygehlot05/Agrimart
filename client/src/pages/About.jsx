function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-8">
          About AgriMart
        </h1>

        <p className="text-lg text-gray-700 leading-8 mb-6">
          AgriMart is a modern agricultural marketplace that connects
          farmers, retailers, wholesalers, and customers on a single platform.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-6">
          Our mission is to make agricultural products easily accessible,
          provide fair pricing, and create a digital ecosystem for India's
          farming community.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              🌾 Quality Products
            </h2>
            <p className="text-gray-600">
              Fresh seeds, fertilizers, tools, and agricultural products.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              🚚 Fast Delivery
            </h2>
            <p className="text-gray-600">
              Reliable delivery network for customers and businesses.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-yellow-700 mb-3">
              🤝 Trusted Marketplace
            </h2>
            <p className="text-gray-600">
              Connecting farmers and buyers through a transparent platform.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;