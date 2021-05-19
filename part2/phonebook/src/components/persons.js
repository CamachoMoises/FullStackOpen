import React from "react";

const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          Name:{person.name}, Number:{person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
