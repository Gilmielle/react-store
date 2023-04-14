import React, { useEffect, useState } from "react";
import ProductFilter from "../components/ProductFilter.jsx";
import ProductList from "../components/ProductList.jsx";
import BasePagination from "../components/BasePagination.jsx";
import { useQuery } from "react-query";
import { API_BASE_URL, idQueries, queryOptions } from "../constants/index.js";
import axios from "axios";
import BaseLoader from "../components/BaseLoader.jsx";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [filterPriceFrom, setFilterPriceFrom] = useState(0);
  const [filterPriceTo, setFilterPriceTo] = useState(0);
  const [filterCategoryId, setFilterCategoryId] = useState(0);
  //   filterProps: {},

  const getProductDataFetchParams = () => {
    const params = {
      page: page,
      limit: productsPerPage,
      categoryId: filterCategoryId,
    };
    if (filterPriceFrom) {
      params.minPrice = filterPriceFrom;
    }
    if (filterPriceTo) {
      params.maxPrice = filterPriceTo;
    }
    // if(filterProps) {
    //   params.props = filterProps
    // }

    return params;
  };

  let {
    data,
    isLoading,
    isError,
    error,
    refetch: loadProducts,
  } = useQuery(
    idQueries.getProductData,
    () =>
      axios
        .get(API_BASE_URL + "/api/products", {
          params: getProductDataFetchParams(),
        })
        .then((response) => response.data),
    queryOptions
  );

  useEffect(() => {
    const data = loadProducts();
  }, []);

  useEffect(() => {
    if (!isLoading && !isError) {
      setProducts(data);
    }
  }, [data]);

  const handleClick = () => {
    const data = loadProducts();
  };

  return (
    <main className="content container">
      <div className="content__top content__top--catalog">
        <h1 className="content__title">Каталог</h1>
        <span className="content__info">152 товара</span>
      </div>

      <div className="content__catalog">
        <ProductFilter />

        <section className="catalog">
          {(() => {
            switch (true) {
              case isLoading:
                return (
                  <div className="d-flex">
                    <BaseLoader className="p-relative" />
                  </div>
                );
              case isError:
                return (
                  <div className="d-flex">
                    <p>Произошла ошибка при загрузке товаров</p>
                    <button
                      onClick={handleClick}
                      className="button button--reload"
                    >
                      Попробовать ещё раз
                    </button>
                  </div>
                );
              default:
                return <ProductList productItems={products?.items} />;
            }
          })()}
          <BasePagination />
        </section>
      </div>
    </main>
  );
};

export default MainPage;
