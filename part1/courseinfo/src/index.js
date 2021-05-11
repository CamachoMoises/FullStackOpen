import React from 'react';
import ReactDOM from 'react-dom';
const Header = (props)=>{
    return (
        <>
         <h1> {props.course}  </h1>   
        </>
    )
} 

const Content=(props)=>{
    return (
        <div>
            < Part part={props.part1} exercise={props.exercise1}/>
            < Part part={props.part2} exercise={props.exercise2}/>            
            < Part part={props.part3} exercise={props.exercise3}/>            
        </div>
    )
}

const Total= (props)=>{
    return (
        <>
            <p> Number of exercises {props.total} </p>
        </>
    )
}

const Part= (props)=>{
    return (
        <p> {props.part}  {props.exercise} </p>
    )
}
const App = ()=>{
    const course = 'Half Stack applicalction development'

    const part1={
        name: 'Fundamental of React',
        exercise: 10
    }
    const part2={
        name:'Using props to pass data',
        exercise:7
    } 
    const part3 ={
        name:'State of a component',
        exercise:14
    }

    return(
        <div>
            <Header course={course} />
            <Content    part1={part1.name} exercise1={part1.exercise}
                        part2={part2.name} exercise2={part2.exercise}
                        part3={part3.name} exercise3={part3.exercise}/>
            <Total  total={part1.exercise + part2.exercise + part3.exercise} />
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)