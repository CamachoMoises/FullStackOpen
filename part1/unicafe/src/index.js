import React, { useState } from "react";
import ReactDOM from "react-dom";

const Average = ({ total, good, bad }) => {
  if (total === 0) {
    return <div> add comments </div>;
  }
  const average = (good - bad) / total;
  return (
    <tr>
      <td> average </td>
      <td>{average.toFixed(1)} </td>
    </tr>
  );
};

const Positive = ({ good, total }) => {
  if (total === 0) {
    return <div> add positive comments </div>;
  }
  const positiveCom = (good * 100) / total;
  return (
    <tr>
      <td> Positive </td>
      <td>{positiveCom.toFixed(1)}% </td>
    </tr>
  );
};

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
);

const Statistics = ({ good, bad, neutral, total }) => {
  if (total === 0) {
    return <p> No feedback given </p>;
  }
  return (
    <div>
      <table>
        <tbody> 
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={total} />
        <Average total={total} good={good} bad={bad} />
        <Positive good={good} total={total} />
        </tbody>
      </table>
    </div>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
