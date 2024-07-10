import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav />
      <Aside />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
