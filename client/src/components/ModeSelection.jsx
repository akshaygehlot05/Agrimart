import modeBg from "../assets/agrimart-mode.jpeg";
import logo from "../assets/agrimart-logo.jpeg";
import { FaShoppingBasket } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";


const ModeSelection = ({ setMode }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${modeBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Spotlight Effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 text-center px-6">

        {/* Logo */}
        <img
          src={logo}
          alt="AgriMart Logo"
          className="w-28 h-28 mx-auto mb-6 rounded-full shadow-2xl hover:scale-110 transition duration-500"
        />

        {/* Title */}
        <h1
          className="
            text-6xl md:text-7xl
            font-extrabold
            text-white
            mb-4
            drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]
            animate-pulse
          "
        >
          Welcome to AgriMart
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-200 tracking-wide mb-12">
          Connecting Farmers, Businesses & Customers
        </p>

        <div className="flex justify-center gap-10 flex-wrap">

          {/* Retail Card */}
          <div className="relative">
            {/* Green Glow */}
            <div className="absolute inset-0 bg-green-500/30 blur-3xl rounded-full"></div>

            <div
              onClick={() => setMode("B2C")}
              className="
                relative z-10
                w-74
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-8
                text-white
                cursor-pointer
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-green-500/50
                transition-all
                duration-300
              "
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaShoppingBasket className="text-green-400 text-3xl" />
                Retail Customer
              </h2>

              <div className="text-left mb-4 space-y-2">
                <p>✓ Individual Customers</p>
                <p>✓ Small Orders</p>
                <p>✓ Home Delivery</p>
              </div>

              <button className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition">
                Enter Retail Marketplace
              </button>
            </div>
          </div>

          {/* Wholesale Card */}
          <div className="relative">
            {/* Blue Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>

            <div
              onClick={() => setMode("B2B")}
              className="
                relative z-10
                w-74
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-5.5
                text-white
                cursor-pointer
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-blue-500/50
                transition-all
                duration-300
              "
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MdWarehouse className="text-blue-400 text-3xl" />
                Wholesale Buyer
              </h2>

              <div className="text-left mb-4 space-y-2">
                <p>✓ Bulk Orders</p>
                <p>✓ Business Pricing</p>
                <p>✓ Distributor Network</p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition">
                Enter Wholesale Marketplace
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModeSelection;