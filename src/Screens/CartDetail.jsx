import { React} from "react";
import {getFirestore,collection,addDoc} from "firebase/firestore";
import {useCartFunctions} from "../Components/Hook/CartFunctions.js"
import { CiGift } from "react-icons/ci";
import Form from "../Components/Form/Form.jsx"
import Loading from "../Components/Loading/Loading.jsx";
import CardsDetail from "../Components/CardsDetail/CardsDetail.jsx";
import "./Css/CartDetail.css";

function CartDetail() {

  const {isChecked,productData,Total,isLoading,text,btnEmpty,userNameRef,userEmailRef,UpdateInfo,removeItem,removeAllItem,setProductData,setTotal} = useCartFunctions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedInfo = await UpdateInfo(productData);

   
    setProductData(updatedInfo.productData);
    setTotal(updatedInfo.total);

    const db = getFirestore();
    const collectionRef = collection(db, "orders");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: updatedInfo.productData,
      totalPrice: updatedInfo.total,
    };

    addDoc(collectionRef, order).then((res) =>
      alert(`The order has been sent successfully, your order number is: ${res.id}`)
    );
  };

  return (
    <div>
      <h3 id="textCartDetail">Cart Detail</h3>
      {text ? (
        <p id="textEmptycart" className="join">
          <CiGift id="Gift" />I do not add any products to the shopping cart!!
        </p>
      ) : null}
      {isLoading ? (
        <div className="loadingCartDetail">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap" id="CardProducto">
          {productData.map((item) => (
            <div key={item.id} className="product-card">
              <CardsDetail
                key={item.id}
                background_image={item.background_image}
                name={item.name}
                price={item.price}
                count={item.CantItem}
                customKey={item.key}
                removeItem={() => removeItem(item.key)}
              />
            </div>
          ))}
        </div>
      )}
      {btnEmpty ? (
        <>
          <div id="separator"></div>
          <button
            className={
              isChecked ? "btn btn-outline" : "btn btn-active btn-neutral"
            }
            onClick={() => removeAllItem()}
            id="btnEmptyCart"
          >
            Empty shopping cart
          </button>
          <div id="invoiceDetail">
            <h3 id="titleCartDetail">Purchase Detail</h3>
            <Form
            handleSubmit={handleSubmit}
            Total={Total}
            userNameRef={userNameRef}
            userEmailRef={userEmailRef}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CartDetail;
