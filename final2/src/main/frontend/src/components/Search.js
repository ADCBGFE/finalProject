import React, { Fragment, useState } from "react";
import { useGlobalContext } from "../context/test";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useProductsContext } from "../context/products_context";
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import "./Search.css";
export default function SearchForm() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  return (
    <Fragment>
      {/* {isSidebarOpen && <button className="search-btn" onClick={closeSidebar}>
        <GiCancel></GiCancel>
      </button>} */}
      <section className="wrapper">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="search-container">
            <label htmlFor="name"></label>
            <input type='text'
              name='text'
              value={text}
              placeholder='도서명을 입력하세요'
              onChange={updateFilters} />
            <button>
              Search
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
}
