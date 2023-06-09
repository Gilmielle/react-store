import React from "react";

const BasePagination = () => {
  return (
    <ul className="catalog__pagination pagination">
      <li className="pagination__item">
        <a
          className="pagination__link pagination__link--arrow pagination__link--disabled"
          aria-label="Предыдущая страница"
        >
          <svg width="8" height="14" fill="currentColor">
            <use xlinkHref="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link pagination__link--current">1</a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="#">
          2
        </a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="#">
          3
        </a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="#">
          4
        </a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="#">
          ...
        </a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="#">
          10
        </a>
      </li>
      <li className="pagination__item">
        <a
          className="pagination__link pagination__link--arrow"
          href="#"
          aria-label="Следующая страница"
        >
          <svg width="8" height="14" fill="currentColor">
            <use xlinkHref="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default BasePagination;
