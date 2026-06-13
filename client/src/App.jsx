import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ModeBanner from "./components/ModeBanner";
import ModeSelection from "./components/ModeSelection";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Checkout from "./pages/Checkout";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || null
  );

  const isAdmin =
    localStorage.getItem("admin") === "true";

  // Show mode selection only if no mode selected
  if (!mode) {
    return (
      <ModeSelection
        setMode={(selectedMode) => {
          localStorage.setItem("mode", selectedMode);
          setMode(selectedMode);
        }}
      />
    );
  }

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />

      <ModeBanner mode={mode} />

      <Routes>
        <Route
          path="/"
          element={<Home mode={mode} />}
        />

        <Route
          path="/products"
          element={<Products mode={mode} />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Admin />
            ) : (
              <AdminLogin
                onLogin={() => {
                  window.location.href = "/admin";
                }}
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;