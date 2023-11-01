import { Link } from "react-router-dom";
import Hero from "../Components/Hero/Hero.jsx";
import VideoJuegos from "../Components/Imagines/Videojuegos.jpg";
import Consolas from "../Components/Imagines/Consolas.jpg";
import Accesorios from "../Components/Imagines/Mandos.jpg";
import Servicio from "../Components/Imagines/ServicioTecnico.jpg";
import "../Screens/Css/Products.css";

function Products() {
  const DesVideo =
    "Tenemos el mayor stock de videojuegos del mercado y para todas las consolas.";
  const DesConsola =
    "Vendemos consolas nuevas o de segunda mano en excelentes condiciones";
  const DesAccesorios =
    "Buscas un mando nuevo, Amiibos o accesorios para tu consola, este es tu lugar";
  const DesServicio =
    "En nuestro local tenemos servicio técnico especializado para cuidar de tu consola";

  const products = [
    {
      id: 1,
      name: "VideoJuegos",
      image: VideoJuegos,
      descriptions: DesServicio,
      butInfo: "Get Games",
      category: "Games",
    },
    {
      id: 2,
      name: "Consolas",
      image: Consolas,
      descriptions: DesConsola,
      butInfo: "Get Consoles",
      category: "Console",
    },
    {
      id: 3,
      name: "Accesorios",
      image: Accesorios,
      descriptions: DesAccesorios,
      butInfo: "Get accessories",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Servicio Técnico",
      image: Servicio,
      descriptions: DesServicio,
      butInfo: "Get technical service",
      category: "TechnicalService",
    },
  ];

  return (
    <>
      <h1 id="tituloProductos">Productos</h1>
      <div className="join" id="heros">
        {products.length > 0 ? (
          products
            .slice(0, 4)
            .map((prod) => (
              <Hero
                key={prod.id}
                image={prod.image}
                name={prod.name}
                descriptions={prod.descriptions}
                butInfo={prod.butInfo}
                category={prod.category}
              />
            ))
        ) : (
          <>
            <p>Aca va el loading</p>
          </>
        )}
      </div>
    </>
  );
}

export default Products;
