"use client";

import { useState } from "react";
import "./VerticalFilter.css";

const filterOptions = {
  "IDEAL FOR": ["Men", "Women"],
  "OCCASION": ["Work", "Party", "Casual", "Wedding"],
  "FABRIC": ["Cotton", "Silk", "Polyester", "Linen"],
  "SEGMENT": ["Premium", "Budget", "Luxury"],
  "SUITABLE FOR": ["Summer", "Winter", "All Seasons"],
  "RAW MATERIALS": ["Organic", "Synthetic", "Recycled"],
  "PATTERN": ["Plain", "Striped", "Printed", "Checked"]
};

export default function VerticalFilter() {
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleFilter = (filterName) => {
    setExpandedFilter(expandedFilter === filterName ? null : filterName);
  };

  const handleCheckboxChange = (filterName, option) => {
    setSelectedFilters((prevFilters) => {
      const currentSelections = prevFilters[filterName] || [];
      if (currentSelections.includes(option)) {
        return {
          ...prevFilters,
          [filterName]: currentSelections.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevFilters,
          [filterName]: [...currentSelections, option],
        };
      }
    });
  };

  return (
    <div className="filterContainer">
      {Object.keys(filterOptions).map((filterName) => (
        <div key={filterName} className="filterSection">
          <div className="filterHeader" onClick={() => toggleFilter(filterName)}>
            {filterName}
            <span className="dropdownArrow">
              {expandedFilter === filterName ? "▲" : "▼"}
            </span>
          </div>
          {expandedFilter === filterName && (
            <div className="filterOptions">
              {filterOptions[filterName].map((option) => (
                <label key={option} className="filterOption">
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[filterName]?.includes(option) || false
                    }
                    onChange={() => handleCheckboxChange(filterName, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
