import React from "react";
import Header from "./header"
import Part from "./part"
import Total from "./total"

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total parts={course.parts.map((part) => part.exercises)} />
    </div>
  );
};

export default Course;
