import React from "react";

const Filter = ({filterCountries, handleFilterChange}) => {
  return (
    <div>
      filter show with <input value={filterCountries} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;