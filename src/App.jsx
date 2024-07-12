import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav />
      <Aside />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product/:id"} element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
