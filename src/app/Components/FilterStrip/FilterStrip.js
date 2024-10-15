"use client";
import { useState } from "react";
import VerticalFilter from "../VerticalFilter/VerticalFilter";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./FilterStrip.css";

export default function FilterStrip({ products }) {
  const [showFilter, setShowFilter] = useState(false); // Start with filter hidden on smaller screens

  const toggleFilterVisibility = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="mainContainer">
      <div className="filterStrip">
        <div className="itemsAndFilter">
          {/* This will only show on larger screens */}
          <div className="itemsCount">3425 Items</div>
          <div className="toggleFilter" onClick={toggleFilterVisibility}>
            {showFilter ? "<    HIDE FILTER" : ">    SHOW FILTER"}
          </div>
        </div>

        {/* This will be shown on smaller screens */}
        <button className="filterButton" onClick={toggleFilterVisibility}>
          FILTER
        </button>

        <div className="dropdownButtons">
          <select className="dropdown">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="contentContainer">
        {showFilter && (
          <div className="filterSectionWrapper">
            <VerticalFilter />
          </div>
        )}

        <div className={`productGridWrapper ${showFilter ? 'hasFilter' : ''}`}>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
