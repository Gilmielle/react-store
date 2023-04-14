import React from "react";
import CartIndicator from "./CartIndicator.jsx";

const BaseHeader = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <span className="header__info">Каталог</span>

        <a className="header__logo" href="#">
          <img
            src="../img/svg/logo-tech.svg"
            alt="Логотип интернет магазина Технозавррр"
            width="190"
            height="33"
          />
        </a>

        <a className="header__tel" href="tel:8 800 600 90 09">
          8 800 600 90 09
        </a>

        <CartIndicator />
      </div>
    </header>
  );
};

export default BaseHeader;
