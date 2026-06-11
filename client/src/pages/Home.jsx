const Home = ({ mode }) => {
  return (
        <section
        className="relative bg-cover bg-center py-32"
        style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
        }}
        >
        <div className="relative z-10"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white px-6">
            <h1 className="text-6xl font-bold mb-6">
                {mode === "B2C"
                    ? "Fresh Agricultural Products"
                    : "Bulk Agricultural Supply Solutions"}
            </h1>

           <p className="text-xl">
                {mode === "B2C"
                    ? "Buy quality agricultural products for your farm and home."
                    : "Connect with distributors and purchase in bulk at wholesale prices."}
            </p>

            <div className="flex justify-center gap-4">
            <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Explore Products
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
                Contact Us
            </button>
            </div>
        </div>
        </section>
    );
};

export default Home;