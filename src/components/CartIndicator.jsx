import React from "react";

const CartIndicator = () => {
  return (
    <a
      className="header__cart"
      href="cart.html"
      aria-label="Корзина с товарами"
    >
      <svg width="30" height="21" fill="currentColor">
        <use xlinkHref="#icon-cart"></use>
      </svg>
      <span className="header__count" aria-label="Количество товаров">
        3
      </span>
    </a>
  );
};

export default CartIndicator;
