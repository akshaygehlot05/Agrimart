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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated Background Lights */}

      <div className="absolute top-20 left-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-yellow-400/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Main Spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 text-center px-6">

        {/* Logo */}

        <img
          src={logo}
          alt="AgriMart Logo"
          className="
            w-32 h-32
            mx-auto
            mb-6
            rounded-full
            border-4 border-white/30
            shadow-[0_0_50px_rgba(255,255,255,0.5)]
            hover:scale-110
            hover:rotate-6
            transition-all
            duration-500
          "
        />

        {/* Title */}

        <h1
          className="
            text-6xl md:text-8xl
            font-black
            text-white
            mb-4
            tracking-wide
            drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]
            animate-pulse
          "
        >
          AgriMart
        </h1>

        <p className="text-2xl text-gray-200 tracking-wide mb-3">
          Connecting Farmers, Businesses & Customers
        </p>

        <p className="text-green-200 text-lg mb-12">
          🌱 Empowering Agriculture Through Technology 🚜
        </p>

        {/* Mode Cards */}

        <div className="flex justify-center gap-12 flex-wrap">

          {/* Retail Card */}

          <div className="relative">

            <div className="absolute inset-0 bg-green-500/30 blur-3xl rounded-full"></div>

            <div
              onClick={() => {
                  localStorage.setItem("mode", "B2C");
                  setMode("B2C");
                }}
              className="
                relative z-10
                w-[340px]
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-3xl
                p-8
                text-white
                cursor-pointer
                hover:scale-105
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-green-500/50
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center mb-5">
                <FaShoppingBasket className="text-green-400 text-6xl" />
              </div>

              <h2 className="text-3xl font-bold mb-6">
                Retail Customer
              </h2>

              <div className="text-left mb-8 space-y-3 text-lg">
                <p>✅ Individual Customers</p>
                <p>✅ Small Orders</p>
                <p>✅ Home Delivery</p>
                <p>✅ Direct Purchase</p>
              </div>

              <button
                className="
                  bg-green-600
                  hover:bg-green-700
                  w-full
                  py-3
                  rounded-xl
                  font-bold
                  shadow-lg
                  hover:shadow-green-500/50
                  transition-all
                "
              >
                Enter Retail Marketplace
              </button>
            </div>

          </div>

          {/* Wholesale Card */}

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>

            <div
              onClick={() => {
                  localStorage.setItem("mode", "B2B");
                  setMode("B2B");
                }}
              className="
                relative z-10
                w-[340px]
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-3xl
                p-8
                text-white
                cursor-pointer
                hover:scale-105
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-blue-500/50
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center mb-5">
                <MdWarehouse className="text-blue-400 text-6xl" />
              </div>

              <h2 className="text-3xl font-bold mb-6">
                Wholesale Buyer
              </h2>

              <div className="text-left mb-8 space-y-3 text-lg">
                <p>✅ Bulk Orders</p>
                <p>✅ Business Pricing</p>
                <p>✅ Distributor Network</p>
                <p>✅ Quote Requests</p>
              </div>

              <button
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  w-full
                  py-3
                  rounded-xl
                  font-bold
                  shadow-lg
                  hover:shadow-blue-500/50
                  transition-all
                "
              >
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