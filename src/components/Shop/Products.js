import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Data = [
    {
      id: "m1",
      name: "Book1",
      description: "indian book volume1",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Book2",
      description: "indian book volume2",
      price: 16.5,
    },
    {
      id: "m3",
      name: "book3",
      description: "American,book",
      price: 12.99,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Data.map((ele) => {
          return (
            <ProductItem
              key={ele.id}
              title={ele.name}
              price={ele.price}
              description={ele.description}
              id={ele.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
