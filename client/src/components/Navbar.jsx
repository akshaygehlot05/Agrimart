import logo from "../assets/agrimart-logo.jpeg";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ mode }) => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const isWholesale = mode === "B2B";

  const switchMode = () => {
    localStorage.removeItem("mode");
    window.location.href = "/";
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md shadow-2xl transition-all duration-500 ${
        isWholesale
          ? "bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900"
          : "bg-gradient-to-r from-green-800 via-emerald-700 to-green-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="AgriMart"
            className="
              h-14 w-14 rounded-full border-2 border-white
              shadow-lg hover:scale-110 hover:rotate-6
              transition-all duration-300
            "
          />

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              AgriMart
            </h1>

            <p className="text-xs text-white/80">
              {isWholesale
                ? "Wholesale Agricultural Marketplace"
                : "Smart Agriculture Marketplace"}
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium">

          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-yellow-300 transition">
            Products
          </Link>

          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>

          <Link to="/admin" className="hover:text-yellow-300 transition">
            Admin
          </Link>

          {/* Mode Badge */}
          <div
            className={`px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse ${
              isWholesale
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          >
            {isWholesale
              ? "🏢 Wholesale"
              : "🌱 Retail"}
          </div>

          {/* Switch Mode */}
          <button
            onClick={switchMode}
            className="
              bg-yellow-500 hover:bg-yellow-600
              px-3 py-2 rounded-lg text-white
              font-semibold transition
            "
          >
            Switch Mode
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className={`
              flex items-center gap-2
              px-4 py-2 rounded-lg font-semibold
              shadow-lg hover:scale-105
              transition-all duration-300
              ${
                isWholesale
                  ? "bg-white text-blue-700 hover:shadow-blue-500/50"
                  : "bg-white text-green-700 hover:shadow-green-500/50"
              }
            `}
          >
            <FaShoppingCart />
            Cart ({cartItems.length})
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-lg text-white px-6 py-4 space-y-4">

          <Link to="/" className="block">Home</Link>
          <Link to="/products" className="block">Products</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/admin" className="block">Admin</Link>

          <button
            onClick={switchMode}
            className="bg-yellow-500 px-4 py-2 rounded-lg w-full"
          >
            Switch Mode
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-2"
          >
            <FaShoppingCart />
            Cart ({cartItems.length})
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;