import React from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = ({ productItems = [] }) => {
  return (
    <ul className="catalog__list">
      {productItems.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
