import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductCat from "./pages/ProductCat";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";

function App() {
  return (
    <HelmetProvider>
      <div className="grid grid-cols-5">
        <Nav />
        <Aside />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product/:idx"} element={<ProductDetail />} />
          <Route path={"/:cat"} element={<ProductCat />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App;
