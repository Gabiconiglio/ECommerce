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
import CartDetail from "../Screens/CartDetail.jsx";
import SearchScreen from "../Screens/SearchScreen.jsx";

function Diagram() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Home />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/Productos/Games" element={<Games />} />
          <Route path="/Productos/Games/Detail/:id" element={<Games />} />
          <Route path="/Productos/Console" element={<Console />} />
          <Route path="/Productos/Console/Detail/:id" element={<Console />} />
          <Route path="/Productos/Accessories" element={<Accessories />} />
          <Route path="/Productos/Accessories/Detail/:id" element={<Accessories  />} />
          <Route path="/Productos/TechnicalService" element={<TechnicalService />} />
          <Route path="/Search/:query" element={<SearchScreen/>} />
          <Route path="/Search/:query/Detail/:id" element={<SearchScreen/>} />
          <Route path="/CartDetail" element={<CartDetail />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Notfound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Diagram;
