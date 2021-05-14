import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdotes=({anecdotes, points})=><><div>{anecdotes}</div><div>has {points} votes</div> </>

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints]=useState(new Array(6+1).join('0').split('').map(parseFloat));
  const copy=[...points];
  let max= copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  const handleClick= (i)=> {
    copy[i]+=1;
    max=copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
    setPoints(copy);
  }
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const RandomAnectdotes = () => {
    const newSelected = random(0,6);
    setSelected(newSelected);
  };

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <Anecdotes anecdotes={props.anecdotes[selected]} points={points[selected]}/>
      <button onClick={()=>handleClick(selected)} > vote </button>
      <button onClick={RandomAnectdotes}> next anecdote </button>
      <h1> Anecdote with most votes </h1>
      <Anecdotes anecdotes={props.anecdotes[max]} points={points[max]}/>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often", 
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", 
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", 
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
