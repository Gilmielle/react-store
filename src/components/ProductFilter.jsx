import React from "react";

const ProductFilter = () => {
  return (
    <aside className="filter">
      <h2 className="filter__title">Фильтры</h2>

      <form className="filter__form form" action="#" method="get">
        <fieldset className="form__block">
          <legend className="form__legend">Цена</legend>
          <label className="form__label form__label--price">
            <input className="form__input" type="text" name="min-price" />
            <span className="form__value">От</span>
          </label>
          <label className="form__label form__label--price">
            <input className="form__input" type="text" name="max-price" />
            <span className="form__value">До</span>
          </label>
        </fieldset>

        <fieldset className="form__block">
          <legend className="form__legend">Категория</legend>
          <label className="form__label form__label--select">
            <select className="form__select" name="category">
              <option value="value1">Все категории</option>
              <option value="value2">Зубные щетки</option>
              <option value="value3">Телефоны</option>
              <option value="value4">Спортинвентарь</option>
            </select>
          </label>
        </fieldset>

        <fieldset className="form__block">
          <legend className="form__legend">Цвет</legend>
          <ul className="colors">
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#73B6EA" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#FFBE15" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#939393" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#8BE000" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#FF6B00" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#FFF" }}
                ></span>
              </label>
            </li>
            <li className="colors__item">
              <label className="colors__label">
                <input
                  className="colors__radio sr-only"
                  type="radio"
                  name="color"
                />
                <span
                  className="colors__value"
                  style={{ backgroundColor: "#000" }}
                ></span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className="form__block">
          <legend className="form__legend">Объемб в ГБ</legend>
          <ul className="check-list">
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  8<span>(313)</span>
                </span>
              </label>
            </li>
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  16
                  <span>(461)</span>
                </span>
              </label>
            </li>
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  32
                  <span>(313)</span>
                </span>
              </label>
            </li>
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  64
                  <span>(313)</span>
                </span>
              </label>
            </li>
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  128
                  <span>(313)</span>
                </span>
              </label>
            </li>
            <li className="check-list__item">
              <label className="check-list__label">
                <input
                  className="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                />
                <span className="check-list__desc">
                  264
                  <span>(313)</span>
                </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <button className="filter__submit button button--primery" type="submit">
          Применить
        </button>
        <button className="filter__reset button button--second" type="button">
          Сбросить
        </button>
      </form>
    </aside>
  );
};

export default ProductFilter;
