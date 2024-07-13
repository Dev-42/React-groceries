import React from "react";
import styles from "./GroceryItem.module.css";

const GroceryItem = ({ image, name, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.groceryContainer}>
        <img src={image} alt="itemImg" className={styles.image} />
        <h3 className={styles.ProductName}>{name}</h3>
        <h5 className={styles.ProductPrice}>{price}</h5>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default GroceryItem;
