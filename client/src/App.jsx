import { useState } from "react";
import Navbar from "./components/Navbar";
import ModeToggle from "./components/ModeToggle";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
  const [mode, setMode] = useState("B2C");

  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-6">
        <ModeToggle
          mode={mode}
          setMode={setMode}
        />
      </div>

      <div className="text-center mt-4">
        Current Mode: {mode}
      </div>

      <Home />
      <Categories />
      <ProductList mode={mode} />
      
    </>
  );
}

export default App;