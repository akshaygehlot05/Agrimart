import logo from "../assets/agrimart-logo.jpeg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-green-700 shadow-md">
        <div className="container mx-auto px-8 py-3 flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-3">
            <img
                src={logo}
                alt="AgriMart"
                className="h-14 w-auto"
            />
            <div>
                <h1 className="text-3xl font-bold">AgriMart</h1>
                <p className="text-xs text-green-100">
                    Smart Agriculture Marketplace
                </p>
            </div>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-8 text-white font-medium">

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin">Admin</Link>
  

            <Link
            to="/cart"
            className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg"
            >
            <FaShoppingCart /> Cart ({cartItems.length})
            </Link>

            </div>

        </div>
    </nav>
  );
};

export default Navbar;