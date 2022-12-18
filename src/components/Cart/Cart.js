import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../Store/CartReducer";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartVal = useSelector((state) => state.cart.cartValues);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartVal.map((ele) => {
          return (
            <CartItem
              key={ele.id}
              title={ele.title}
              price={ele.price}
              description={ele.description}
              id={ele.id}
              quantity={ele.quantity}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
