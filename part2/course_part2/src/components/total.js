import React from "react";

const Total = ({ parts }) => {
    console.log(parts);
    const total = parts.reduce((sum, exercises) => {
      console.log("what it happening", sum, exercises);
      return sum + exercises;
    });
    console.log("total", total);
    return <strong>Number of exercises {total}</strong>;
  };

  export default Total