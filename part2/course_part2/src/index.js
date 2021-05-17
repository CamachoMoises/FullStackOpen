import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}



const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      {course.parts.map(part=>
      <Part key={part.id} name={part.name}  exercises={part.exercises} />
      )}
   
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'Redux',
        exercises: 11,
      }
    ]
  }

  return (
    <div>
      <Content course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))