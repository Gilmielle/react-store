import React from "react";

const BaseFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="#">
              Каталог
            </a>
          </li>
          <li>
            <a className="footer__link" href="tel:88006009009">
              8 800 600 90 09
            </a>
          </li>
          <li>
            <a className="footer__link" href="mailto:hi@technozavrrr.com">
              hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Распродажа
            </a>
          </li>
          <li>
            <a className="footer__link footer__link--medium" href="#">
              Заказать звонок
            </a>
          </li>
        </ul>

        <ul className="footer__social social">
          <li className="social__item">
            <a className="social__link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlinkHref="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlinkHref="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlinkHref="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlinkHref="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlinkHref="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p className="footer__desc">
          Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются
          в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ, в&nbsp;том числе
          об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>

        <ul className="footer__data">
          <li>
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Публичная оферта
            </a>
          </li>
        </ul>

        <span className="footer__copyright">© 2020 Технозавррр</span>
      </div>
    </footer>
  );
};

export default BaseFooter;
