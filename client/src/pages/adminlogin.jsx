import { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "agrimart123") {
      localStorage.setItem("admin", "true");
      onLogin();
    } else {
      alert("❌ Wrong Password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 to-emerald-100">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          🔐 Admin Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter administrator password
        </p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            border
            border-gray-300
            p-3
            rounded-lg
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            mb-4
          "
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-green-600
            hover:bg-green-700
            text-white
            py-3
            rounded-lg
            font-semibold
            transition
          "
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default AdminLogin;