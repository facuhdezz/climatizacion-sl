import { Route, Routes, useLocation } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductCat from "./pages/ProductCat";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import CartWidget from "./components/CartWidget";
import Cart from "./pages/Cart";

function App() {

  const location = useLocation();

  return (
      <HelmetProvider>
        <div className="grid grid-cols-5">
          <Nav />
          <Aside />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/product/:id"} element={<ProductDetail />} />
            <Route path={"/:cat"} element={<ProductCat />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/carrito"} element={<Cart />} />
          </Routes>
          {location.pathname !== '/carrito' && <CartWidget />}
          <Footer />
        </div>
      </HelmetProvider>
  )
}

export default App;
