import Loading from "../Components/Loading/Loading.jsx"
import Hero from "../Components/Hero/Hero.jsx";
import VideoJuegos from "../Components/Imagines/Videojuegos.jpg";
import Consolas from "../Components/Imagines/Consolas.jpg";
import Accesorios from "../Components/Imagines/Mandos.jpg";
import Servicio from "../Components/Imagines/ServicioTecnico.jpg";
import TxtProducto from "../Components/Imagines/TxtProducto.png"
import "../Screens/Css/Products.css";

function Products() {
  const DesVideo =
    "We have the largest stock of video games on the market and for all consoles.";
  const DesConsola =
    "We sell new or used consoles in excellent condition. They are also received in the form of payment";
  const DesAccesorios =
    "Are you looking for a new controller, Amiibos or accessories for your console, this is your place";
  const DesServicio =
    "At our location we have specialized technical service to take care of your console";

  const products = [
    {
      id: 1,
      name: "VideoGames",
      image: VideoJuegos,
      descriptions: DesVideo,
      butInfo: "Get Games",
      category: "Games",
    },
    {
      id: 2,
      name: "Consoles",
      image: Consolas,
      descriptions: DesConsola,
      butInfo: "Get Consoles",
      category: "Console",
    },
    {
      id: 3,
      name: "Accessories",
      image: Accesorios,
      descriptions: DesAccesorios,
      butInfo: "Get accessories",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Tech-Service",
      image: Servicio,
      descriptions: DesServicio,
      butInfo: "Get technical service",
      category: "TechnicalService",
    },
  ];

  return (
    <>
      <img src={TxtProducto} alt="TxtProducto" className="photoProducts" />
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
         <Loading/>
        )}
      </div>
    </>
  );
}

export default Products;
