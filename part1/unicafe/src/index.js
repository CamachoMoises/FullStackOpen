import React, { useState } from "react";
import ReactDOM from "react-dom";

const Average = ({ total, good, bad }) => {
  if (total === 0) {
    return <div> add comments </div>;
  }
  const average = (good - bad) / total;
  return <div> average {average} </div>;
};

const Positive = ({ good, total }) => {
  if (total === 0) {
    return <div> add positive comments </div>;
  }
  const positiveCom = (good * 100) / total;
  return <div> Positive {positiveCom} % </div>;
};

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistic= ({text, value})=> <div> {text} {value} </div>

const Statistics = ({ good, bad, neutral, total }) => {
  if(total===0){
    return <p> No feedback given </p>
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="all" value={total}/>
      <Average total={total} good={good} bad={bad} />
      <Positive good={good} total={total}/>
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
