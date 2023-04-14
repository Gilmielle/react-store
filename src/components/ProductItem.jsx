import React, { useEffect, useState } from "react";
import getPriceInRub from "../utils/getPriceInRub.js";
import getAvailableColors from "../utils/getAvailableColors.js";

const ProductItem = ({ product }) => {
  const [availableColors] = getAvailableColors(product);
  // const [checkedColor, setCheckedColor] = useState(availableColors[0]);

  useEffect(() => {
    console.debug(checkedColor);
  }, []);

  // const handleRadioChange = (e) => {
  //   const { target } = e
  //   const { value } = target
  //   setPeriodFilters(periodFilters => {
  //     return periodFilters.map(periodFilter => {
  //       return {
  //         ...periodFilter,
  //         radio: {
  //           ...periodFilter.radio,
  //           isChecked: periodFilter.radio.value === value
  //         }
  //       }
  //     })
  //   })
  // }

  const handleColorChange = (e, checkedColor) => {
    const { target } = e;
    const { value } = target;
    console.debug(checkedColor);
    // const colorData = product.colors.filter(
    //   (item) => item.color.id === checkedColor
    // );
    // if (colorData.gallery) {
    //   $refs.productImg.src = colorData.gallery;
    // }
    //
    // this.productColorId = checkedColor.id;
    //
    // this.productOfferId = this.product.offers.find(
    //   (offer) =>
    //     offer.propValues["0"].value.replaceAll("ё", "е") ===
    //     checkedColor.title.replaceAll("ё", "е")
    // )?.id;
  };

  return (
    <li className="catalog__item">
      <a className="catalog__pic" href="#">
        <img src={product.preview.file.url} alt={product.title} />
      </a>

      <h3 className="catalog__title">
        <a href="#">{product.title}</a>
      </h3>

      <span className="catalog__price">{getPriceInRub(product.price)}</span>

      {(() => {
        switch (true) {
          case availableColors.length > 0:
            return (
              <ul className="colors colors--black">
                {availableColors.map((productColor, index) => {
                  return (
                    <li className="colors__item" key={productColor.color.id}>
                      <label className="colors__label">
                        <input
                          className="colors__radio sr-only"
                          type="radio"
                          name={`color-item-${product.id}`}
                          value={productColor.color.id}
                          onChange={(e) =>
                            handleColorChange(e, productColor.color)
                          }
                          checked={index === 0}
                        />
                        <span
                          className="colors__value"
                          aria-label={productColor.color.title}
                          style={{ backgroundColor: productColor.color.code }}
                        ></span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            );
          default:
            return <div></div>;
        }
      })()}
    </li>
  );
};

export default ProductItem;
