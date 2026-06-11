import logo from "../assets/agrimart-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white py-4 px-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img
            src={logo}
            alt="AgriMart Logo"
            className="h-16 w-auto object-contain"
        />

        <ul className="flex gap-8 font-medium">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </div>
    </nav>
  );
};

export default Navbar;