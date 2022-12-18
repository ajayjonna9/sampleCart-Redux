import classes from "./CartButton.module.css";

import { cartActions } from "../Store/CartReducer";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const carttotal = useSelector((state) => state.cart.cartTotal);
  const carttota = useSelector((state) => state.cart.cartValues);
  const dispatcher = useDispatch();
  const onCartClick = () => {
    console.log("cart", carttota);
    dispatcher(cartActions.cartOpen());
  };
  return (
    <button className={classes.button} onClick={onCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{carttotal}</span>
    </button>
  );
};

export default CartButton;
