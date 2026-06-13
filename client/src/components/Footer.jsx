import { Link } from "react-router-dom";

const Footer = ({ mode }) => {
  const isWholesale = mode === "B2B";
  return (
    <footer className={`mt-7 ${isWholesale ? "bg-blue-800" : "bg-green-800"} text-white rounded-2xl p-6 shadow-lg`}>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            🌱 AgriMart
          </h2>

          <p className="text-lg text-green-100">
            Connecting Farmers, Retail Customers &
            Businesses Across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className=" text-2xl font-semibold text-base  mb-2">
            Quick Links
          </h2>

          <ul className="space-y-1 text-lg">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-2xl text-base mb-2">
            Contact Info
          </h2>

          <div className="space-y-1 text-sm text-green-100">
            <p>📍 Jodhpur, Rajasthan</p>
            <p>📧 support@agrimart.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>

      </div>

      <hr className="my-4 border-green-700" />

      <p className="text-center text-sm text-green-100">
        © 2026 AgriMart. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;