import { useState } from "react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "agrimart123") {
      localStorage.setItem("admin", "true");

      // Redirect directly to admin dashboard
      window.location.href = "/admin";
    } else {
      alert("❌ Wrong Password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          🔐 Admin Login
        </h2>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg w-full font-semibold transition"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default AdminLogin;