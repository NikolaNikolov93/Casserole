import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Recepies from "./pages/recepies/Recepies";
import About from "./pages/About";
import Footer from "./components/footer/Footer";

function App() {
  // /**
  //  * Toggle Menu
  //  *
  //  * @param c
  //  * @param b
  //  * @param d
  //  */
  //   const toggleMenu = (c, b, d) => {
  //     console.log(hamburgerMenuContent);
  //     if (hamburgerMenuContent.classList.contains("active")) {
  //       hamburgerMenuContent.classList.remove("active");
  //     } else {
  //       hamburgerMenuContent.classList.add("active");
  //     }
  //   };

  return (
    <>
      <Navbar />
      <div className="site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recepies" element={<Recepies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
