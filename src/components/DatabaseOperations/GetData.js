import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const GetData = async () => {
  const cart = useSelector((state) => state.cart);

  try {
    const res = await axios.put(
      "https://auth-79e64-default-rtdb.firebaseio.com/cart.json",
      cart
    );
    console.log(res);
  } catch (err) {
    alert("wrong");
  }
};

export default GetData;
