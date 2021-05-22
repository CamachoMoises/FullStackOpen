import React from "react";

const Persons = ({ personsToShow , deletePerson }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          Name:{person.name}, Number:{person.number}
          <button onClick={()=>deletePerson(person.id, person.name)}> Delete </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
