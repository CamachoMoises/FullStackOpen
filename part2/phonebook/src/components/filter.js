import React from "react";

const Filter = (props) => {
  return (
    <div>
      filter show with <input value={props.fillterName} onChange={props.handleFilterChange} />
    </div>
  );
};

export default Filter;
