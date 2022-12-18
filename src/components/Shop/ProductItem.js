import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../Store/CartReducer";

const ProductItem = (props) => {
  const cartVal = useSelector((state) => state.cart.cartValues);

  const dispatcher = useDispatch();

  const onAddToCart = () => {
    const obj = {
      title: props.title,
      price: props.price,
      description: props.description,
      id: props.id,
      quantity: 1,
    };
    console.log(obj);
    dispatcher(cartActions.addToCart(obj));
    console.log(cartVal);
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
