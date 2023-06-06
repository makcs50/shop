import React from "react";
import Product from "./Product";
import styles from "./Products.module.css"



const Products = () => {
  return (
    <>
      <div className={styles.styleMain_content}>
        <Product title='iPhone' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
        <Product title='dwaddwa' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
        <Product title='dwadwadwadw' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
        <Product title='iPhone' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
        <Product title='iPhone' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
        <Product title='iPhone' price='5000' img='http://intocode.ru/d/react-project-1/images/1.jpg' />
      </div>
      </>

  );
};

export default Products;