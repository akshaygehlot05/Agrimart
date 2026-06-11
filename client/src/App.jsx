import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ModeBanner from "./components/ModeBanner";
import ModeSelection from "./components/ModeSelection";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  const [mode, setMode] = useState(null);

  // Show mode selection first
  if (!mode) {
    return <ModeSelection setMode={setMode} />;
  }

  return (
    <>
      <Navbar />

      <ModeBanner mode={mode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;