import React from "react";
import style from "./Products.module.css"

const Product = (props) => {
  return (
    <div className={style.product}>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <button>Купить</button>
    </div>
  );
};

export default Product;