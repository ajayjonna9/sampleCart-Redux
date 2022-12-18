import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../Store/CartReducer";
const CartItem = (props) => {
  const dispatcher = useDispatch();
  const onRemove = () => {
    dispatcher(cartActions.removeFromCart(props.id));
  };
  const onAdd = () => {
    const obj = {
      title: props.title,
      price: props.price,
      description: props.description,
      id: props.id,
      quantity: 1,
    };
    dispatcher(cartActions.addToCart(obj));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2)}{" "} */}
          <span className={classes.itemprice}>
            (${props.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
