import useFetchProduct from "../Components/Hook/useFetchProduct.js"
import Loading from "../Components/Loading/Loading.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import TxtProducto from "../Components/Imagines/TxtProducto.png";
import "../Screens/Css/Products.css";

function Products() {
  const [items] =useFetchProduct();

  return (
    <>
      <img src={TxtProducto} alt="TxtProducto" className="photoProducts" />
      <div className="join" id="heros">
        {items.length > 0 ? (
          items
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
          <Loading />
        )}
      </div>
    </>
  );
}

export default Products;
