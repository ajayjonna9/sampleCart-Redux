import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import axios from "axios";
import { cartActions } from "./components/Store/CartReducer";
let firstTime = true;
function App() {
  const iscartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cart);
  const dispatcher = useDispatch();
  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      async function getdata() {
        try {
          const res = await axios.get(
            "https://auth-79e64-default-rtdb.firebaseio.com/cart.json"
          );

          console.log(res);
          dispatcher(cartActions.addAllItems(res.data));
        } catch (err) {
          alert("wrong");
        }
      }
      getdata();
      return;
    }
    async function postData() {
      try {
        const res = await axios.put(
          "https://auth-79e64-default-rtdb.firebaseio.com/cart.json",
          cart
        );
        console.log(res);
      } catch (err) {
        alert("wrong");
      }
    }
    postData();
  }, [cart]);
  return (
    <Layout>
      {iscartOpen && <Cart />}

      <Products />
    </Layout>
  );
}

export default App;
