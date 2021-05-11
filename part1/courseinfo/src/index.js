import React from "react";
import ReactDOM from "react-dom";
const Header = (props) => {
  return (
    <>
      <h1> {props.name} </h1>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p> Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise} </p>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {" "}
      {props.part} {props.exercise}{" "}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack applicalction development",

    parts: [
      {
        name: "Fundamental of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
