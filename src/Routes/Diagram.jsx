import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Home from "../Screens/Home.jsx";
import Products from "../Screens/Products.jsx";
import Games from "../Screens/Games.jsx";
import Console from "../Screens/Console.jsx";
import Accessories from "../Screens/Accesories.jsx"
import TechnicalService from "../Screens/TechnicalService.jsx";
import About from "../Screens/About.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Notfound404 from "../Screens/NotFount404.jsx"
import Detail from "../Screens/Detail.jsx";

function Diagram() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/Productos/Games" element={<Games />} />
          <Route path="/Productos/Games/:id" element={<Games />} />
          {/* <Route path="/Productos/Games" element={<Detail />} /> */}
          <Route path="/Productos/Console" element={<Console />} />
          <Route path="/Productos/Accessories" element={<Accessories />} />
          <Route path="/Productos/TechnicalService" element={<TechnicalService />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Notfound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Diagram;
