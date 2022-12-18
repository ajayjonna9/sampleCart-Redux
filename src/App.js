import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import axios from "axios";
function App() {
  const iscartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    async function postData() {
      try {
        const res = await axios.put(
          "https://auth-79e64-default-rtdb.firebaseio.com/cart.json",
          cart
        );
        console.log(res);
      } catch (err) {}
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
