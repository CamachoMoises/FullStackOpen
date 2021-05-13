import React, { useState } from "react";
import ReactDOM from "react-dom";

const Average = ({ total, good, bad }) => {
  const average = (good - bad) / total;
  if (total === 0) {
    return <p> add comments </p>;
  }
  return <p> average {average} </p>;
};

const Positive = ({ good, total }) => {
  const positiveCom = (good * 100) / total;
  if (total === 0) {
    return <p> add positive comments </p>;
  }
  return <p> Positive {positiveCom} % </p> ;
};

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistics = ({ text, value }) => (
  <p>
    {" "}
    {text} {value}{" "}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + neutral + bad;
  const increaseGod = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1> give feedback </h1>
      <br />
      <Button handleClick={increaseGod} text="god" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1> Statistics </h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={total} />
      <Average total={total} good={good} bad={bad} />
      <Positive good={good} total={total}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
